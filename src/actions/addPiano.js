import { setCurrentCustomer } from "./currentCustomer";
import { customerList } from "./customerList";
import { clearCurrentAppointment } from "./appointment";

export const clearcurrentPiano = () => {
  return {
    type: "CLEAR_CURRENT_PIANO",
  };
};

export const clearPianos = () => {
  return {
    type: "CLEAR_PIANOS",
  };
};

export const renderPianos = (pianos) => {
  return {
    type: "RENDER_PIANOS",
    pianos,
  };
};

const clearPianoForm = () => {
  return {
    type: "CLEAR_PIANO_FORM",
  };
};

export const setCurrentPiano = (pianoData) => {
  return {
    type: "ADD_CURRENT_PIANO",
    pianoData,
  };
};

export const addPiano = (credentials, history) => {

  const pianoFormInfo = {
    make: credentials.formData.make,
    model: credentials.formData.model,
    serial: credentials.formData.serial,
    notes: credentials.formData.notes,
    year: credentials.formData.year,
    image: credentials.formData.image,
    user_id: credentials.userId,
    customer_id: credentials.customerId,
    appointment_id: credentials.appointmentId,
    images: credentials.images
  };
  debugger
  return (dispatch) => {
    return fetch(
      `http://localhost:3001/api/v1/users/${credentials.userId}/customers/${credentials.customerId}/pianos`,
      {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(pianoFormInfo),
      }
    )
      .then((resp) => resp.json())
      .then((piano) => {
        if (piano.errors) {
          alert(piano.errors);
        } else {
          dispatch(getPianos(credentials.userId));
          // dispatch(customerList(credentials.userId));
          dispatch(setCurrentCustomer(credentials.customerId));
          dispatch(clearPianoForm());
          dispatch(clearCurrentAppointment());
          history.push(
            `/users/${credentials.userId}/customers/${credentials.customerId}`
          );
        }
      })
      .catch((errors) => console.log(errors));
  };
};

export const getPianos = (user) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/users/${user}/pianos`, {
      credentials: "include",
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((pianos) => {
        if (pianos.errors) {
          alert(pianos.errors);
        } else {
          dispatch(renderPianos(pianos.data));
        }
      })

      .catch((errors) => console.log(errors));
  };
};

export const patchPianoInfo = (
  formData,
  userId,
  history,
  customerId,
  pianoId,
  appointmentId
) => {
  return (dispatch) => {
    const pianoEditData = {
      piano: {
        id: pianoId,
        make: formData.make,
        model: formData.model,
        year: formData.year,
        notes: formData.notes,
        serial: formData.serial,
        image: formData.image,
        user_id: formData.userId,
        appointment_id: formData.appointmentId,
      },
    };
    return fetch(
      `http://localhost:3001/api/v1/users/${userId}/customers/${customerId}/pianos/${pianoId}`,
      {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pianoEditData),
      }
    )
      .then((resp) => resp.json())
      .then((piano) => {
        if (piano.errors) {
          alert(piano.errors);
        } else {
          dispatch(getPianos(userId));
          history.push(`/users/${userId}/customers/${customerId}/pianos`);
        }
      });
  };
};

export const destroyPiano = (userId, customerId, pianoId, history) => {
  return (dispatch) => {
    return fetch(
      `http://localhost:3001/api/v1/users/${userId}/customers/${customerId}/pianos/${pianoId}`,
      {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch(getPianos(userId));
        dispatch(customerList(userId));
        history.goBack();
      });
  };
};

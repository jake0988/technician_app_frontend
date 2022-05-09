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

export const clearPianoForm = () => {
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

export function addPiano(userId, customerId, data) {
  // const url = `http://localhost:3001/api/v1/users/${userId}/customers/${customerId}/pianos`;
  return (dispatch) => {
    return fetch(
      `http://localhost:3001/api/v1/users/${userId}/customers/${customerId}/pianos`,
      {
        credentials: "include",
        method: "POST",
        body: data,
        // headers: {
        //   "Content-type": "multipart/form-data",
        // },
      }
    )
      .then((resp) => {
        resp.json();
      })
      .then((resp) => {
        // debugger;
        dispatch(getPianos(resp.data.attributes.userId));
        console.log("FILE UPLOADED SUCCESSFULLY");
      })
      .catch(function (error) {
        console.log("ERROR WHILE UPLOADING FILE");
      });
  };
}

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
        history.push(`/users/${userId}/customers/${customerId}/pianos`)
        dispatch(getPianos(userId));
        dispatch(customerList(userId)); 
      });
  };
};

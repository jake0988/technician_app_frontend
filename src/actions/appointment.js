export const addAppointmentSuccess = (appointment) => {
  return {
    type: "ADD_APPOINTMENT_SUCCESS",
    appointment,
  };
};

export const setCurrentAppointment = (appointmentData) => {
  return {
    type: "ADD_CURRENT_APPOINTMENT",
    appointmentData,
  };
};

export const clearCurrentAppointment = () => {
  return {
    type: "CLEAR_CURRENT_APPOINTMENT",
  };
};

export const listAppointments = (appoinments) => {
  return {
    type: "LIST_APPOINTMENTS",
    appoinments,
  };
};

export const resetAppointmentForm = () => {
  return {
    type: "RESET_APPOINTMENT_FORM",
  };
};

export const editAppointmentInfo = (appointmentData) => {
  return {
    type: "EDIT_APPOINTMENT_INFO",
    appointmentData,
  };
};

function dateChanger(date) {
  date = date.split("/");
  const dateA = date.shift();
  date.push(dateA);
  const dateB = date.join("-");
  return dateB;
}
export const addAppointment = (userId, customerId, history, credentials) => {
  const addAppointmentCred = {
    appointment: { ...credentials, user_id: userId, customer_id: customerId },
  };
  return (dispatch) => {
    return fetch(
      `http://localhost:3001/api/v1/users/${userId}/customers/${customerId}/appointments`,
      {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(addAppointmentCred),
      }
    )
      .then((resp) => resp.json())
      .then((appointment) => {
        if (appointment.errors) {
          alert(appointment.errors);
        } else {
          dispatch(addAppointmentSuccess(appointment.data));
          dispatch(resetAppointmentForm());
          history.push(`/`);
        }
      })
      .catch(console.log());
  };
};

export const appointmentsList = (userId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/users/${userId}/appointments`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((appointment) => {
        if (appointment.errors) {
          alert(appointment.errors);
        } else {
          dispatch(listAppointments(appointment.data));
          appointment.data.forEach((app) => {
            const dateAttributes = app.attributes.date;
            const newDate = dateChanger(dateAttributes);
            app.attributes.date = newDate;
          });
        }
      })
      .catch(console.log());
  };
};

export const patchAppointmentInfo = (
  formData,
  userId,
  history,
  customerId,
  appointmentId,
  pianoId
) => {
  return (dispatch) => {
    const appointmentEditData = {
      appointment: {
        id: appointmentId,
        initial_a4: formData.initial_a4,
        work_done: formData.work_done,
        price: formData.price,
        date: formData.date,
        hours: formData.hours,
        user_id: userId,
        piano_id: pianoId,
      },
    };
    return fetch(
      `http://localhost:3001/api/v1/users/${userId}/customers/${customerId}/appointments/${appointmentId}`,
      {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentEditData),
      }
    )
      .then((resp) => resp.json())
      .then((appointment) => {
        if (appointment.errors) {
          alert(appointment.errors);
        } else {
          dispatch(editAppointmentInfo(appointment.data));
          dispatch(appointmentsList(userId));
          history.push(
            `/users/${userId}/customers/${customerId}/appointments/${appointmentId}`
          );
        }
      });
  };
};

export const destroyAppointment = (
  userId,
  appointmentId,
  currentCustomerId,
  history
) => {
  return (dispatch) => {
    // debugger;

    return fetch(
      `http://localhost:3001/api/v1/users/${userId}/appointments/${appointmentId}`,
      {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ userId, appointmentId }),
      }
    )
      .then((r) => r.json())

      .then((resp) => {
        if (resp.errors) {
          alert(resp.errors);
        } else {
          dispatch(appointmentsList(userId));
          history.push(
            `/users/${userId}/customers/${currentCustomerId}/appointments`
          );
        }
      })
      .catch(console.log);
  };
};

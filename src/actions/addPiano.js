export const addPianoForm = (formData) => {
  return {
    type: "ADD_PIANO",
    formData,
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

export const addPiano = (credentials, history) => {
  const pianoFormInfo = {
    make: credentials.formData.make,
    model: credentials.formData.model,
    serial: credentials.formData.serial,
    notes: credentials.formData.notes,
    year: credentials.formData.year,
    user_id: credentials.userId,
    customer_id: credentials.customerId,
  };
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
          dispatch(addPianoForm(piano.data.attributes));
          dispatch(clearPianoForm());
          history.push(`/pianos/${piano.data.attributes.id}`);
        }
      })

      .catch((errors) => console.log(errors));
  };
};

export const getPianos = (user, customer) => {
  return (dispatch) => {
    return fetch(
      `http://localhost:3001/api/v1/users/${user}/customers/${customer}/pianos`,
      {
        credentials: "include",
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
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

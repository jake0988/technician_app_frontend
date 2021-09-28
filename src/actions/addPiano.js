export const addPianoForm = (formData) => {
  return {
    type: "ADD_PIANO",
    formData,
  };
};

const clearPianoForm = () => {
  return {
    type: "CLEAR_PIANO_FORM",
  };
};

export const addPiano = (credentials, history) => {
  const pianoFormInfo = {
    make: credentials.updateFormData.make,
    model: credentials.updateFormData.model,
    serial: credentials.updateFormData.serial,
    notes: credentials.updateFormData.notes,
    year: credentials.updateFormData.year,
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
          history.push(
            `/users/${credentials.userId}/customer/${credentials.customerId}/pianos/${piano.data.attributes.id}`
          );
        }
      })

      .catch((errors) => console.log(errors));
  };
};

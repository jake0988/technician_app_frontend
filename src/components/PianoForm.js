import React from "react";
import { connect } from "react-redux";
import { updatePianoForm } from "../actions/updatePianoForm.js";
import { addPiano } from "../actions/addPiano.js";

const PianoForm = ({
  updatePianoForm,
  updateFormData,
  addPiano,
  currentUser,
  currentCustomer,
  history,
  make,
  model,
  year,
  notes,
  serial,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    const updateFormInfo = {
      ...updateFormData,
      [name]: value,
    };
    return updatePianoForm(updateFormInfo, history);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submitFormData = {
      updateFormData,
      userId: currentUser,
      customerId: currentCustomer,
    };
    addPiano(submitFormData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="make">Make</label>
      <input type="text" onChange={handleChange} value={make} name="make" />
      <label for="model">Model</label>
      <input type="text" onChange={handleChange} value={model} name="model" />
      <label for="serial">Serial</label>
      <input type="text" onChange={handleChange} value={serial} name="serial" />
      <label for="year">Year</label>
      <input type="text" onChange={handleChange} value={year} name="year" />
      <label for="notes">Notes</label>
      <textarea
        onChange={handleChange}
        rows="8"
        cols="50"
        value={notes}
        name="notes"
      />
      <input type="submit" value="Add Piano" />
    </form>
  );
};

const mapStateToProps = (state) => {
  const { make, model, year, notes, serial } = state.updatePianoForm;
  return {
    currentUser: state.currentUser.id,
    updateFormData: state.updatePianoForm,
    currentCustomer: state.currentCustomer.id,
    formData: {
      make,
      model,
      year,
      notes,
      serial,
    },
  };
};
export default connect(mapStateToProps, { updatePianoForm, addPiano })(
  PianoForm
);

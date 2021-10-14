import React from "react";
import { connect } from "react-redux";
import { updatePianoForm } from "../../actions/updatePianoForm";
import { addPiano } from "../../actions/addPiano.js";

const PianoForm = ({
  updatePianoForm,
  formData,
  addPiano,
  currentUser,
  currentCustomer,
  history,
}) => {
  const { make, model, year, notes, serial } = formData;
  const handleChange = (event) => {
    const { name, value } = event.target;
    const updateFormInfo = {
      ...formData,
      [name]: value,
    };
    return updatePianoForm(updateFormInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submitFormData = {
      formData,
      userId: currentUser,
      customerId: currentCustomer,
    };
    addPiano(submitFormData, history);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="make"
        onChange={handleChange}
        value={make}
        name="make"
      />
      <input
        type="text"
        placeholder="model"
        onChange={handleChange}
        value={model}
        name="model"
      />
      <input
        type="text"
        placeholder="serial"
        onChange={handleChange}
        value={serial}
        name="serial"
      />
      <input
        type="text"
        placeholder="year"
        onChange={handleChange}
        value={year}
        name="year"
      />
      <textarea
        placeholder="notes"
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
  return {
    currentUser: state.currentUser.id,
    formData: state.updatePianoForm,
    currentCustomer: state.currentCustomer.id,
  };
};
export default connect(mapStateToProps, { updatePianoForm, addPiano })(
  PianoForm
);

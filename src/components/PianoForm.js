import React from "react";
import { connect } from "react-redux";

const PianoForm = () => {
  const handleChange = (event) => {
    return event;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="make">Make</label>
      <input type="text" value={handleChange} name="make" />
      <label for="model">Model</label>
      <input type="text" value={handleChange} name="model" />
      <label for="serial">Serial</label>
      <input type="text" value={handleChange} name="serial" />
      <label for="year">Year</label>
      <input type="text" value={handleChange} name="year" />
      <label for="notes">Notes</label>
      <input
        type="textarea"
        rows="8"
        cols="50"
        value={handleChange}
        name="notes"
      />
      <input type="submit">Add Piano</input>
    </form>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(PianoForm);

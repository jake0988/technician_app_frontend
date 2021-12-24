import React from "react";
import { connect } from "react-redux";
import { updateAppointmentForm } from "../../actions/updateAppointmentForm";
import { addAppointment } from "../../actions/appointment";

const AppointmentForm = ({
  handleSubmit,
  formData,
  updateAppointmentForm,
  editMode,
  id,
}) => {
  const { initial_a4, work_done, price, hours, date } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateAppointmentForm(name, value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   createappointment(formData, userId, history);
  // };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData, id);
      }}
    >
      <p>
        <input
          type="text"
          value={initial_a4}
          name="initial_a4"
          placeholder="Initial A4"
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          type="price"
          value={price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          type="date"
          value={date}
          name="date"
          placeholder={date}
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          type="text"
          size="75"
          value={hours}
          name="hours"
          placeholder="Hours"
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          type="text"
          value={work_done}
          name="work_done"
          placeholder="Work Done"
          onChange={handleChange}
        />
      </p>
      {editMode ? (
        <input type="submit" value="Edit appointment" />
      ) : (
        <input type="submit" value="Create appointment" />
      )}
    </form>
  );
};

const mapStateToProps = (state) => {
  const userId = state.currentUser ? state.currentUser.id : null;

  return {
    appointments: state.appointments,
    formData: state.addAppointmentForm,
    userId,
  };
};

export default connect(mapStateToProps, {
  addAppointment,
  updateAppointmentForm,
})(AppointmentForm);

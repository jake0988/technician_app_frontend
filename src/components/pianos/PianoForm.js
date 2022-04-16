import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updatePianoForm } from "../../actions/updatePianoForm";
import { addPiano } from "../../actions/addPiano.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { customerList } from "../../actions/customerList";
import { setCurrentCustomer } from "../../actions/currentCustomer";
import { setCurrentAppointment } from "../../actions/appointment";

const PianoForm = ({
  updatePianoForm,
  formData,
  addPiano,
  history,
  customerId,
  userId,
  appointmentId
}) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(customerList(userId))
    dispatch(setCurrentCustomer(customerId))
    if (appointmentId) {
      dispatch(setCurrentAppointment(appointmentId))
    }
  }, [])
  const currentAppointment = useSelector((state)=>state.currentAppointment)
  const customers = useSelector((state)=>state.customers)
  const currentCustomer = customers.find((customer)=>customer.id === customerId)
  const currentUser = useSelector((state)=>state.currentUser)
  const { make, model, year, notes, serial, image } = formData;
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
      userId: currentUser.id,
      customerId: currentCustomer.id,
      appointmentId: currentAppointment,
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
      <input
        type="text"
        placeholder="image"
        onChange={handleChange}
        value={image}
        name="image"
      />

      <textarea
        placeholder="notes"
        onChange={handleChange}
        rows="8"
        cols="50"
        value={notes}
        name="notes"
      />
      <input
        type="hidden"
        name="appointment_id"
        value={currentAppointment}
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
    currentAppointment: state.currentAppointment.id
  };
};
export default connect(mapStateToProps, { updatePianoForm, addPiano })(
  PianoForm
);

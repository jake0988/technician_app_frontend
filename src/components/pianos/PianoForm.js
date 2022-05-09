import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { updatePianoForm } from "../../actions/updatePianoForm";
import { addPiano, getPianos } from "../../actions/addPiano.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { customerList } from "../../actions/customerList";
import { setCurrentCustomer } from "../../actions/currentCustomer";
import { setCurrentAppointment } from "../../actions/appointment";
import { newPiano } from "../../actions/addPiano.js";
import { PianoFormCard } from "./PianoFormCard";
import { clearPianoForm } from "../../actions/addPiano.js";
// import { post } from "axios";

const PianoForm = ({
  // updatePianoForm,
  // formData,
  addPiano,
  history,
  customerId,
  userId,
  appointmentId,
}) => {
  const formD = new FormData();
  const returnedImageRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(customerList(userId));
    dispatch(setCurrentCustomer(customerId));
    if (appointmentId) {
      dispatch(setCurrentAppointment(appointmentId));
    }
  }, []);

  
  // debugger

  function imagesUpload(file) {
    returnedImageRef.current = file;
  }
  const formData = useSelector((state) => state.updatePianoForm);
  const currentAppointment = useSelector((state) => state.currentAppointment);
  const customers = useSelector((state) => state.customers);
  const currentCustomer = customers.find(
    (customer) => customer.id === customerId
  );
  const currentUser = useSelector((state) => state.currentUser);
  const { make, model, year, notes, serial, imageName } = formData;
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updatePianoForm(name, value));

  };
 
  const handleSubmit = (form) => {
    !!formData.make ? formD.set("piano[make]", formData.make) : formD.set("", null);
    !!formData.model ? formD.set("piano[model]", formData.model) : formD.set("", null);
    !!formData.serial ? formD.set("piano[serial]", formData.serail) : formD.set("", null);
    !!formData.year ? formD.set("piano[year]", formData.year) : formD.set("", null);
    !!formData.notes ? formD.set("piano[notes]", formData.notes) : formD.set("", null);
    !!returnedImageRef.current ? formD.set("piano[image]", returnedImageRef.current) : formD.set("", null);
    formD.set("piano[user_id]", currentUser.id);
    formD.set("piano[customer_id]", currentCustomer.id);
    appointmentId !== undefined ??
    formD.set("piano[appointment_id]", appointmentId);
    dispatch(newPiano(userId, customerId, formD, history));

    dispatch(clearPianoForm());
  };
  
// debugger
  return (
    <PianoFormCard
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      imagesUpload={imagesUpload}
      appointmentId={appointmentId}
      userId={userId}
      customerId={customerId}
      formData={formData}
    />
  );
};

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.currentUser.id,
//     formData: state.updatePianoForm,
//     currentCustomer: state.currentCustomer.id,
//     currentAppointment: state.currentAppointment.id,
//   };
// };
export default PianoForm;

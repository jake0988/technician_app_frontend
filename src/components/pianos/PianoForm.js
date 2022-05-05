import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { updatePianoForm } from "../../actions/updatePianoForm";
import { addPiano } from "../../actions/addPiano.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { customerList } from "../../actions/customerList";
import { setCurrentCustomer } from "../../actions/currentCustomer";
import { setCurrentAppointment } from "../../actions/appointment";
import { newPiano } from "./newPiano";
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
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(clearPianoForm);
    dispatch(customerList(userId));
    dispatch(setCurrentCustomer(customerId));

    if (appointmentId) {
      dispatch(setCurrentAppointment(appointmentId));
    }
  }, []);
  const returnedImage = useRef();

  function imagesUpload(file) {
    returnedImage.current = file;
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
    // debugger;
    const updateFormInfo = {
      ...formData,
      [name]: value,
    };
    dispatch(updatePianoForm(name, value));
  };
  const imageBlob = (file) => {
    // debugger;
    const object = { target: { name: "image", value: file } };
    handleChange(object);
    return object.target.value;
  };
  const handleSubmit = (form) => {
    formD.set("piano[make]", formData.make);
    formD.set("piano[model]", formData.model);
    formD.set("piano[year]", formData.year);
    formD.set("piano[notes]", formData.notes);
    returnedImage.current !== undefined ??
      formD.set("piano[image]", returnedImage.current);
    formD.set("piano[user_id]", currentUser.id);
    formD.set("piano[customer_id]", currentCustomer.id);
    appointmentId !== undefined ??
      formD.set("piano[appointment_id]", appointmentId);
    dispatch(newPiano(userId, customerId, formD, history));

    dispatch(clearPianoForm());
  };
  // dispatch(addPiano(submitFormData, history, formD));
  //   const config = {
  //    headers: { "content-type": "multipart/form-data" }
  //  };

  return (
    <PianoFormCard
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      imagesUpload={imagesUpload}
      appointmentId={appointmentId}
      userId={userId}
      customerId={customerId}
      formData={formData}
      imageBlob={imageBlob}
      imageName={imageName}
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

import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { updatePianoForm } from "../../actions/updatePianoForm";
import { addPiano } from "../../actions/addPiano.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { customerList } from "../../actions/customerList";
import { setCurrentCustomer } from "../../actions/currentCustomer";
import { setCurrentAppointment } from "../../actions/appointment";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import UploadButton from "./UploadButton";
// import { post } from "axios";

const PianoForm = ({
  updatePianoForm,
  formData,
  addPiano,
  history,
  customerId,
  userId,
  appointmentId,
}) => {
  const formD = new FormData();
  const dispatch = useDispatch();
  useEffect(() => {
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

  const currentAppointment = useSelector((state) => state.currentAppointment);
  const customers = useSelector((state) => state.customers);
  const currentCustomer = customers.find(
    (customer) => customer.id === customerId
  );
  const currentUser = useSelector((state) => state.currentUser);
  const { make, model, year, notes, serial } = formData;
  const handleChange = (event) => {
    const { name, value } = event.target;
    const updateFormInfo = {
      ...formData,
      [name]: value,
    };
    return updatePianoForm(updateFormInfo);
  };

  const handleSubmit = (form) => {
    formD.set("piano[make]", formData.make);
    formD.set("piano[model]", formData.model);
    formD.set("piano[year]", formData.year);
    formD.set("piano[notes]", formData.notes);
    formD.set("piano[image]", returnedImage.current);
    formD.set("piano[user_id]", currentUser.id);
    formD.set("piano[customer_id]", currentCustomer.id);
    // formD.set("piano[appointment_id]", appointmentId);

    const tempBlah = {
      make: formData.make,
      model: formData.model,
      year: formData.year,
      notes: formData.notes,
      images: returnedImage.current,
    };
    // formD.set("pianos", tempBlah)
    const submitFormData = {
      formD,
      userId: currentUser.id,
      customerId: currentCustomer.id,
      appointmentId: appointmentId,
    };

    dispatch(addPiano(userId, customerId, formD));
    // dispatch(addPiano(submitFormData, history, formD));
    //   const config = {
    //    headers: { "content-type": "multipart/form-data" }
    //  };
  };

  // function add(data) {
  //   const url = `http://localhost:3001/api/v1/users/${userId}/customers/${customerId}/pianos`;

  //   return fetch(url, {
  //     credentials: "include",
  //     method: "POST",
  //     body: data,
  //     // headers: {
  //     //   "Content-type": "multipart/form-data",
  //     // },
  //   })
  //     .then((resp) => resp.json())
  //     .then(function (response) {
  //       // debugger;
  //       console.log("FILE UPLOADED SUCCESSFULLY");
  //     })
  //     .catch(function (error) {
  //       console.log("ERROR WHILE UPLOADING FILE");
  //     });
  // }

  return (
    <Container fluid>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
        <Row>
          <Col>
            <Form.Group className="mb-2" controlId="formMake">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="make"
                value={make ?? ""}
                placeholder="Enter Make"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-2" controlId="formModel">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                name="model"
                value={model ?? ""}
                placeholder="Enter Model"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-2" controlId="formSerial">
              <Form.Label>Serial</Form.Label>
              <Form.Control
                type="text"
                name="serial"
                value={serial ?? ""}
                placeholder="Enter Serial"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-2" controlId="formYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                name="year"
                value={year ?? ""}
                placeholder="Enter Year"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Form.Group className="mb-2" controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={image ?? ""}
                placeholder="Enter Image Url"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <Form.Group className="mb-2" controlId="formNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                type="text"
                name="notes"
                value={notes ?? ""}
                placeholder="Enter Notes"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Form.Group controlId="formAppointmentId">
            <Form.Control
              type="hidden"
              name="appointmentId"
              value={appointmentId}
            />
          </Form.Group>
        </Row>
        <UploadButton imagesUpload={imagesUpload} />
        <Button className="add-button" type="submit">
          Add Piano
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.id,
    formData: state.updatePianoForm,
    currentCustomer: state.currentCustomer.id,
    currentAppointment: state.currentAppointment.id,
  };
};
export default connect(mapStateToProps, { updatePianoForm, addPiano })(
  PianoForm
);

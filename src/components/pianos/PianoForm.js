import React, { useEffect, useRef } from "react";
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
import Uploader from "./Uploader";

const PianoForm = ({
  updatePianoForm,
  formData,
  addPiano,
  history,
  customerId,
  userId,
  appointmentId,
  
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(customerList(userId));
    dispatch(setCurrentCustomer(customerId));
    if (appointmentId) {
      dispatch(setCurrentAppointment(appointmentId));
    }
  }, []);
  const returnedImage = useRef()
  function imagesUpload(file) {
   
    returnedImage.current = file
    // <Uploader file=returnedImage.current />
  }
 
  
  const currentAppointment = useSelector((state) => state.currentAppointment);
  const customers = useSelector((state) => state.customers);
  const currentCustomer = customers.find(
    (customer) => customer.id === customerId
  );
  const currentUser = useSelector((state) => state.currentUser);
  const { make, model, year, notes, serial, image } = formData;
  const handleChange = (event) => {
    const { name, value } = event.target;
    const updateFormInfo = {
      ...formData,
      [name]: value,
    };
    return updatePianoForm(updateFormInfo);
  };

  const handleSubmit = (formData) => {
    // let reader = new FileReader();
    // const r =returnedImage.current
    // const c = reader.readAsArrayBuffer(r)
    const form = new FormData()
    const obj = {images: returnedImage.current}
    for (const property in obj) {
      form.set(
        property, obj[property]
      )
    }
    form.set('make', formData.make)
    form.set('model', formData.model)
    form.set('year', formData.year)
    form.set('notes', formData.notes)
    form.set('serial', formData.serial)
    
    // ReadFile(returnedImage);
    const submitFormData = {
      form,
      userId: currentUser.id,
      customerId: currentCustomer.id,
      appointmentId: appointmentId,
    };
    dispatch(addPiano(submitFormData, history, form));
  };
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
        <Row>
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
        </Row>
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
        <UploadButton imagesUpload={imagesUpload}/>
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

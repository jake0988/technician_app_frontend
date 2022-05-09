import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import UploadButton from "./UploadButton";
import { useDispatch } from "react-redux";
import { updatePianoForm } from "../../actions/updatePianoForm";
import { Field, reduxForm } from "redux-form";
import { ResetButton } from "./ResetButton";

export const PianoFormCard = ({
  handleSubmit,
  formData,
  imagesUpload,
  appointmentId,
  handleChange,
  imageBlob,
  
}) => {

  const { make, model, year, notes, serial, imageName } = formData;
  
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
              <Form.Label>Make</Form.Label>
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
              name="appointment_id"
              value={appointmentId}
            />
          </Form.Group>
        </Row>
       
            {/* <Form.Group>
              <Form.Control
              type="file"
              onChange={onFileChange}
            />
              {imageName ?? "Upload"} */}
              {/* </Form.Group> */}
        <UploadButton
          imagesUpload={imagesUpload}
          imageBlob={imageBlob}
          handleChange={handleChange}
          imageName={imageName}
        />
        <ResetButton>
        </ResetButton>
        <Button className="add-button" type="submit">
          Add Piano
        </Button>
      </Form>
    </Container>
  );
};

import React from "react";
import { connect } from "react-redux";
import { updateAppointmentForm } from "../../actions/updateAppointmentForm";
import { addAppointment } from "../../actions/appointment";
import { Form, Row, Col, Button } from "react-bootstrap";

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
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData, id);
      }}
    >
      <Row>
        <Col md={1}>
          <Form.Group className="mb-3" controlId="formA4">
            <Form.Label>Initial A4</Form.Label>
            <Form.Control
              type="text"
              name="initial_a4"
              value={initial_a4}
              placeholder="Enter"
              onChange={handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Col>
        <Col md={1}>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={price}
              placeholder="Enter"
              onChange={handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={1}>
          <Form.Group className="mb-3" controlId="hours">
            <Form.Label>Hours</Form.Label>
            <Form.Control
              type="text"
              name="hours"
              value={hours}
              placeholder="Enter"
              onChange={handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="workDone">
          <Form.Label>Work Performed</Form.Label>
          <Form.Control
            type="text"
            name="work_done"
            value={work_done}
            placeholder="Enter"
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Row>
      {editMode ? (
        <Button variant="primary" value="Edit appointment" type="submit">
          Submit
        </Button>
      ) : (
        <Button variant="primary" value="Create appointment" type="submit">
          Submit
        </Button>
      )}
    </Form>
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

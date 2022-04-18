import React from "react";
import { Table, Button, Row, Col, Container, Form } from "react-bootstrap";

import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { destroyAppointment } from "../../actions/appointment";
import { UserNavCard } from "../users/UserNavCard";
import { AppointmentPianoCard } from "./AppointmentPianoCard";
import { patchAppointmentInfo } from "../../actions/appointment";
import { useRef } from "react";
import { AppointmentPianoCardVerified } from "./AppointmentPianoCardVerified";
import { useState } from "react";
function AppointmentCard({
  currentAppointmentId,
  currentCustomerId,
  userId,
  history,
}) {
  const pianoId = useRef();
  const dispatch = useDispatch();
  function destroyer(e) {
    e.preventDefault();
    dispatch(
      destroyAppointment(
        userId,
        currentAppointmentId,
        currentCustomerId,
        history
      )
    );
  }
  const [show, toggleShow] = "none";
  const appointment = useSelector((state) =>
    state.appointments.find(
      (appointment) => appointment.id === currentAppointmentId
    )
  );
  const { initial_a4, work_done, price, hours, date } = appointment.attributes;
  const formData = { initial_a4, work_done, price, hours, date };
  const customer = useSelector((state) =>
    state.customers.find((customer) => customer.id === currentCustomerId)
  );
  const piano = useSelector((state) =>
    state.pianos.find(
      (piano) => appointment.attributes.piano_id === piano.attributes.id
    )
  );
  const customerPianos = useSelector((state) =>
    state.pianos.filter(
      (piano) => parseInt(currentCustomerId) === piano.attributes.customer_id
    )
  );
  function handleClick(e) {
    e.preventDefault();
    history.push(
      `/users/${userId}/customers/${currentCustomerId}/appointments/${currentAppointmentId}/edit`
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      patchAppointmentInfo(
        formData,
        userId,
        history,
        currentCustomerId,
        currentAppointmentId,
        pianoId.current
      )
    );
  }
  function hideTable() {
    debugger;
  }
  function handleChange(e) {
    const { value } = e.target;
    e.target.checked ? (pianoId.current = value) : (pianoId.current = "");
  }
  pianoId.current = handleChange;
  const appointmentList = appointment ? (
    <Container fluid>
      <h2>
        <strong>Customer Name: {customer.attributes.name}</strong>
      </h2>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Initial A4</th>
            <th>Work Performed</th>
            <th>Hours</th>
            <th>Price</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{appointment.attributes.date}</td>
            <td>{appointment.attributes.initial_a4}</td>
            <td>{appointment.attributes.work_done}</td>
            <td>{appointment.attributes.hours}</td>
            <td>{appointment.attributes.price}</td>
            <td>{appointment.attributes.created_at}</td>
          </tr>

          {piano ? (
            <>
              <Row>
                <th>Pianos: </th>
              </Row>{" "}
              <AppointmentPianoCardVerified
                piano={piano}
                currentAppointmentId={currentAppointmentId}
                userId={userId}
                history={history}
                currentCustomerId={currentCustomerId}
              />
            </>
          ) : null}
          <Row>
            <Col>
              <Button className="edit-button" onClick={(e) => handleClick(e)}>
                Edit Appointment
              </Button>
            </Col>
            <Col colspan="3">
              <Button className="delete-button" onClick={(e) => destroyer(e)}>
                Delete Appointment
              </Button>
            </Col>

            <Col>
              <UserNavCard
                userId={userId}
                history={history}
                currentCustomerId={currentCustomerId}
                currentAppointmentId={currentAppointmentId}
              />
            </Col>
          </Row>
        </tbody>
      </Table>
      {customerPianos !== [] ? (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td onClick={hideTable}>Associate Piano with Appointment</td>
              </tr>
              <Button varaint="primary" type="submit">
                Click here to add checked piano to the appointment
              </Button>
            </thead>
            {customerPianos.map((piano) => {
              return (
                <AppointmentPianoCard
                  piano={piano}
                  currentAppointmentId={currentAppointmentId}
                  userId={userId}
                  history={history}
                  currentCustomerId={currentCustomerId}
                  handleChange={handleChange}
                />
              );
            })}
          </Table>
        </Form>
      ) : null}
    </Container>
  ) : (
    "No Appointments"
  );

  return <div>{appointmentList}</div>;
}

export default AppointmentCard;

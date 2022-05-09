import React from "react";
import { Table, Button, Row, Col, Modal, Container, Form, Collapse } from "react-bootstrap";

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  const [open, setOpen] = useState(false);
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

  function handleChange(e) {
    const { value } = e.target;
    e.target.checked ? (pianoId.current = value) : (pianoId.current = "");
  }
  pianoId.current = handleChange;
  const appointmentList = appointment ? (
    <Container fluid>
      <Table bordered striped>
        <thead>
          <tr>
            <td colSpan="6">
              <b>Customer Name: {customer.attributes.name}</b>
            </td>
          </tr>
          <tr>
            <th key={uuidv4(appointment.attributes.date)}>Date</th>
            <th key={uuidv4(appointment.attributes.date)}>Initial A4</th>
            <th key={uuidv4(appointment.attributes.date)}>Work Performed</th>
            <th key={uuidv4(appointment.attributes.date)}>Hours</th>
            <th key={uuidv4(appointment.attributes.date)}>Price</th>
            <th key={uuidv4(appointment.attributes.date)}>Date Created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td key={uuidv4(appointment.attributes.date)}>
              {appointment.attributes.date}
            </td>
            <td key={uuidv4(appointment.attributes.initial_a4)}>
              {appointment.attributes.initial_a4}
            </td>
            <td key={uuidv4(appointment.attributes.work_done)}>
              {appointment.attributes.work_done ? <><Button size="small" style={{backgroundColor:"brown"}} onClick={handleShow}>
              {appointment.attributes.work_done.slice(0,10)}</Button>
              <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Body>{appointment.attributes.work_done}</Modal.Body>
                </Modal.Header>
              </Modal></> : null} 
            </td>
            <td key={uuidv4(appointment.attributes.hours)}>
              {appointment.attributes.hours}
            </td>
            <td key={uuidv4(appointment.attributes.price)}>
              {appointment.attributes.price}
            </td>
            <td key={uuidv4(appointment.attributes.created_at)}>
              {appointment.attributes.created_at}
            </td>
          </tr>

          {piano ? (
            <>
              <tr key={uuidv4(appointment.attributes.date)} id="piano-row">
                <th key={uuidv4(piano.id)} id="piano-th">
                  Pianos:{" "}
                </th>
              </tr>
              <AppointmentPianoCardVerified
                piano={piano}
                currentAppointmentId={currentAppointmentId}
                userId={userId}
                history={history}
                currentCustomerId={currentCustomerId}
                s
              />
            </>
          ) : null}
        </tbody>
      </Table>
      <Table bordered>
        <tbody>
          <tr key={uuidv4(appointment.attributes.date)}>
            <td colSpan="4" key={uuidv4(appointment.attributes.date)}>
              <Button className="edit-button" onClick={(e) => handleClick(e)}>
                Edit Appointment
              </Button>
            </td>
            <td colSpan="4" key={uuidv4(appointment.attributes.date)}>
              <Button className="delete-button" onClick={(e) => destroyer(e)}>
                Delete Appointment
              </Button>
            </td>

            <td colSpan="4" key={uuidv4(appointment.attributes.date)}>
              <UserNavCard
                userId={userId}
                history={history}
                currentCustomerId={currentCustomerId}
                currentAppointmentId={currentAppointmentId}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <>
        <Table bordered>
          <thead>
            <tr key={uuidv4(appointment.attributes.date)}>
              <td>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                  }}
                  style={{ backgroundColor: "#31abb5" }}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  {!open
                    ? "View Customer's Other Pianos"
                    : "Close Other Pianos"}
                </Button>
              </td>
            </tr>
          </thead>
        </Table>
        <Collapse in={open}>
          {customerPianos !== [] ? (
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Table striped bordered hover style={{ marginTop: "10px" }}>
                <thead>
                  <tr key={uuidv4(appointment.attributes.date)}>
                    <td align="center" colSpan="7">
                      <b>Associate Piano with Appointment</b>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr key={uuidv4(appointment.attributes.date)}>
                    <td>
                      <Button
                        varaint="primary"
                        type="submit"
                        style={{ display: "flex" }}
                      >
                        Click here to add checked piano to the appointment
                      </Button>
                    </td>
                  </tr>
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
                </tbody>
              </Table>
            </Form>
          ) : null}
        </Collapse>
      </>
    </Container>
  ) : (
    "No Appointments"
  );

  return <>{appointmentList}</>;
}

export default AppointmentCard;

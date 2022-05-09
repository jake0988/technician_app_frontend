import React from "react";
import { Table, Container } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Td from "./Td";

function AppointmentList({ currentCustomer, appointmentsList, userId }) {
  useEffect(() => {
    appointmentsList(userId);
  }, []);
  const getAppointments = useSelector((state) =>
    state.appointments.filter(
      (appointment) =>
        appointment.attributes.customer_id === parseInt(currentCustomer.id)
    )
  );
  const appointmentList = (
    <Container fluid>
      <Table>
        <thead>
          <tr style={{display: "flex",
    width: "max-content"}}>
            <td><b>Customer Name: {currentCustomer.attributes.name}</b></td>
          </tr>
          <tr key={uuidv4(1)}>
            <th key={uuidv4(1)}>Date</th>
            <th key={uuidv4(1)}>Initial A4</th>
            <th key={uuidv4(1)}>Work Performed</th>
            <th key={uuidv4(1)}>Hours</th>
            <th key={uuidv4(1)}>Price</th>
            <th key={uuidv4(1)}>Date Created</th>
            <th key={uuidv4(1)}>Piano</th>
          </tr>
        </thead>
        <tbody>
          {getAppointments.map((appointment) => (
            <tr key={uuidv4(appointment.attributes.date)}>
              <Td key={uuidv4(appointment.attributes.date)}
                to={`/users/${userId}/customers/${appointment.attributes.customer_id}/appointments/${appointment.id}`}
              >
                {appointment.attributes.date}
              </Td>
              <td key={uuidv4(appointment.attributes.date)}>{appointment.attributes.initial_a4}</td>
              <td key={uuidv4(appointment.attributes.date)}>{appointment.attributes.work_done}</td>
              <td key={uuidv4(appointment.attributes.date)}>{appointment.attributes.hours}</td>
              <td key={uuidv4(appointment.attributes.date)}>{appointment.attributes.price}</td>
              <td key={uuidv4(appointment.attributes.date)}>
                {appointment.attributes.created_at}
              </td>
              <Td key={uuidv4(appointment.attributes.date)}
                to={
                  appointment.attributes.piano_id
                    ? `/users/${userId}/customers/${appointment.attributes.customer_id}/pianos/${appointment.attributes.piano_id}`
                    : null
                }
              >
                {appointment.attributes.piano_id
                  ? <p>{`Piano ID: ${appointment.attributes.piano_id}`}</p>
                  : null}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );

  return <div>{appointmentList}</div>;
}

export default AppointmentList;

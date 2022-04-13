import React from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Td from "./Td";
import { setCurrentAppointment } from "../../actions/appointment";

function AppointmentList({ appointments, appointmentsList, userId }) {
  useEffect(() => { 
    appointmentsList(userId) 
    },
    []);
  const getAppointments = useSelector((state) => state.appointments);

  const appointmentList = (
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>initial_a4</th>
          <th>work_done</th>
          <th>hours</th>
          <th>price</th>
          <th>Date Created</th>
        </tr>
      </thead>
      <tbody>
        {getAppointments.map((appointment) => (
          <tr key={uuidv4(appointment.attributes.date)}>
             <Td to={`/users/${userId}/customers/${appointment.attributes.customer_id}/appointments/${appointment.id}`}>{appointment.attributes.date}</Td>
            <td>{appointment.attributes.initial_a4}</td>
            <td>{appointment.attributes.work_done}</td>
            <td>{appointment.attributes.hours}</td>
            <td>{appointment.attributes.price}</td>
            <td key={uuidv4(appointment.attributes.date)}>
              {appointment.attributes.created_at}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return <div>{appointmentList}</div>;
}

export default AppointmentList;

import React from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AppointmentCard({ appointments }) {
  const [myMap, setMyMap] = useState(appointments);
  // const appointmentMap = () => (

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
        {[...myMap].map((appointment) => (
          <tr>
            <td key={uuidv4(appointment)}>{appointment.attributes.date}</td>
            <td key={uuidv4(appointment)}>
              {appointment.attributes.initial_a4}
            </td>
            <td key={uuidv4(appointment)}>
              {appointment.attributes.work_done}
            </td>
            <td key={uuidv4(appointment)}>{appointment.attributes.hours}</td>
            <td key={uuidv4(appointment)}>{appointment.attributes.price}</td>
            <td key={uuidv4(appointment)}>
              {appointment.attributes.created_at}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return <div>{appointmentList}</div>;
}

export default AppointmentCard;

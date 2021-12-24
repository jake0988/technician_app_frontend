import React from "react";
import { Table } from "react-bootstrap";

function AppointmentCard({ appointments }) {
  const appointmentList = appointments.map((appointment) => {
    return (
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
          <tr>
            <td>{appointment.attributes.date}</td>
            <td>{appointment.attributes.initial_a4}</td>
            <td>{appointment.attributes.work_done}</td>
            <td>{appointment.attributes.hours}</td>
            <td>{appointment.attributes.price}</td>
            <td>{appointment.attributes.created_at}</td>
          </tr>
        </tbody>
      </Table>
    );
  });
  // const { initial_a4, work_done, price, date, hours } = appointments.attributes;
  return <div>{appointmentList}</div>;
}

export default AppointmentCard;

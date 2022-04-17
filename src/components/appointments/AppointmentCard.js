import React from "react";
import { Table, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

function AppointmentCard({
  currentAppointmentId,
  currentCustomerId,
  userId,
  history,
}) {
  const appointment = useSelector((state) =>
    state.appointments.find(
      (appointment) => appointment.id === currentAppointmentId
    )
  );
  const piano = useSelector((state) =>
    state.pianos.find((piano) => appointment.attributes.piano_Id === piano.id)
  );
  function handleClick(e) {
    e.preventDefault();
    history.push(
      `/users/${userId}/customers/${currentCustomerId}/appointments/${currentAppointmentId}/edit`
    );
  }
  const appointmentList = appointment ? (
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
        <tr>
          <th>{appointment.attributes.date}</th>
          <th>{appointment.attributes.initial_a4}</th>
          <th>{appointment.attributes.work_done}</th>
          <th>{appointment.attributes.hours}</th>
          <th>{appointment.attributes.price}</th>
          <th>{appointment.attributes.created_at}</th>
        </tr>
        <tr>
          <td>
            <Button onClick={(e) => handleClick(e)}>Edit Appointment</Button>
          </td>
        </tr>
        {piano ? (
          <tr>
            <img src={piano.attributes.image} alt="Piano"></img>
          </tr>
        ) : null}
      </thead>
    </Table>
  ) : (
    "No Appointments"
  );

  return <div>{appointmentList}</div>;
}

export default AppointmentCard;

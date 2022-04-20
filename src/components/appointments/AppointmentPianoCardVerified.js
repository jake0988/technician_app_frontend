import React from "react";
import { Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export const AppointmentPianoCardVerified = ({
  piano,
  currentAppointmentId,
  userId,
  history,
  currentCustomerId,
  handleChange,
}) => {
  const { make, model, year, serial, notes, image } = piano.attributes;
  const formData = [];
  // const [appointment_id, initial_a4, work_done, price, date, hours, user_id] =
  //   appointment.attributes;

  return (
    <>
      <tr key={uuidv4(make)} syle= {{border: "groove"}}>
        <th key={uuidv4(make)}>Make</th>
        <th key={uuidv4(model)}>Model</th>
        <th key={uuidv4(year)}>Year</th>
        <th key={uuidv4(serial)}>Serial</th>
        <th key={uuidv4(notes)}>Notes</th>
      </tr>
      <tr>
    <td key={uuidv4(make)}>{make}</td>
    <td key={uuidv4(model)}>{model}</td>
    <td key={uuidv4(year)}>{year}</td>
    <td key={uuidv4(serial)}>{serial}</td>
    <td key={uuidv4(notes)}>{notes}</td>
        
        <td>
        <img src={image} id="piano-image" alt="piano" height="100" width="100" />
        </td>
        </tr>
    </>
  );
};

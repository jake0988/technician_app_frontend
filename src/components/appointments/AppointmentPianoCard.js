import React from "react";
import { Table, Form, Col } from "react-bootstrap";
import { patchAppointmentInfo } from "../../actions/appointment";
import { v4 as uuidv4 } from "uuid";

export const AppointmentPianoCard = ({
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
      <tr key={uuidv4(make)}>
        <th key={uuidv4(model)}></th>
        <th key={uuidv4(make)}>Make</th>
        <th key={uuidv4(model)}>Model</th>
        <th key={uuidv4(year)}>Year</th>
        <th key={uuidv4(serial)}>Serial</th>
        <th key={uuidv4(notes)}>Notes</th>
      </tr>
      <tr>
        <th key={uuidv4(4)}>
          <Form.Check
            aria-label="option 1"
            name="piano-id"
            value={piano.id}
            onClick={handleChange}
          />
        </th>
        <td key={uuidv4(make)}>{make}</td>
        <td key={uuidv4(model)}>{model}</td>
        <td key={uuidv4(year)}>{year}</td>
        <td key={uuidv4(serial)}>{serial}</td>
        <td key={uuidv4(notes)}>{notes}</td>
        <td key={uuidv4(image)}>
          <img src={image} alt="piano" height="200" width="200" />
        </td>
      </tr>
    </>
  );
};

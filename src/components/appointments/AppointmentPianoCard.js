import React from "react";
import { Table, Form, Col } from "react-bootstrap";
import { patchAppointmentInfo } from "../../actions/appointment";
import { Fragment } from "react";

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
    <Fragment>
      <thead>
        <tr>
          <th colSpan="1"></th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Serial</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            {" "}
            <Form.Check
              aria-label="option 1"
              name="piano-id"
              value={piano.id}
              onClick={handleChange}
            />
          </th>
          <td>{make}</td>
          <td>{model}</td>
          <td>{year}</td>
          <td>{serial}</td>
          <td>{notes}</td>
        </tr>
        <tr>
          <img src={image} alt="piano" height="200" width="200" />
        </tr>
      </tbody>
    </Fragment>
  );
};

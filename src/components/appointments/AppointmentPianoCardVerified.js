import React from "react";
import { Fragment } from "react";

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
    <Fragment>
      <tr>
        <td>Make</td>
        <td>Model</td>
        <td>Year</td>
        <td>Serial</td>
        <td>Notes</td>
      </tr>
      <tr>
        <td>{make}</td>
        <td>{model}</td>
        <td>{year}</td>
        <td>{serial}</td>
        <td>{notes}</td>
        <img src={image} alt="piano" height="100" width="100" />
      </tr>
    </Fragment>
  );
};

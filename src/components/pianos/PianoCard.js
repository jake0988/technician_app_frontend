import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { DeletePianoButton } from "./DeletePianoButton";

export const PianoCard = ({
  piano,
  setCurrentPiano,
  setCurrentAppointment,
  history,
}) => {
  const {
    customer_id,
    user_id,
    appointment_id,
    make,
    model,
    year,
    serial,
    notes,
    id,
    image_url,
  } = piano.attributes;
  const setPiano = piano.attributes;
  useEffect(() => {
    setCurrentPiano(setPiano);
    if (setCurrentAppointment) {
      setCurrentAppointment(appointment_id);
    }
  }, []);
  return (
    <div className="PianoCard">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Serial</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{make}</td>
            <td>{model}</td>
            <td>{year}</td>
            <td>{serial}</td>
            <td>{notes}</td>
            <td><img src={image_url} height="100" width="100" alt="Piano"/></td>
          </tr>
        </tbody>
      </Table>
      <span>
        <DeletePianoButton
          userId={user_id}
          customerId={customer_id}
          pianoId={piano.attributes.id}
          history={history}
        />
      </span>
    </div>
  );
};

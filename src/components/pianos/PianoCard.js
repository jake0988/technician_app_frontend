import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { DeletePianoButton } from "./DeletePianoButton";

export const PianoCard = ({
  piano,
  setCurrentPiano,
  setCurrentAppointment,
  history
}) => {
  const { customerId, userId, appointmentId, make, model, year, serial, notes, id, image } =
    piano.attributes;
  const setPiano = piano.attributes;
  useEffect(() => {
    setCurrentPiano(setPiano)
  if (setCurrentAppointment) {
    setCurrentAppointment(appointmentId)
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
            <td>{image}</td>
          </tr>
        </tbody>
      </Table>
       <span>
           <DeletePianoButton
             userId={userId}
             customerId={customerId}
             pianoId={piano.attributes.id}
             history={history}
           />
         </span>
    </div>
  );
};

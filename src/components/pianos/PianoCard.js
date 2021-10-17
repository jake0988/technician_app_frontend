import React from "react";
import Table from "react-bootstrap/Table";

export const PianoCard = ({
  piano,
  setCurrentPiano,
  user,
  customer,
  history,
  destroyPiano,
}) => {
  const { make, model, year, serial, notes, id } = piano.attributes;
  const setPiano = piano.attributes;
  setCurrentPiano(setPiano);
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
          </tr>
        </tbody>
      </Table>
      {/* <Link to={`/pianos/${id}/edit`}>
        <button className="button">Edit Piano</button>
      </Link> */}
      <button
        className="button"
        onClick={() => destroyPiano(user, customer, piano, history)}
      >
        Delete Piano
      </button>{" "}
    </div>
  );
};

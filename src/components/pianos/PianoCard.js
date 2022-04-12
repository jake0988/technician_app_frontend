import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";

export const PianoCard = ({
  piano,
  setCurrentPiano,
  user,
  customer,
  history,
  destroyPiano,
  match,
  location,
}) => {
  const { customer_id, user_id, make, model, year, serial, notes, id } =
    piano.attributes;
  const setPiano = piano.attributes;
  useEffect(() => {setCurrentPiano(setPiano)}, []);
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
      {/* <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="holder.js/171x180"
        />
      </Figure> */}
      {/* <Link to={`/pianos/${id}/edit`}>
        <button className="button">Edit Piano</button>
      </Link> */}
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          destroyPiano(user_id, customer_id, id, history);
        }}
      >
        Delete Piano
      </button>{" "}
    </div>
  );
};

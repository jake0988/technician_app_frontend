import React from "react";

export const PianoCard = (props) => {
  return (
    <div className="PianoCard">
      <p>Make: {props.piano.make}</p>
      <p>Model: {props.model}</p>
      <p>Year: {props.year}</p>
      <p>Serial: {props.serial}</p>
      <p>Notes: {props.notes}</p>
    </div>
  );
};

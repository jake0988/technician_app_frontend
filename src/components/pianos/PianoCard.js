import React from "react";

export const PianoCard = ({ piano }) => {
  const { make, model, year, serial, notes } = piano.attributes;
  return (
    <div className="PianoCard">
      <p>Make: {make}</p>
      <p>Model: {model}</p>
      <p>Year: {year}</p>
      <p>Serial: {serial}</p>
      <p>Notes: {notes}</p>
    </div>
  );
};

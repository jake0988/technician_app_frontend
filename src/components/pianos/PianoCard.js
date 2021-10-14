import React from "react";

export const PianoCard = ({ piano, setCurrentPiano }) => {
  const { make, model, year, serial, notes } = piano.attributes;
  const setPiano = piano.attributes;
  setCurrentPiano(setPiano);
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

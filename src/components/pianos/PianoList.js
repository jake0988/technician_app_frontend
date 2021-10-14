import React from "react";
import { Link } from "react-router-dom";

export const PianoList = ({ pianos }) => {
  let renderPianos;
  if (pianos !== []) {
    renderPianos = pianos.map((piano) => {
      const { model, make, id } = piano.attributes;
      return (
        <li key={id}>
          <Link to={`/pianos/${id}`}>
            <span>Model: {model}</span> <span>Make: {make}</span>
          </Link>
        </li>
      );
    });
  }
  return pianos ? <ul>{renderPianos}</ul> : null;
};

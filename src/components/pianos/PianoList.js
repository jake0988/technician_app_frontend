import React from "react";
import { PianoCard } from "./PianoCard";

export const PianoList = (props, { pianos }) => {
  let renderPianos;
  if (pianos) {
    renderPianos = pianos.map((piano) => {
      <li key={piano.id}>
        <PianoCard piano={props.piano} />
      </li>;
    });
  }
  return pianos ? <ul>{renderPianos}</ul> : null;
};

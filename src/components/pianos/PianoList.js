import React from "react";
import { Link } from "react-router-dom";
import { DeletePianoButton } from "./DeletePianoButton";

export const PianoList = ({
  pianos,
  userId,
  customerId,
  destroyPiano,
  history,
}) => {
  let renderPianos;
  if (pianos !== []) {
    const customerPianos = pianos.filter(
      (piano) => piano.attributes.customer_id === customerId
    );
    renderPianos = customerPianos.map((piano) => {
      const { model, make, id } = piano.attributes;
      return (
        <li key={id}>
          <Link to={`/users/${userId}/customers/${customerId}/pianos/${id}`}>
            <span>Model: {model}</span> <span>Make: {make}</span>{" "}
            <span>
              <DeletePianoButton
                destroyPiano={destroyPiano}
                customerId={customerId}
                id={piano.attributes.id}
                history={history}
              />
            </span>
          </Link>
        </li>
      );
    });
  }
  return pianos ? <ol type="1">{renderPianos}</ol> : null;
};

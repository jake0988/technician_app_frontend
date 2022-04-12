import React from "react";

export const DeletePianoButton = ({
  destroyPiano,
  userId,
  customerId,
  id,
  history,
}) => {
  return (
    <button
      className="button"
      onClick={(e) => {
        e.preventDefault();
        destroyPiano(userId, customerId, id, history);
      }}
    >
      Delete Piano
    </button>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { destroyPiano } from "../../actions/addPiano";
import { Button } from "react-bootstrap";

export const DeletePianoButton = ({
  userId,
  customerId,
  pianoId,
  history,
  key,
}) => {
  const dispatch = useDispatch();
  return (
    <Button
      key={key}
      className="delete-button"
      onClick={(e) => {
        e.preventDefault();
        dispatch(destroyPiano(userId, customerId, pianoId, history));
      }}
    >
      Delete Piano
    </Button>
  );
};

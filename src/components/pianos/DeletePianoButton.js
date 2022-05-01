import React from "react";
import { useDispatch } from "react-redux";
import { destroyPiano } from "../../actions/addPiano";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export const DeletePianoButton = ({ userId, customerId, pianoId, history }) => {
  const dispatch = useDispatch();
  return (
    <Button
      key={uuidv4(pianoId)}
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

import React from "react";
import { useDispatch } from 'react-redux'
import { destroyPiano } from '../../actions/addPiano'

export const DeletePianoButton = ({
  userId,
  customerId,
  pianoId,
  history,
  key,
}) => {
  const dispatch = useDispatch()
  return (
    <button
    key={key}
      className="button"
      onClick={(e) => {
        e.preventDefault();
        dispatch(destroyPiano(userId, customerId, pianoId, history))
        
      }}
    >
      Delete Piano
    </button>
  );
};

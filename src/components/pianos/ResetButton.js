import React from "react";
import { useDispatch } from "react-redux";
import { clearPianoForm } from "../../actions/addPiano";
import { Button } from "react-bootstrap";

export const ResetButton = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(clearPianoForm())
    }
    return (
       <Button className="m-1" variant="secondary" onClick={handleSubmit}>Reset Form</Button>
    )
}
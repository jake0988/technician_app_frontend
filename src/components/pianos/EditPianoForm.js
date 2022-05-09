import React from "react";
import { useSelector } from "react-redux";
import PianoForm from "./PianoForm";

const EditPianoForm = () => {
    const formData = useSelector((state)=> state.currentPiano)
    return (
        <PianoForm edit/>
    )
}
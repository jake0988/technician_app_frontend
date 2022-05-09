import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePianoForm } from "../../actions/updatePianoForm";
import { Button } from "react-bootstrap";

const UploadButton = ({ imagesUpload }) => {
  // const [uploadedFileName, setUploadedFileName] = useState(imageName);
  const imageName = useSelector(state => state.updatePianoForm.imageName)
  const inputRef = useRef(HTMLInputElement);
  useEffect (() => {

  },[imageName, inputRef])
 
  const dispatch = useDispatch()
  
const handleUpload = (e) => {
  e.preventDefault()
   inputRef.current?.click();
  //  inputRef.current.files['0'] ?? imagesUpload(inputRef.current.files['0']);
  //  debugger
}

  
  const handleDisplayFileDetails = () => {
    dispatch(updatePianoForm("imageName", inputRef.current.files["0"].name))
    imagesUpload(inputRef.current.files['0'])
  };
  return (
    <div className="m-3">
      <label className="mx-3">Choose file:</label>
      <input
        ref={inputRef}
        onChange={handleDisplayFileDetails}
        className="d-none"
        type="file"
      />
      <Button
        onClick={handleUpload}
      >
        {imageName ? imageName : "Upload"}
      </Button>
    </div>
  );
}

export default UploadButton;

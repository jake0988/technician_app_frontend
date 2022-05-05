import React, { useState, useRef } from "react";

function UploadButton({ imagesUpload, imageName, imageBlob }) {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(HTMLInputElement);

  function handleUpload(e) {
    e.preventDefault();

    inputRef.current?.click();
    imageBlob(inputRef.current.files["0"]);
  }
  const handleDisplayFileDetails = () => {
    // debugger;
    // inputRef.current?.files &&
    // setUploadedFileName(inputRef.current.files[0].name);
    // imagesUpload(inputRef.current.files["0"]);
    setUploadedFileName(imageBlob(inputRef.current.files["0"].name));
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
      <button
        onClick={handleUpload}
        className={`btn btn-outline-${
          uploadedFileName ? "success" : "primary"
        }`}
      >
        {uploadedFileName ? uploadedFileName : "Upload"}
      </button>
    </div>
  );
}

export default UploadButton;

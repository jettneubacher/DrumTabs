import React, { useState } from "react";
import "./css/Upload.css";

const Upload = ({ file, setFile, onPredict, loading }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const MAX_FILE_SIZE = 125 * 1024 * 1024;

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  const handleFile = (selectedFile) => {
    const allowedTypes = ["audio/wav"];
    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Unsupported file type. Please upload .wav file");
      return;
    }
    if (selectedFile.size > MAX_FILE_SIZE) {
      setError("File is too large. Max size is 100MB");
      return;
    }
    setFile(selectedFile);
    setError("");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleClear = () => {
    setFile(null);
    setError("");
    setFileInputKey(Date.now());
  };

  return (
    <div className="upload-wrapper">
      <p className="upload-subtitle">Drag & Drop / File Search</p>
      <div
        className={`upload-box ${isDragging ? "dragging" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <label className="upload-button">
          Select file from device
          <input
            key={fileInputKey}
            type="file"
            onChange={handleChange}
            style={{ display: "none" }}
            accept=".wav"
          />
        </label>
        {file && (
          <>
            <button className="clear-button-icon" onClick={handleClear}>
              X
            </button>
            <p className="file-name">Selected: {file.name}</p>
          </>
        )}
      </div>

      <p
        className={`upload-error ${error ? "error-message" : "normal-message"}`}
      >
        {error ? error : !file && "Only .wav files are accepted."}
      </p>

      {file && (
        <div className="generate-buttons">
          <button className="gen-button" onClick={() => onPredict(false)}>
            Generate
          </button>
          <button className="gen-button" onClick={() => onPredict(true)}>
            Generate and Download PDF
          </button>
        </div>
      )}
      {loading && <div className="loading-spinner">Loading predictions...</div>}
    </div>
  );
};

export default Upload;

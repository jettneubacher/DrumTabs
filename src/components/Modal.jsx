import React from "react";
import "./css/Modal.css";

const Modal = ({ isOpen, onClose }) => {
  console.log("MODAL ISOPEN:", isOpen);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>How to Use the Generator</h2>
        <p>
          Create drum tabs for any audio file. If you do not wish to upload your
          own file, use the given examples.
        </p>
        <br></br>
        <ol>
          <li>
            <strong>Set-Up:</strong> Click the 'Set-Up' button in the top left.
          </li>
          <br></br>
          <li>
            <strong>Model:</strong> Pick which model you want to use and read
            'USAGE' for the given model. More info on the models is in the{" "}
            <i>Under the Hood</i>
            {"  "}tab.
          </li>
          <br></br>
          <li>
            <ul>
              {" "}
              <li>
                <strong>Upload:</strong> Drag & Drop audio file into center box
                OR search device by clicking 'Select file from device'.
              </li>
              <li>
                <strong>Use Sample:</strong> Select a sample from the SAMPLE
                pool above the upload box. Click on a sample's LOAD button to
                load it.
              </li>
            </ul>
          </li>
          <br></br>
          <li>
            <strong>Generate:</strong> If audio file meets the requirements
            &#40;less than 100mb and .wav&#41; - Click the Generate OR Generate
            and Download PDf buttons to send the audio to the model and receive
            the tabs back.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Modal;

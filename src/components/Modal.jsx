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
            <i>About</i> tab.
          </li>
          <br></br>
          <li>
            <strong>Upload:</strong> Drag & Drop audio file into center box OR
            search device by clicking 'Select file from device'. Select preset
            examples in the 'Set-Up' window if you prefer.
          </li>
          <br></br>
          <li>
            <strong>Generate:</strong> If audio file meets the requirements
            &#40;less than 100mb and .wav&#41; - Generate the tabs to have them
            displayed with the 'Generate' button. Alternatively, generate the
            tabs for display AND download a pdf version with the 'Generate and
            Download PDF' button.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Modal;

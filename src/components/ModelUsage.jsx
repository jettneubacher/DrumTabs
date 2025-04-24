import React from "react";
import "./css/ModelUsage.css";

const ModelUsage = ({ selectedModel }) => {
  return (
    <div className="model-usage-container">
      <label className="model-usage-label">USAGE</label>
      <div className="model-info-box">
        {selectedModel === "model1" && (
          <div>
            <b>
              <u> Model 1 </u>
            </b>
            <p>
              Strictly for <b>drum-only</b> audio files
            </p>
            <p>92% Effective</p>
          </div>
        )}
        {selectedModel === "model2" && <p> not created yet </p>}
      </div>
    </div>
  );
};

export default ModelUsage;

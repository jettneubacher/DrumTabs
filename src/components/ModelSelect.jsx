import React from "react";
import "./css/ModelSelect.css";

const ModelSelect = ({ selectedModel, onModelSelect }) => {
  const models = [
    { label: "Model 1", value: "model1", disabled: false },
    { label: "Coming soon...", value: "coming-soon", disabled: true },
  ];

  const handleChange = (e) => {
    onModelSelect(e.target.value);
  };

  return (
    <div className="model-select">
      <label className="model-label" htmlFor="model-dropdown">
        MODEL
      </label>
      <select
        id="model-dropdown"
        className="model-dropdown"
        value={selectedModel}
        onChange={handleChange}
      >
        {models.map((model) => (
          <option
            key={model.value}
            value={model.value}
            disabled={model.disabled}
          >
            {model.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModelSelect;

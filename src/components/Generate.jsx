import React, { useState } from "react";
import ModelSelect from "./ModelSelect";
import ModelUsage from "./ModelUsage";
import Upload from "./Upload";
import ExamplePool from "./ExamplePool";
import Modal from "./Modal";
import Results from "./Results";

import "./css/Generate.css";

const Generate = ({
  file,
  setFile,
  model,
  setModel,
  onPredict,
  results,
  setResults,
  loading,
  stableFile,
  currentAudio,
  setCurrentAudio,
  currentlyPlaying,
  setCurrentlyPlaying,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);

  const handleExampleSelect = (file) => {
    setFile(file);
  };

  return (
    <>
      {/* Instructions Button */}
      <div className="instructions-btn">
        <button onClick={toggleModal}>Instructions</button>
      </div>
      {/* Setup Toggle Button (Arrow Button) */}
      <div className="panel-toggle open-toggle" onClick={togglePanel}>
        Set-Up
      </div>
      {/* Sidebar & Close Button */}
      {isPanelOpen && (
        <div className="sidebar-wrapper">
          <div className="side-panel left open">
            {/* Close Button inside sidebar */}
            <div className="panel-toggle close-toggle" onClick={togglePanel}>
              X
            </div>
            <div className="sel-block">
              <ModelSelect selectedModel={model} onModelSelect={setModel} />
            </div>
            <div className="use-block">
              <ModelUsage selectedModel={model} />
            </div>
            <div className="ex-block">
              <ExamplePool
                onExampleSelect={handleExampleSelect}
                selectedModel={model}
                currentAudio={currentAudio}
                setCurrentAudio={setCurrentAudio}
                currentlyPlaying={currentlyPlaying}
                setCurrentlyPlaying={setCurrentlyPlaying}
              />
            </div>
          </div>
        </div>
      )}
      {/* Main Upload Area */}
      <div className="generate-layout-upload">
        <div className="up-block">
          <Upload
            file={file}
            setFile={setFile}
            onPredict={onPredict}
            loading={loading}
          />
        </div>
      </div>
      {/* Instructions Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
      <div className="results-block">
        <Results results={results} setResults={setResults} file={stableFile} />
      </div>{" "}
    </>
  );
};

export default Generate;

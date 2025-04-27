import React, { useState } from "react";
import "./css/ExamplePool.css";

const examples = {
  model1: [
    {
      label: "Sample 1",
      src: "https://jettneubacher.github.io/DrumTabs/example-audio/example-1.1.wav",
      filename: "sample-1.1.wav",
    },
    {
      label: "Sample 2",
      src: "https://jettneubacher.github.io/DrumTabs/example-audio/example-1.2.wav",
      filename: "sample-1.2.wav",
    },
    {
      label: "Sample 3",
      src: "https://jettneubacher.github.io/DrumTabs/example-audio/example-1.3.wav",
      filename: "sample-1.3.wav",
    },
  ],
};

const ExamplePool = ({
  onExampleSelect,
  selectedModel,
  currentAudio,
  setCurrentAudio,
  currentlyPlaying,
  setCurrentlyPlaying,
}) => {
  const handleExampleSelect = async (src, filename) => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const file = new File([blob], filename, {
        type: "audio/wav",
      });
      onExampleSelect(file);
    } catch (err) {
      console.error("Failed to load example file:", err);
    }
  };

  const handlePlayToggle = (src) => {
    // Stop if this file is currently playing
    if (currentAudio && currentlyPlaying === src) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
      setCurrentlyPlaying(null);
      return;
    }

    // Stop any currently playing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play new audio
    const audio = new Audio(src);
    setCurrentAudio(audio);
    setCurrentlyPlaying(src);
    audio.play();

    // Clear when audio ends
    audio.onended = () => {
      setCurrentAudio(null);
      setCurrentlyPlaying(null);
    };
  };

  return (
    <div className="example-pool">
      <div className="example-box">
        <div className="example-pool-label">
          <u>SAMPLES</u>
        </div>
        {examples[selectedModel]?.map(({ label, src, filename }) => (
          <>
            <div className="ex-item-title">{label}</div>
            <div key={filename} className="example-item">
              <button onClick={() => handleExampleSelect(src, filename)}>
                LOAD
              </button>
              <button
                className="preview-button"
                onClick={() => handlePlayToggle(src)}
              >
                {currentlyPlaying === src ? "⏹" : "▶"}
              </button>
            </div>
          </>
        ))}{" "}
      </div>
    </div>
  );
};

export default ExamplePool;

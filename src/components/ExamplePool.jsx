import React, { useState } from "react";
import "./css/ExamplePool.css";

const examples = {
  model1: [
    {
      label: "Example 1",
      src: "/example-audio/example-1.wav",
      filename: "example-1.wav",
    },
    {
      label: "Example 2",
      src: "/example-audio/example-2.wav",
      filename: "example-2.wav",
    },
    {
      label: "Example 3",
      src: "/example-audio/example-3.wav",
      filename: "example-3.wav",
    },
  ],
};

const ExamplePool = ({ onExampleSelect, selectedModel }) => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

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
      <div className="example-pool-label">EXAMPLES</div>
      <div className="example-box">
        {examples[selectedModel]?.map(({ label, src, filename }) => (
          <div key={filename} className="example-item">
            <button onClick={() => handleExampleSelect(src, filename)}>
              {label}
            </button>
            <button
              className="preview-button"
              onClick={() => handlePlayToggle(src)}
            >
              {currentlyPlaying === src ? "⏹" : "▶"}
            </button>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default ExamplePool;

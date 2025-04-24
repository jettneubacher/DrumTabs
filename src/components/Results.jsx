import React, { useState, useEffect } from "react";
import "./css/Results.css";

const Results = ({ results, setResults, file }) => {
  if (!results || results.length === 0) return null;

  const [columnsPerBlock, setColumnsPerBlock] = useState(32); // default value

  const displayOrder = [4, 3, 1, 2, 0]; // cymbal, hi-hat, snare, tom, bass
  const drumLabels = ["Cymbal", "Hi-Hat", "Snare", "Toms", "Kick"];

  // Calculate the number of columns based on screen width
  const calculateColumnsPerBlock = () => {
    const containerWidth =
      document.querySelector(".results-container")?.offsetWidth;
    const tabWidth = 34.5; // Adjust this value based on the width of your tabs
    const columns = Math.floor(containerWidth / tabWidth); // Columns based on available width
    setColumnsPerBlock(columns);
  };

  // Recalculate columns on window resize
  useEffect(() => {
    calculateColumnsPerBlock();

    window.addEventListener("resize", calculateColumnsPerBlock);

    return () => {
      window.removeEventListener("resize", calculateColumnsPerBlock);
    };
  }, []);

  // Chunk results into blocks based on the number of columns
  const blocks = [];
  for (let i = 0; i < results.length; i += columnsPerBlock) {
    const chunk = results.slice(i, i + columnsPerBlock);
    blocks.push({ startIndex: i, data: chunk });
  }

  return (
    <>
      <div className="results-block">
        <div className="results-title">
          <u>
            {file
              ? file.name // actual File object
                ? file.name
                : typeof file === "string"
                ? file.split("/").pop() // fallback for example audio URLs
                : "Untitled"
              : ""}
          </u>
          <button className="clear-button" onClick={() => setResults([])}>
            Clear
          </button>
        </div>

        <div className="results-container">
          {blocks.map(({ startIndex, data: block }, blockIndex) => (
            <div className="tab-block" key={blockIndex}>
              {displayOrder.map((drumIdx, rowIndex) => (
                <div className="tab-row" key={rowIndex}>
                  <span className="tab-label">{drumLabels[rowIndex]}</span>
                  {block.map(([_, prediction], colIndex) => {
                    const val = prediction[drumIdx];
                    const symbol =
                      drumIdx === 3 || drumIdx === 4
                        ? val
                          ? "X"
                          : "-"
                        : val
                        ? "O"
                        : "-";

                    const isDivider = (startIndex + colIndex) % 4 === 3;

                    return (
                      <span key={colIndex} className="tab-cell">
                        {symbol}
                        {isDivider ? " |" : ""}
                      </span>
                    );
                  })}
                </div>
              ))}
              <hr className="block-divider" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Results;

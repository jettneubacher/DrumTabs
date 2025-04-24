import React, { useState } from "react";

import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Generate from "./components/Generate.jsx";
import Development from "./components/Development.jsx";
import Home from "./components/Home.jsx";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("generate");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [stableFile, setStableFile] = useState("");
  const [model, setModel] = useState("model1");
  const [results, setResults] = useState([]);
  const [pdfLink, setPdfLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const handlePrediction = async (generatePDF = false) => {
    setStableFile(uploadedFile);
    setLoading(true);
    try {
      await makePrediction(generatePDF);
    } finally {
      setLoading(false);
    }
  };

  const makePrediction = async (generatePDF = false) => {
    if (!uploadedFile) {
      console.warn("No file uploaded");
      return;
    }

    setResults([]);

    const formData = new FormData();
    formData.append("audio", uploadedFile);
    formData.append("model", model);

    const endpoint = generatePDF ? "/predict_pdf" : "/predict";
    const baseUrl = "https://aidrumtabs-1.onrender.com"; // backend

    try {
      console.log(`Sending request to ${baseUrl}${endpoint}...`);

      const res = await fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(
          `Server error: &{res.status} ${res.statusText} - ${errorText}`
        );
      }

      const data = await res.json();
      console.log("Raw response data:", data);

      if (generatePDF) {
        if (data.predictions) {
          console.log("Predictions received:", data.predictions);
          setResults(data.predictions);
        } else {
          console.warn("No predictions in response.");
        }

        if (data.pdf_url) {
          const fullPdfUrl = `${data.pdf_url}`;
          setPdfLink(fullPdfUrl);

          const pdfUrl = new URL(data.pdf_url, baseUrl);
          const filename = pdfUrl.pathname.split("/").pop().split("?")[0];

          console.log("pdf_url from backend:", data.pdf_url);
          console.log("Extracted filename:", filename);

          const downloadUrl = `${baseUrl}/download_pdf/${filename}`;

          console.log("Downloading PDF from:", downloadUrl);

          // Trigger file download
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } else {
        console.log("Predictions received (non-pdf)");
        setResults(data);
      }
    } catch (err) {
      console.error("Error calling prediction endpoint:", err);
    }
  };

  return (
    <>
      <Header setActivePage={setActivePage} activePage={activePage} />
      <div className="page-content">
        {activePage === "about" && <About />}
        {activePage === "generate" && (
          <Generate
            file={uploadedFile}
            setFile={setUploadedFile}
            model={model}
            setModel={setModel}
            onPredict={handlePrediction}
            results={results}
            setResults={setResults}
            loading={loading}
            stableFile={stableFile}
            currentAudio={currentAudio}
            setCurrentAudio={setCurrentAudio}
            currentlyPlaying={currentlyPlaying}
            setCurrentlyPlaying={setCurrentlyPlaying}
          />
        )}
        {activePage === "dev" && <Development />}
      </div>
    </>
  );
}

export default App;

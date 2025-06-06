import React, { useState } from "react";
import "./css/Header.css";

function Header({ setActivePage, activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-title">
          <p className="navbar-title-big">AI Drum Transcriber</p>
          <p className="navbar-title-small">by Jett Neubacher</p>
        </div>

        <div className="navbar-buttons">
          <button
            className={`nav-button ${activePage === "home" ? "active" : ""}`}
            onClick={() => setActivePage("home")}
          >
            About
          </button>
          <button
            className={`nav-button ${
              activePage === "generate" ? "active" : ""
            }`}
            onClick={() => setActivePage("generate")}
          >
            Generate
          </button>
          <button
            className={`nav-button ${activePage === "about" ? "active" : ""}`}
            onClick={() => setActivePage("about")}
          >
            Under the Hood
          </button>
          <button
            className={`nav-button ${activePage === "dev" ? "active" : ""}`}
            onClick={() => setActivePage("dev")}
          >
            Development Blog
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile dropdown */}
        <div className={`navbar-links-mobile ${menuOpen ? "active" : ""}`}>
          <button
            className="menu-btn"
            onClick={() => {
              setActivePage("home");
              setMenuOpen(false);
            }}
          >
            About
          </button>
          <button
            className="menu-btn"
            onClick={() => {
              setActivePage("generate");
              setMenuOpen(false);
            }}
          >
            Generate
          </button>
          <button
            className="menu-btn"
            onClick={() => {
              setActivePage("about");
              setMenuOpen(false);
            }}
          >
            Under the Hood
          </button>
          <button
            className="menu-btn"
            onClick={() => {
              setActivePage("dev");
              setMenuOpen(false);
            }}
          >
            Development Blog
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;

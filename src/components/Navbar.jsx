import { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" aria-label="WebSmartAssistant Home">
          <img src={logo} alt="WebSmartAssistant logo" />
        </a>

        <nav className="navbar-menu">
          <a href="#platform" className="navbar-link">
            Overview
          </a>

          <div className="navbar-dropdown">
            <button className="navbar-link navbar-dropdown-button">
              Solutions
              <span>▾</span>
            </button>

            <div className="navbar-dropdown-menu">

              <a href="#surveys" className="navbar-dropdown-item">
                <strong>Overview</strong>
                <span>Guided assessments that capture leads</span>
              </a>

              <a href="#chat" className="navbar-dropdown-item">
                <strong>Chat</strong>
                <span>AI conversations for website visitors</span>
              </a>

              <a href="#surveys" className="navbar-dropdown-item">
                <strong>Surveys</strong>
                <span>Guided assessments that capture leads</span>
              </a>
            </div>
          </div>

          <a href="#how-it-works" className="navbar-link">
            How It Works
          </a>

          <a
            href="https://dashboard.websmartassistant.com/"
            className="navbar-link"
            target="_blank"
            rel="noreferrer"
          >
            Login
          </a>

          <a href="#demo" className="navbar-demo">
            Request Demo
          </a>
        </nav>

        <button
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isOpen && (
        <nav className="navbar-mobile">
          <a
            href="#platform"
            className="navbar-mobile-link"
            onClick={() => setIsOpen(false)}
          >
            Overview
          </a>

          <button
            className="navbar-mobile-link navbar-mobile-dropdown-button"
            onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
          >
            Solutions <span>{isSolutionsOpen ? "−" : "+"}</span>
          </button>

          {isSolutionsOpen && (
            <div className="navbar-mobile-submenu">
              <a
                href="#chat"
                className="navbar-mobile-submenu-link"
                onClick={() => setIsOpen(false)}
              >
                Chat
              </a>

              <a
                href="#surveys"
                className="navbar-mobile-submenu-link"
                onClick={() => setIsOpen(false)}
              >
                Surveys
              </a>
            </div>
          )}

          <a
            href="#how-it-works"
            className="navbar-mobile-link"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>

          <a
            href="https://dashboard.websmartassistant.com/"
            className="navbar-mobile-link"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Login
          </a>

          <a
            href="#demo"
            className="navbar-mobile-demo"
            onClick={() => setIsOpen(false)}
          >
            Request Demo
          </a>
        </nav>
      )}
    </header>
  );
}
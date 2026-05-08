import { useEffect } from "react";
import "./HowItWorks.css";
import heroImage from "../../assets/how-it-works-hero.webp";

// IMPORTANT:
// Do NOT import WebformWidget here if you want to test it as a real widget.
// The widget will be mounted using window.WebSmartAssistantForm(...)

export default function HowItWorks() {
useEffect(() => {
  // Mount the survey widget
  if (window.WebSmartAssistant) {
    window.WebSmartAssistant({
      type: "survey",
      clientKey: "evergreen-heights",
      surveyKey: "memory-support",
      target: "#memory-support-survey-widget",
    });
  }

  // Load webform CSS
  const cssId = "wsa-webform-css";
  if (!document.getElementById(cssId)) {
    const css = document.createElement("link");
    css.id = cssId;
    css.rel = "stylesheet";
    css.href =
      "https://cdn.websmartassistant.com/webform/v1.1/wsa-webform-widget.css";
    document.head.appendChild(css);
  }

  // Mount webform after script loads
  const mountWebform = () => {
    if (!window.WebSmartAssistantForm) {
      console.error("WebSmartAssistantForm is not available.");
      return;
    }

    window.WebSmartAssistantForm({
      target: "#evergreen-webform-widget",
      clientKey: "evergreen-heights",
      formKey: "senior-living-contact",
      apiUrl: "http://localhost:5297/api/Leads",
      apiKey: "dev-webform-key-123",
      source: "webform",
    });
  };

  const scriptId = "wsa-webform-script";

  if (document.getElementById(scriptId)) {
    mountWebform();
    return;
  }

  const script = document.createElement("script");
  script.id = scriptId;
  script.src = "https://cdn.websmartassistant.com/webform/v1.1/widget.js";
  script.async = true;
  script.onload = mountWebform;
  script.onerror = () => {
    console.error("Failed to load WebSmartAssistant webform widget script.");
  };

  document.body.appendChild(script);
}, []);

  return (
    <main className="how-simple-page">
      <section
        className="how-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="how-hero-overlay"></div>

        <div className="how-hero-content">
          <h1>Evergreen Heights</h1>

          <p className="how-description">
            At Evergreen Heights Senior Living, we provide personalized care,
            engaging experiences, and a supportive environment for every
            resident — from independent living to memory support.
          </p>

          <div className="how-hero-actions">
            <a href="#evergreen-webform-widget" className="how-primary-btn">
              Download Brochure
            </a>

            <a href="#evergreen-webform-widget" className="how-primary-btn">
              Schedule a Visit
            </a>

            <a href="#evergreen-webform-widget" className="how-primary-btn">
              Speak to an Advisor
            </a>
          </div>
        </div>
      </section>

      <section className="how-widget-section">
        <div id="memory-support-survey-widget"></div>
      </section>

      <section className="how-webform-section">
        <div className="how-webform-header">
          <p className="how-webform-kicker">SCHEDULE A VISIT</p>

          <h2>Connect With Evergreen Heights</h2>

          <p>
            Fill out the form below and a team member will follow up with you.
          </p>
        </div>

        <div id="evergreen-webform-widget"></div>
      </section>
    </main>
  );
}
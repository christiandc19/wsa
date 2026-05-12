import { useEffect } from "react";
import "./HowItWorks.css";
import heroImage from "../../assets/how-it-works-hero.webp";

export default function HowItWorks() {
  useEffect(() => {
    /* ========================================
       CHATBOT WIDGET
       ----------------------------------------
       WHAT TO CHANGE FOR NEW CLIENTS:
       - clientKey
       - CDN version if needed
    ======================================== */

    const chatbotCssId = "wsa-chatbot-css";

    // Prevent loading duplicate CSS
    if (!document.getElementById(chatbotCssId)) {
      const css = document.createElement("link");

      css.id = chatbotCssId;
      css.rel = "stylesheet";

      // Chatbot widget CSS CDN
      css.href =
        "https://cdn.websmartassistant.com/widget/v1.9.2/chatbot-widget.css";

      document.head.appendChild(css);
    }

    // Mount chatbot
    const mountChatbot = () => {
      if (!window.WebSmartAssistant) {
        console.error("WebSmartAssistant chatbot is not available.");
        return;
      }

      window.WebSmartAssistant({
        // CHANGE THIS PER CLIENT
        clientKey: "evergreen-heights",
      });
    };

    const chatbotScriptId = "wsa-chatbot-script";

    // Prevent loading duplicate JS
    if (document.getElementById(chatbotScriptId)) {
      mountChatbot();
    } else {
      const script = document.createElement("script");

      script.id = chatbotScriptId;

      // Chatbot widget JS CDN
      script.src =
        "https://cdn.websmartassistant.com/widget/v1.9.2/chatbot-widget.js";

      script.async = true;
      script.onload = mountChatbot;

      script.onerror = () => {
        console.error("Failed to load chatbot widget.");
      };

      document.body.appendChild(script);
    }

    /* ========================================
       SURVEY WIDGET
       ----------------------------------------
       WHAT TO CHANGE FOR NEW CLIENTS:
       - clientKey
       - surveyKey
       - target
       - CDN version if needed
    ======================================== */

    const surveyCssId = "wsa-survey-css";

    if (!document.getElementById(surveyCssId)) {
      const css = document.createElement("link");

      css.id = surveyCssId;
      css.rel = "stylesheet";

      // Survey widget CSS CDN
      css.href =
        "https://cdn.websmartassistant.com/survey/v1.2/survey-widget.css";

      document.head.appendChild(css);
    }

    const mountSurvey = () => {
      if (!window.WebSmartAssistantSurvey) {
        console.error("WebSmartAssistantSurvey is not available.");
        return;
      }

      window.WebSmartAssistantSurvey({
        // HTML container ID
        target: "#memory-support-widget",

        // CHANGE THIS PER CLIENT
        clientKey: "evergreen-heights",

        // CHANGE THIS PER SURVEY
        surveyKey: "memory-support",
      });
    };

    const surveyScriptId = "wsa-survey-script";

    if (document.getElementById(surveyScriptId)) {
      mountSurvey();
    } else {
      const script = document.createElement("script");

      script.id = surveyScriptId;

      // Survey widget JS CDN
      script.src =
        "https://cdn.websmartassistant.com/survey/v1.2/survey-widget.js";

      script.async = true;
      script.onload = mountSurvey;

      script.onerror = () => {
        console.error("Failed to load survey widget.");
      };

      document.body.appendChild(script);
    }

    /* ========================================
       WEBFORM WIDGET
       ----------------------------------------
       WHAT TO CHANGE FOR NEW CLIENTS:
       - clientKey
       - formKey
       - apiUrl
       - apiKey
       - target
       - CDN version if needed
    ======================================== */

    const webformCssId = "wsa-webform-css";

    if (!document.getElementById(webformCssId)) {
      const css = document.createElement("link");

      css.id = webformCssId;
      css.rel = "stylesheet";

      // Webform widget CSS CDN
      css.href =
        "https://cdn.websmartassistant.com/webform/v1.1/wsa-webform-widget.css";

      document.head.appendChild(css);
    }

    const mountWebform = () => {
      if (!window.WebSmartAssistantForm) {
        console.error("WebSmartAssistantForm is not available.");
        return;
      }

      window.WebSmartAssistantForm({
        // HTML container ID
        target: "#evergreen-webform-widget",

        // CHANGE THIS PER CLIENT
        clientKey: "evergreen-heights",

        // CHANGE THIS PER FORM
        formKey: "senior-living-contact",

        // Backend API endpoint
        apiUrl:
          "https://su3cjmqk2h.ap-southeast-2.awsapprunner.com/api/Leads",

        // Public widget API key
        apiKey: "dev-webform-key-12345",

        // Lead source tracking
        source: "webform",
      });
    };

    const webformScriptId = "wsa-webform-script";

    if (document.getElementById(webformScriptId)) {
      mountWebform();
    } else {
      const script = document.createElement("script");

      script.id = webformScriptId;

      // Webform widget JS CDN
      script.src =
        "https://cdn.websmartassistant.com/webform/v1.1/widget.js";

      script.async = true;
      script.onload = mountWebform;

      script.onerror = () => {
        console.error("Failed to load webform widget.");
      };

      document.body.appendChild(script);
    }
  }, []);

  return (
    <main className="how-simple-page">
      {/* ========================================
          HERO SECTION
      ======================================== */}
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

      {/* ========================================
          SURVEY SECTION
      ======================================== */}
      <section className="how-widget-section">
        {/* Survey mounts here */}
        <div id="memory-support-widget"></div>
      </section>

      {/* ========================================
          WEBFORM SECTION
      ======================================== */}
      <section className="how-webform-section">
        <div className="how-webform-header">
          <p className="how-webform-kicker">SCHEDULE A VISIT</p>

          <h2>Connect With Evergreen Heights</h2>

          <p>
            Fill out the form below and a team member will follow up with you.
          </p>
        </div>

        {/* Webform mounts here */}
        <div id="evergreen-webform-widget"></div>
      </section>
    </main>
  );
}
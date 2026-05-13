import { useEffect } from "react";
import "./HowItWorks.css";
import heroImage from "../../assets/how-it-works-hero.webp";

export default function HowItWorks() {
  useEffect(() => {
    /* ========================================
       CHATBOT WIDGET
    ======================================== */

    const chatbotCssId = "wsa-chatbot-css";

    if (!document.getElementById(chatbotCssId)) {
      const css = document.createElement("link");
      css.id = chatbotCssId;
      css.rel = "stylesheet";
      css.href =
        "https://cdn.websmartassistant.com/widget/v1.9.2/chatbot-widget.css";

      document.head.appendChild(css);
    }

    const mountChatbot = () => {
      if (!window.WebSmartAssistant) {
        console.error("WebSmartAssistant chatbot is not available.");
        return;
      }

      window.WebSmartAssistant({
        clientKey: "evergreen-heights",
      });
    };

    const chatbotScriptId = "wsa-chatbot-script";

    if (document.getElementById(chatbotScriptId)) {
      mountChatbot();
    } else {
      const script = document.createElement("script");
      script.id = chatbotScriptId;
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
       New CDN structure:
       /widgets/survey/v1.0.1/
    ======================================== */

    const surveyCssId = "wsa-survey-css";

    if (!document.getElementById(surveyCssId)) {
      const css = document.createElement("link");
      css.id = surveyCssId;
      css.rel = "stylesheet";
      css.href =
        "https://cdn.websmartassistant.com/widgets/survey/v1.0.1/survey-widget.css";

      document.head.appendChild(css);
    }

    const mountSurvey = () => {
      if (!window.WebSmartAssistantSurvey) {
        console.error("WebSmartAssistantSurvey is not available.");
        return;
      }

      window.WebSmartAssistantSurvey({
        target: "#senior-living-widget",
        clientKey: "evergreen-heights",
        surveyKey: "senior-living",
      });
    };

    const surveyScriptId = "wsa-survey-script";

    if (document.getElementById(surveyScriptId)) {
      mountSurvey();
    } else {
      const script = document.createElement("script");
      script.id = surveyScriptId;
      script.src =
        "https://cdn.websmartassistant.com/widgets/survey/v1.0.1/survey-widget.js";
      script.async = true;
      script.onload = mountSurvey;
      script.onerror = () => {
        console.error("Failed to load survey widget.");
      };

      document.body.appendChild(script);
    }

    /* ========================================
       WEBFORM WIDGET
    ======================================== */

    const webformCssId = "wsa-webform-css";

    if (!document.getElementById(webformCssId)) {
      const css = document.createElement("link");
      css.id = webformCssId;
      css.rel = "stylesheet";
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
        target: "#evergreen-webform-widget",
        clientKey: "evergreen-heights",
        formKey: "senior-living-contact",
        apiUrl:
          "https://su3cjmqk2h.ap-southeast-2.awsapprunner.com/api/Leads",
        apiKey: "dev-webform-key-12345",
        source: "webform",
      });
    };

    const webformScriptId = "wsa-webform-script";

    if (document.getElementById(webformScriptId)) {
      mountWebform();
    } else {
      const script = document.createElement("script");
      script.id = webformScriptId;
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

      {/* Survey Widget */}
      <section className="how-widget-section">
        <div id="senior-living-widget"></div>
      </section>

      {/* Webform Widget */}
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
import { useEffect } from "react";
import "./HowItWorks.css";
import heroImage from "../../assets/how-it-works-hero.webp";


export default function HowItWorks() {
  useEffect(() => {
    if (!window.WebSmartAssistant) return;

    window.WebSmartAssistant({
      type: "survey",
      clientKey: "evergreen-heights",
      surveyKey: "memory-support",
      target: "#memory-support-survey-widget",
    });
  }, []);

  return (
    <main className="how-simple-page">

        <section
            className="how-hero"
            style={{ backgroundImage: `url(${heroImage})` }}
            >
            <div className="how-hero-overlay"></div>

            <div className="how-hero-content">

                <h1>
                Evergreen Heights
                </h1>

                <p className="how-description">
                At Evergreen Heights Senior Living, we provide personalized care,
                engaging experiences, and a supportive environment for every
                resident — from independent living to memory support.
                </p>

                <div className="how-hero-actions">
                <a href="#memory-support-survey-widget" className="how-primary-btn">
                    Download Brochure
                </a>

                <a href="#memory-support-survey-widget" className="how-primary-btn">
                    Schedule a Visit
                </a>

                <a href="#memory-support-survey-widget" className="how-primary-btn">
                    Speak to an Advisor
                </a>


                </div>
            </div>
            </section>

      <section className="how-widget-section">
        <div id="memory-support-survey-widget"></div>
      </section>
    </main>
  );
}
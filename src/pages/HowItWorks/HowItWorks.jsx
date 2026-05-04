import { useEffect } from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
    useEffect(() => {
    if (!window.WebSmartAssistant) return;

    window.WebSmartAssistant({
        type: "survey",
        clientKey: "evergreen-heights",
        surveyKey: "memory-support",
        target: "#memory-support-survey-widget",
    });

    window.WebSmartAssistant({
        type: "chatbot",
        clientKey: "web-smart-assistant",
    });
    }, []);

  return (
    <main className="how-simple-page">
      <section className="how-simple-hero">
        <p className="how-kicker">Interactive Demo</p>

        <h1>Try a Memory Support Assessment Widget</h1>

        <p>
          This demo shows how WebSmartAssistant can guide visitors through a
          simple, branded memory support assessment experience.
        </p>
      </section>

      <section className="how-widget-section">
        <div id="memory-support-survey-widget"></div>
      </section>
    </main>
  );
}
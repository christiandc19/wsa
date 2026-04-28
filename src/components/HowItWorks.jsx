import { MessageCircle, ClipboardList, UserCheck } from "lucide-react";
import "./HowItWorks.css";

import engageImage from "../assets/how-engage.webp";
import guideImage from "../assets/how-guide.webp";
import convertImage from "../assets/how-convert.webp";

const steps = [
  {
    number: "01",
    label: "Engage",
    title: "Start the Conversation",
    text: "Welcome visitors with helpful guidance the moment they arrive. Instead of leaving them to search alone, WebSmartAssistant creates an easy first step.",
    image: engageImage,
    icon: MessageCircle,
  },
  {
    number: "02",
    label: "Guide",
    title: "Help Prospects Find Clarity",
    text: "Use chat, surveys, and decision-support tools to help families understand options, ask better questions, and feel more confident moving forward.",
    image: guideImage,
    icon: ClipboardList,
  },
  {
    number: "03",
    label: "Convert",
    title: "Turn Interest Into Action",
    text: "Capture qualified leads when visitors are engaged and ready, giving your team better context before the first follow-up.",
    image: convertImage,
    icon: UserCheck,
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">
        <div className="how-header">
          <p className="how-kicker">How It Works</p>
          <h2>Guide Prospects From First Visit to Next Step</h2>
          <p>
            WebSmartAssistant helps senior living websites feel more personal,
            helpful, and action-oriented — without overwhelming families.
          </p>
        </div>

<div className="how-timeline">
  <div className="how-line"></div>

  {steps.map((step, index) => {
    const Icon = step.icon;

    return (
      <article
        className={`how-step ${index % 2 === 1 ? "reverse" : ""}`}
        key={step.title}
      >
        {/* NEW: timeline marker */}
        <div className="how-marker">
          <Icon size={16} />
        </div>

        <div className="how-image-wrap">
          <img src={step.image} alt={step.title} />

          <div className="how-floating-badge">
            <span>{step.label}</span>
          </div>
        </div>

        <div className="how-copy">
          <span className="how-number">{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
      </article>
    );
  })}
</div>
      </div>
    </section>
  );
}
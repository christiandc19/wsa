import {
  MessageSquareText,
  Users,
  Target,
  ShieldCheck,
  BarChart3,
  UserCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "./Surveys.css";
import surveyImage from "../assets/survey-preview.png";

const surveyBenefits = [
  {
    icon: MessageSquareText,
    title: "Ask the Right Questions",
    text: "Simple, conversational questions uncover what matters most to each family.",
  },
  {
    icon: Users,
    title: "Guide With Purpose",
    text: "Help families feel informed and supported at every step of their journey.",
  },
  {
    icon: Target,
    title: "Capture Qualified Leads",
    text: "Collect valuable context so your team can follow up with confidence.",
  },
];

const surveyStats = [
  {
    icon: ShieldCheck,
    label: "Conversational experience",
  },
  {
    icon: BarChart3,
    label: "Higher completion rates",
  },
  {
    icon: UserCheck,
    label: "Better lead quality",
  },
];

export default function Surveys() {
  return (
    <section className="surveys-section" id="surveys">
      <div className="surveys-container">
        <div className="surveys-content">
          <p className="surveys-kicker">Survey Tools</p>

          <h2>
            Guided Surveys.
            <br />
            Better Insights.
            <br />
            Stronger Leads.
          </h2>

          <p className="surveys-intro">
            Our decision-support surveys feel like a helpful conversation, not
            a form. Families get clarity and guidance while you capture
            high-intent leads with the right context.
          </p>

          <div className="surveys-benefits">
            {surveyBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <article className="surveys-benefit" key={item.title}>
                  <div className="surveys-benefit-icon">
                    <Icon size={24} strokeWidth={2.2} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <a href="#demo" className="surveys-button">
            See Survey in Action
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="surveys-preview">
          <div className="survey-image-card">
            <img src={surveyImage} alt="Senior living survey question preview" />

            <div className="survey-click-highlight">
              <div className="survey-click-ring"></div>
            </div>
          </div>

          <div className="survey-stat-row">
            {surveyStats.map((item) => {
              const Icon = item.icon;

              return (
                <div className="survey-stat" key={item.label}>
                  <Icon size={22} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="survey-note">
            <CheckCircle2 size={26} />
            <div>
              <strong>Built for Senior Living</strong>
              <p>
                Surveys are designed around the real questions families are
                asking before they reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
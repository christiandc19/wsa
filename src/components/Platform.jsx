import "./Platform.css";
import {
  MessageCircle,
  UserPlus,
  Navigation,
  Clock3,
  BarChart3,
  Boxes,
} from "lucide-react";

const platformItems = [
  {
    title: "Guided Conversations",
    text: "Help prospects explore options with structured conversations that build trust and reduce hesitation.",
    icon: MessageCircle,
    color: "blue",
  },
  {
    title: "Lead Capture That Feels Natural",
    text: "Capture high-intent leads through conversations instead of overwhelming visitors with long forms.",
    icon: UserPlus,
    color: "purple",
  },
  {
    title: "Smart Website Guidance",
    text: "Guide visitors to the right pages, services, and next steps without making them search around.",
    icon: Navigation,
    color: "teal",
  },
  {
    title: "Always-On Engagement",
    text: "Give prospects helpful answers 24/7, even when your sales or admissions team is unavailable.",
    icon: Clock3,
    color: "orange",
  },
  {
    title: "Prospect Insights",
    text: "Understand what visitors ask, what they need, and when they may be ready to take action.",
    icon: BarChart3,
    color: "pink",
  },
  {
    title: "Expandable Toolset",
    text: "Start with chat and grow into surveys, affordability tools, and other conversion features.",
    icon: Boxes,
    color: "indigo",
  },
];


export default function Platform() {
  return (
    <section className="platform-section" id="platform">
      <div className="platform-container">
        <div className="platform-header">
          <p className="platform-kicker">Platform</p>

          <h2>Tools That Convert Website Visitors Into Move-Ins</h2>

          <p className="platform-intro">
            WebSmartAssistant is a growing suite of AI-powered tools designed
            specifically for senior living. Guide prospects, answer questions
            instantly, and capture high-intent leads — all from your website.
          </p>
        </div>

        <div className="platform-grid">
          {platformItems.map((item) => {
            const Icon = item.icon;

            return (
              <article className={`platform-card ${item.color}`} key={item.title}>
                <div className="platform-icon">
                  <Icon size={22} strokeWidth={2} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
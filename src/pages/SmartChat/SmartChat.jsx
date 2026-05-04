import "./SmartChat.css";
import smartChatHero from "../../assets/smart-chat-hero.webp";
import SmartChatSupport from "./SmartChatSupport";
import "./SmartChatSupport.css";

export default function SmartChat() {
  return (
    <>
    <section className="smartchat-hero">

      <div className="smartchat-accent smartchat-accent-orb"></div>
      <div className="smartchat-accent smartchat-accent-pill"></div>
      <div className="smartchat-accent smartchat-accent-dots"></div>

      <div className="smartchat-accent smartchat-accent-one"></div>
      <div className="smartchat-accent smartchat-accent-two"></div>

      <div className="smartchat-container">
        
        {/* LEFT CONTENT */}
        <div className="smartchat-content">
          <span className="smartchat-eyebrow">
            CONVERSATION TECHNOLOGY
          </span>

          <div className="smartchat-title">
            <h1>Smart Chat</h1>
            <h2>Conversations That Turn Visitors Into Leads</h2>
          </div>
          <div className="smartchat-subtext">
          <p>
            Guide prospects, answer questions instantly, and capture qualified
            leads — all from your website.
          </p>
          </div>

          <div className="smartchat-buttons">
            <a href="/#demo" className="smartchat-btn-primary">
              Request Demo
            </a>

            <a href="#how-it-works" className="smartchat-btn-secondary">
              See How It Works
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="smartchat-image-wrapper">
          <img
            src={smartChatHero}
            alt="Smart Chat Conversation"
            className="smartchat-image"
          />

          {/* Floating card */}
          <div className="smartchat-card">
            <span className="smartchat-card-label">SMART CHAT</span>
            <p>
              Intelligent conversations that guide visitors and capture leads automatically.
            </p>
          </div>
        </div>
      </div>
    </section>

    <SmartChatSupport />

    </>
  );
}
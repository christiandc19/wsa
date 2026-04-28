import "./Hero.css";
import heroImage from "../assets/hero-senior.webp";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-accent hero-accent-one"></div>
      <div className="hero-accent hero-accent-two"></div>

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-kicker">Senior Living Sales Technology</p>

          <h1>
            Put Better
            <br />
            Conversations First.
          </h1>

          <p className="hero-text">
            WebSmartAssistant helps senior living teams guide prospects,
            answer questions, and capture qualified leads directly from their
            website.
          </p>

          <div className="hero-actions">
            <a href="#demo" className="hero-primary-btn">
              Request Demo
            </a>

            <a href="#platform" className="hero-secondary-btn">
              Explore Platform
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img src={heroImage} alt="Senior living prospect smiling" />

          <div className="hero-card">
            <span>Engage prospects</span>
            <p>
              Decision-support tools that build trust before the first tour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
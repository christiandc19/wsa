import "./SmartChatSupport.css";
import smartChatSectionOne from "../../assets/smart-chat-section-1.webp";


export default function SmartChatSupport() {
  return (
    <section className="smartchat-support-section" id="how-it-works">
      <div className="smartchat-support-container">
        
        {/* LEFT - IMAGE */}
        <div className="smartchat-support-media">
          <img
            src={smartChatSectionOne}
            alt="Senior living prospect using Smart Chat"
          />

          <div className="smartchat-mini-panel">
            <span>Visitor intent detected</span>
            <strong>Tour interest</strong>
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div className="smartchat-support-content">
          <span className="smartchat-support-kicker">
            BUILT FOR GUIDED CONVERSATIONS
          </span>

          <h2>More Than Chat. A Smarter First Step.</h2>

          <p>
            Smart Chat helps website visitors get answers quickly while guiding them
            toward meaningful next steps — like asking about services, requesting
            pricing information, or scheduling a tour.
          </p>

          <div className="smartchat-support-list">
            <div>
              <strong>Answer common questions</strong>
              <span>Give visitors helpful responses without making them wait.</span>
            </div>

            <div>
              <strong>Understand visitor needs</strong>
              <span>Capture interests, concerns, and preferences naturally.</span>
            </div>

            <div>
              <strong>Move prospects forward</strong>
              <span>Guide users to surveys, forms, tours, or your team.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
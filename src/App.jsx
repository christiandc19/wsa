import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Platform from "./components/Platform";
import Surveys from "./components/Surveys";
import DemoRequest from "./components/DemoRequest";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import SolutionsOverview from "./pages/SolutionsOverview";
import SmartChat from "./pages/SmartChat/SmartChat";
import SurveysSolution from "./pages/SurveysSolution";
import WebformSolution from "./pages/WebformSolution";
import TourSchedulingSolution from "./pages/TourSchedulingSolution";
import PricingAssistantSolution from "./pages/PricingAssistantSolution";
import AnalyticsSolution from "./pages/AnalyticsSolution";
import HowItWorks from "./pages/HowItWorks/HowItWorks";

function Home() {
  return (
    <>
      <Hero />
      <Platform />
      <Surveys />
      <DemoRequest />
      <FAQ />
    </>
  );
}

function ChatbotController() {
  const location = useLocation();

  useEffect(() => {
    // ✅ Make sure widget script is loaded
    if (!window.WebSmartAssistant) return;

    // 🧹 Remove existing chatbot before loading a new one
    // Prevents duplicate widgets when navigating pages
    const existing = document.getElementById("websmartassistant-root");
    if (existing) {
      existing.remove();
    }

    const path = location.pathname;

    // 🎯 PAGE → CHATBOT MAPPING
    // ----------------------------------
    // Edit this section anytime to control
    // which chatbot appears on which page
    // ----------------------------------

    let clientKey = "web-smart-assistant"; // 👈 default chatbot (used everywhere unless overridden)

    if (path === "/how-it-works") {
      clientKey = "robin-run"; // 👈 only for How It Works page
    }

    // Example future use:
    // if (path === "/demo") {
    //   clientKey = "evergreen-heights";
    // }

    // if (path.startsWith("/solutions")) {
    //   clientKey = "fontrow";
    // }

    // 🚀 Initialize chatbot with selected client
    window.WebSmartAssistant({
      clientKey,
    });

  }, [location.pathname]); // runs on every route change

  return null;
}


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />

        <ChatbotController /> {/* 👈 THIS IS THE MAGIC */}

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/solutions" element={<SolutionsOverview />} />
          <Route path="/solutions/smart-chat" element={<SmartChat />} />
          <Route path="/solutions/surveys" element={<SurveysSolution />} />
          <Route path="/solutions/webform" element={<WebformSolution />} />
          <Route
            path="/solutions/tour-scheduling"
            element={<TourSchedulingSolution />}
          />
          <Route
            path="/solutions/pricing-assistant"
            element={<PricingAssistantSolution />}
          />
          <Route path="/solutions/analytics" element={<AnalyticsSolution />} />
          <Route path="/how-it-works" element={<HowItWorks />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
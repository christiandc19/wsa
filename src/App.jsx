import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Platform from "./components/Platform";
import HowItWorks from "./components/HowItWorks";
import Surveys from "./components/Surveys";
import DemoRequest from "./components/DemoRequest";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import SolutionsOverview from "./pages/SolutionsOverview";
import ChatSolution from "./pages/ChatSolution";
import SurveysSolution from "./pages/SurveysSolution";
import WebformSolution from "./pages/WebformSolution";
import TourSchedulingSolution from "./pages/TourSchedulingSolution";
import PricingAssistantSolution from "./pages/PricingAssistantSolution";
import AnalyticsSolution from "./pages/AnalyticsSolution";

function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Platform />
      <Surveys />
      <DemoRequest />
      <FAQ />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/solutions" element={<SolutionsOverview />} />
          <Route path="/solutions/chat" element={<ChatSolution />} />
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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
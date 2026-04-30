import { Link } from "react-router-dom";

export default function SurveysSolution() {
  return (
    <main className="pt-28 px-6 max-w-6xl mx-auto min-h-screen">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Smart Surveys That Convert
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Guide visitors through personalized assessments that educate, engage,
          and capture high-quality leads for your team.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="p-6 border rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Guided Decision-Making
          </h2>
          <p className="text-slate-600">
            Help users navigate complex decisions like senior living, downsizing,
            or care needs with step-by-step questions.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Lead Capture Built-In
          </h2>
          <p className="text-slate-600">
            Collect names, emails, and preferences naturally throughout the
            survey flow — no friction, no drop-off.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Personalized Results
          </h2>
          <p className="text-slate-600">
            Deliver tailored recommendations that build trust and move users
            closer to taking action.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Fully Customizable
          </h2>
          <p className="text-slate-600">
            Match your branding, questions, and flow for each community or
            campaign.
          </p>
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Popular Use Cases
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">
              Senior Living Decision Guide
            </h3>
            <p className="text-slate-600 text-sm">
              Help families determine if now is the right time to explore senior
              living.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">
              Downsizing Readiness
            </h3>
            <p className="text-slate-600 text-sm">
              Assist users in evaluating whether downsizing could simplify their
              lifestyle.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">
              Memory Support Assessment
            </h3>
            <p className="text-slate-600 text-sm">
              Identify signs that memory care or support services may be needed.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">
              Affordability Estimator
            </h3>
            <p className="text-slate-600 text-sm">
              Give prospects a better understanding of what senior living could
              cost for their situation.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Turn visitors into qualified leads
        </h3>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#demo"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Request a Demo
          </a>

          <Link
            to="/solutions"
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Back to Solutions
          </Link>
        </div>
      </div>
    </main>
  );
}
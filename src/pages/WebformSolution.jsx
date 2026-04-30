import { Link } from "react-router-dom";

export default function WebformSolution() {
  return (
    <main className="pt-28 px-6 max-w-6xl mx-auto min-h-screen">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Smart Webforms That Capture Leads
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Replace basic contact forms with monitored webforms that collect,
          organize, and send lead details directly into your dashboard.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="p-6 border rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Monitored Submissions</h2>
          <p className="text-slate-600">
            Track who filled out your form, what they submitted, and when the
            inquiry came in.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Dashboard Storage</h2>
          <p className="text-slate-600">
            Keep webform leads in one place with chatbot conversations, surveys,
            and tour requests.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Custom Fields</h2>
          <p className="text-slate-600">
            Add fields for name, phone, email, care interest, budget, preferred
            contact time, or anything your team needs.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Better Follow-Up</h2>
          <p className="text-slate-600">
            Give your sales or admissions team more context before they contact
            each prospect.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Turn every form submission into a trackable lead
        </h3>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/#demo"
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
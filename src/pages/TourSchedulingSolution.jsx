import { Link } from "react-router-dom";

export default function TourSchedulingSolution() {
  return (
    <main className="pt-28 px-6 max-w-6xl mx-auto min-h-screen">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tour Scheduling Made Simple
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Let website visitors request a tour directly from your site while your
          team captures important lead details automatically.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="p-6 border rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Easy Tour Requests
          </h2>
          <p className="text-slate-600">
            Visitors can quickly choose a preferred day and time without calling
            or filling out a long contact form.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Lead Details Captured
          </h2>
          <p className="text-slate-600">
            Collect name, email, phone number, care interest, and notes before
            the tour request reaches your team.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Dashboard Visibility
          </h2>
          <p className="text-slate-600">
            View tour requests inside your dashboard alongside conversations,
            survey leads, and webform submissions.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            Better Follow-Up
          </h2>
          <p className="text-slate-600">
            Give your sales or admissions team the context they need before
            reaching out to confirm the tour.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Make it easier for prospects to take the next step
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
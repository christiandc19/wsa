export default function DemoRequest() {
  return (
    <section id="demo" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl bg-slate-900 px-6 py-14 text-white md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Request a Demo
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              See how WebSmartAssistant can work for your website
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Tell us a little about your business and goals. This form can be
              connected to your backend or email service later.
            </p>
          </div>

          <form className="mt-10 grid gap-4 rounded-2xl bg-white p-6 text-slate-900 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
            />
            <input
              type="text"
              placeholder="Website URL"
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
            />
            <textarea
              rows="5"
              placeholder="Tell us about your business, goals, or what product interests you"
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 md:col-span-2"
            />
            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 md:col-span-2"
            >
              Submit Demo Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
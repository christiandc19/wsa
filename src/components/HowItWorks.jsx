const steps = [
  {
    step: "Step 1",
    title: "Add WebSmartAssistant to your website",
    description:
      "Integrate the platform into your website with a simple setup process designed for modern sites.",
  },
  {
    step: "Step 2",
    title: "Customize the experience",
    description:
      "Align the assistant with your business goals, website content, services, and visitor flow.",
  },
  {
    step: "Step 3",
    title: "Engage visitors automatically",
    description:
      "Let AI-powered tools answer questions, guide users, and create better digital interactions.",
  },
  {
    step: "Step 4",
    title: "Capture leads and insights",
    description:
      "Collect contact information, discover visitor intent, and learn from real website engagement.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            A simple path to smarter website engagement
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            WebSmartAssistant is designed to fit into your website strategy
            without unnecessary complexity. Start with a focused use case today,
            then expand your setup over time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {item.step}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
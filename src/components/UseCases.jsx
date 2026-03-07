const cases = [
  {
    title: "Senior Living Communities",
    description:
      "Support families with questions, guide them to services, and help them request tours or connect with staff.",
  },
  {
    title: "Marketing Agencies",
    description:
      "Capture qualified leads, improve conversion opportunities, and create a more interactive website experience.",
  },
  {
    title: "Local Service Businesses",
    description:
      "Help potential customers get answers quickly and move them closer to booking or contacting your team.",
  },
  {
    title: "SaaS and Technology Companies",
    description:
      "Guide visitors through products, support questions, and help more people understand your platform.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Use Cases
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Built for businesses that want smarter websites
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            WebSmartAssistant can support a variety of industries that rely on
            their website to educate visitors, answer questions, and generate
            leads.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cases.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
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
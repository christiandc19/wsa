const capabilities = [
  {
    title: "AI Conversations",
    description:
      "Engage website visitors with intelligent conversations that answer questions and support decision-making.",
  },
  {
    title: "Lead Capture",
    description:
      "Collect visitor information and create more opportunities from high-intent website traffic.",
  },
  {
    title: "Smart Website Guidance",
    description:
      "Help users find relevant services, pages, and information faster through guided interactions.",
  },
  {
    title: "Automated Engagement",
    description:
      "Turn static pages into active digital experiences that respond instantly to visitors.",
  },
  {
    title: "Visitor Insights",
    description:
      "Understand what visitors are asking for and how they interact with your website experience.",
  },
  {
    title: "Expandable Product Ecosystem",
    description:
      "Start with one assistant today and grow into a broader set of AI tools over time.",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Platform
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            A flexible AI platform built for modern business websites
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            WebSmartAssistant is designed as a growing suite of AI-powered tools
            that improve how websites communicate with visitors. Instead of
            relying on static pages alone, businesses can use intelligent
            assistants to guide users, automate responses, and capture more
            opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
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
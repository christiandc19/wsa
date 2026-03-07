const products = [
  {
    title: "AI Chat Assistant",
    status: "Available",
    description:
      "Engage visitors with conversational AI that answers questions, supports website journeys, and captures leads.",
  },
  {
    title: "Lead Qualification AI",
    status: "Coming Soon",
    description:
      "Identify high-intent visitors by asking smart questions and collecting the information your team needs.",
  },
  {
    title: "Smart Website Guide",
    status: "Coming Soon",
    description:
      "Guide users to the right pages, services, and resources based on their interests and actions.",
  },
  {
    title: "AI Scheduling Assistant",
    status: "Coming Soon",
    description:
      "Help visitors request meetings, consultations, and demos directly from your website experience.",
  },
  {
    title: "Knowledge Assistant",
    status: "Coming Soon",
    description:
      "Deliver instant answers based on your services, content, and commonly asked questions.",
  },
  {
    title: "Analytics Dashboard",
    status: "Coming Soon",
    description:
      "Track conversations, engagement trends, and lead activity with a clearer view of performance.",
  },
];

function StatusBadge({ status }) {
  const isAvailable = status === "Available";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        isAvailable
          ? "bg-emerald-100 text-emerald-700"
          : "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Products
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            A growing suite of AI-powered website tools
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            WebSmartAssistant is built to support more than one product. Start
            with the tools available today and expand into future capabilities
            as your website engagement strategy grows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {product.title}
                </h3>
                <StatusBadge status={product.status} />
              </div>

              <p className="mt-4 text-slate-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
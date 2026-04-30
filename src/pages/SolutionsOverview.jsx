export default function SolutionsOverview() {
  const solutions = [
    {
      title: "Chat Assistant",
      description: "AI-powered conversations that engage visitors and capture leads.",
      link: "/solutions/chat",
    },
    {
      title: "Surveys",
      description: "Guided assessments that help users make decisions with confidence.",
      link: "/solutions/surveys",
    },
    {
      title: "Webform",
      description: "Smart webforms that track, store, and manage incoming leads.",
      link: "/solutions/webform",
    },
    {
      title: "Tour Scheduling",
      description: "Let prospects easily book tours directly from your website.",
      link: "/solutions/tour-scheduling",
    },
    {
      title: "Pricing Assistant",
      description: "Help visitors understand pricing through guided experiences.",
      link: "/solutions/pricing-assistant",
    },
    {
      title: "Analytics",
      description: "Track engagement, leads, and performance across your platform.",
      link: "/solutions/analytics",
    },
  ];

  return (
    <main className="pt-28 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Solutions
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Everything you need to engage visitors, capture leads, and grow your community — all in one platform.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="border rounded-2xl p-6 hover:shadow-lg transition group"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
              {item.title}
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              {item.description}
            </p>

            <span className="text-sm font-medium text-blue-600">
              Learn more →
            </span>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-semibold mb-4">
          Want to see it in action?
        </h3>
        <a
          href="#demo"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Request a Demo
        </a>
      </div>
    </main>
  );
}
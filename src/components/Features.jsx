const features = [
  "AI-powered website conversations",
  "Lead capture and qualification",
  "Custom branding and setup",
  "Answers common visitor questions",
  "Works with your website flow",
  "Built to improve conversions",
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">Features</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">{feature}</h3>
              <p className="mt-3 text-slate-600">
                Clean, conversion-focused functionality designed for modern business websites.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
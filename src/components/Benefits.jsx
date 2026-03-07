const items = [
  "Capture more leads",
  "Respond instantly",
  "Qualify visitors automatically",
  "Guide users to action",
];

export default function Benefits() {
  return (
    <section className="py-12">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-medium text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
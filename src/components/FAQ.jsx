const faqs = [
  {
    question: "What is WebSmartAssistant?",
    answer:
      "WebSmartAssistant is a growing platform of AI-powered tools designed to help websites engage visitors, answer questions, and generate more opportunities.",
  },
  {
    question: "Is this only for chatbot functionality?",
    answer:
      "No. The platform is designed to support multiple AI-powered website tools, including future products beyond conversational assistants.",
  },
  {
    question: "Can the platform be customized for my business?",
    answer:
      "Yes. The experience can be tailored to your business goals, website flow, and the type of interactions you want to support.",
  },
  {
    question: "Can this work with my current website?",
    answer:
      "In most cases, yes. WebSmartAssistant is intended to work with modern websites and can be adapted for different implementations.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-3 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
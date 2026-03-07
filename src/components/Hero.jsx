import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600"
          >
            AI Assistants for Smarter Websites
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl"
          >
            Turn your website into an intelligent customer engagement platform.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            WebSmartAssistant helps businesses engage visitors, answer
            questions, capture leads, and guide users toward action with a
            growing suite of AI-powered website tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#demo"
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Request a Demo
            </a>
            <a
              href="#products"
              className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Explore Products
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
            <span>AI-powered engagement</span>
            <span>Lead capture</span>
            <span>Website guidance</span>
            <span>Future-ready platform</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-slate-300" />
              <div className="h-3 w-3 rounded-full bg-slate-300" />
              <div className="h-3 w-3 rounded-full bg-slate-300" />
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Product
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  AI Chat Assistant
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Engage visitors, answer questions, and capture leads.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Product
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  Lead Qualification AI
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Identify intent and route high-quality opportunities.
                </p>
              </div>

              <div className="rounded-2xl border border-dashed border-slate-300 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Platform Vision
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  More tools coming soon
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Scheduling, guidance, knowledge tools, analytics, and more.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
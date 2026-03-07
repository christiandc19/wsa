export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <div className="text-lg font-bold text-slate-900">
            WebSmartAssistant
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            AI-powered website tools designed to help businesses engage
            visitors, answer questions, capture leads, and build smarter online
            experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-slate-600">
          <a href="#platform" className="hover:text-slate-900">
            Platform
          </a>
          <a href="#products" className="hover:text-slate-900">
            Products
          </a>
          <a href="#how-it-works" className="hover:text-slate-900">
            How It Works
          </a>
          <a href="#use-cases" className="hover:text-slate-900">
            Use Cases
          </a>
          <a href="#demo" className="hover:text-slate-900">
            Request Demo
          </a>
        </div>
      </div>
    </footer>
  );
}
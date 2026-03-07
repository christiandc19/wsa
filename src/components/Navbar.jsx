export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900">
          WebSmartAssistant
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#platform"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Platform
          </a>
          <a
            href="#products"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Products
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            How It Works
          </a>
          <a
            href="#use-cases"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Use Cases
          </a>
          <a
            href="#demo"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Request Demo
          </a>
        </nav>
      </div>
    </header>
  );
}
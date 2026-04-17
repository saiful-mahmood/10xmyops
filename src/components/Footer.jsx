export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <a href="#" className="inline-flex items-center gap-2 mb-6 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <span className="text-xl font-extrabold font-[family-name:var(--font-heading)] text-slate-900">10xMyOps</span>
        </a>
        <p className="text-slate-500 text-sm font-medium tracking-wide">
          &copy; {new Date().getFullYear()} 10xMyOps. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

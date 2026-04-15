export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <a href="#" className="inline-flex items-center gap-2 mb-4 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b0c15" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <span className="text-lg font-extrabold font-[family-name:var(--font-heading)] text-white">10xMyOps</span>
        </a>
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} 10xMyOps. All rights reserved.</p>
      </div>
    </footer>
  )
}

import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <a href="#" className="inline-flex items-center gap-2 mb-6 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg border border-gray-100">
            <img src={logo} alt="10xMyOps Logo" className="w-full h-full object-cover" />
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

import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        <a href="#" className="inline-flex items-center gap-2 mb-6 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg border border-gray-100">
            <img src={logo} alt="10xMyOps Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-extrabold font-[family-name:var(--font-heading)] text-slate-900">10xMyOps</span>
        </a>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6 text-sm text-slate-600 font-medium tracking-wide">
          <a href="tel:508-623-9060" className="hover:text-blue-600 transition-colors">508-623-9060</a>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          <a href="mailto:nus@10xmyops.com" className="hover:text-blue-600 transition-colors">nus@10xmyops.com</a>
        </div>

        <p className="text-slate-400 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} 10xMyOps. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

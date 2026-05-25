import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <img src={logo} alt="10xMyOps Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-extrabold font-[family-name:var(--font-heading)] hidden sm:block text-slate-900">
              10xMyOps
            </span>
          </a>

          <div className="flex items-center gap-4 shrink-0">
            <a 
              href="tel:5086239060" 
              className="hidden lg:flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold text-sm transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              508-623-9060
            </a>
            <a
              href="mailto:nus@10xmyops.com"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm hover:opacity-90 transition-all shadow-md hidden sm:inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

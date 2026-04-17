import { useState, useEffect } from 'react'

export default function Header({ activeTab, setActiveTab }) {
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
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <span className="text-xl font-extrabold font-[family-name:var(--font-heading)] hidden sm:block text-slate-900">
              10xMyOps
            </span>
          </a>

          <div className="flex items-center p-1 rounded-full bg-gray-100 border border-gray-200">
            <button
              onClick={() => setActiveTab('gtm')}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'gtm' 
                  ? 'bg-white text-blue-700 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Email Marketing
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'ai' 
                  ? 'bg-white text-blue-700 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              AI Consulting
            </button>
          </div>

          <div className="shrink-0">
            <a
              href="#cta"
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

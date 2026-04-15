import { useState, useEffect } from 'react'

export default function Header({ activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-[var(--color-dark-border)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-blue)] flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b0d1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <span className="text-xl font-extrabold font-[family-name:var(--font-heading)] hidden sm:block">
              10xMyOps AI
            </span>
          </a>

          {/* Center Toggle (ModernEdge style) */}
          <div className="flex items-center p-1 rounded-full bg-[#1a1c2e] border border-white/5">
            <button
              onClick={() => setActiveTab('gtm')}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'gtm' 
                  ? 'bg-[#2a2d42] text-white shadow-sm' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              GTM Service
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'ai' 
                  ? 'bg-[#2a2d42] text-white shadow-sm' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              AI Consulting
            </button>
          </div>

          {/* CTA Button */}
          <div className="shrink-0">
            <a
              href="#cta"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-sm hover:from-blue-400 hover:to-cyan-300 transition-all hidden sm:inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

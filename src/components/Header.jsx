import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-[var(--color-dark-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-blue)] flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-shadow duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b0d1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <span className="text-xl font-extrabold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] group-hover:text-[var(--color-cyan)] transition-colors duration-300">
              10xMyOps
            </span>
          </a>

          {/* Desktop Nav - pill style like ModernEdge */}
          <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full border border-[var(--color-dark-border)] bg-[var(--color-dark-surface)]/80 backdrop-blur-md">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-dark-card)] transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#cta"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-gradient text-[var(--color-dark-bg)] font-bold text-sm"
          >
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[var(--color-text-primary)] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-[var(--color-dark-border)] animate-fade-in-down">
          <div className="px-6 py-4 flex flex-col gap-2">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-cyan)] transition-colors py-2.5 px-3 rounded-lg hover:bg-[var(--color-dark-card)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-full btn-gradient text-[var(--color-dark-bg)] font-bold"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

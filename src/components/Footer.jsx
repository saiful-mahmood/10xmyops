export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-dark-border)] py-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-blue)] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b0d1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <span className="text-lg font-extrabold font-[family-name:var(--font-heading)]">10xMyOps</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-[var(--color-text-secondary)]">
            <a href="#services" className="hover:text-[var(--color-cyan)] transition-colors duration-200">Services</a>
            <a href="#how-it-works" className="hover:text-[var(--color-cyan)] transition-colors duration-200">How It Works</a>
            <a href="#pricing" className="hover:text-[var(--color-cyan)] transition-colors duration-200">Pricing</a>
            <a href="#faq" className="hover:text-[var(--color-cyan)] transition-colors duration-200">FAQ</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} 10xMyOps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

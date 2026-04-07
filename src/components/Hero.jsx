export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a3e] via-[#0f1225] to-[var(--color-dark-bg)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-purple-600/20 via-indigo-600/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="animate-fade-in-up">
            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-dark-card)] border border-[var(--color-dark-border)]">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-blue)] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0b0d1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span className="text-sm font-medium text-[var(--color-text-primary)]">AI-Powered Automation</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-amber)]/10 border border-[var(--color-amber)]/20">
                <span className="text-sm font-medium text-[var(--color-amber)]">Trusted by 50+ Growing Businesses</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-heading)] leading-[1.1] mb-6">
              Operational Efficiency{' '}
              <span className="gradient-text">
                for Growing Businesses
              </span>
            </h1>

            <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl leading-relaxed">
              Fully automated operational systems that eliminate bottlenecks, reduce overhead, and deliver{' '}
              <strong className="text-[var(--color-text-primary)]">consistent, measurable results</strong>.
            </p>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-gradient text-[var(--color-dark-bg)] font-bold text-base"
            >
              Get Started
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="animate-float" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl border border-[var(--color-dark-border)] bg-[var(--color-dark-card)] p-6 shadow-2xl shadow-black/50 card-glow">
              {/* Window dots */}
              <div className="flex gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              {/* Top metric */}
              <div className="flex items-center justify-between mb-4 p-4 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)]">
                <div>
                  <p className="text-xs text-[var(--color-text-muted)] mb-1">Operational Efficiency</p>
                  <p className="text-3xl font-extrabold font-[family-name:var(--font-heading)] gradient-text">96%</p>
                </div>
                <div className="w-16 h-16 relative">
                  <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="var(--color-dark-border)" strokeWidth="4"/>
                    <circle cx="32" cy="32" r="28" fill="none" stroke="url(#progressGrad)" strokeWidth="4" strokeLinecap="round" strokeDasharray="175.9" strokeDashoffset="7"/>
                    <defs>
                      <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee"/>
                        <stop offset="100%" stopColor="#3b82f6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Metric grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] group hover:border-[var(--color-cyan)]/30 transition-all">
                  <p className="text-xs text-[var(--color-text-muted)] mb-1">Monthly Savings</p>
                  <p className="text-xl font-bold text-emerald-400">$8,500</p>
                </div>
                <div className="p-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] group hover:border-[var(--color-cyan)]/30 transition-all">
                  <p className="text-xs text-[var(--color-text-muted)] mb-1">Tasks Automated</p>
                  <p className="text-xl font-bold text-[var(--color-cyan)]">147</p>
                </div>
                <div className="p-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] group hover:border-[var(--color-cyan)]/30 transition-all">
                  <p className="text-xs text-[var(--color-text-muted)] mb-1">Team Capacity</p>
                  <p className="text-xl font-bold text-[var(--color-blue)]">+35%</p>
                </div>
                <div className="p-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] group hover:border-[var(--color-cyan)]/30 transition-all">
                  <p className="text-xs text-[var(--color-text-muted)] mb-1">Process Uptime</p>
                  <p className="text-xl font-bold text-[var(--color-purple-light)]">99.8%</p>
                </div>
              </div>

              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-cyan)]/5 via-[var(--color-blue)]/5 to-[var(--color-purple)]/5 rounded-3xl blur-xl -z-10" />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '+240%', label: 'Throughput Increase' },
            { value: '-20hrs', label: 'Weekly Overhead Saved' },
            { value: '45%', label: 'Average Cost Reduction' },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl border border-[var(--color-dark-border)] bg-[var(--color-dark-card)] hover:border-[var(--color-cyan)]/30 transition-all group card-glow"
            >
              <p className="text-3xl font-extrabold font-[family-name:var(--font-heading)] gradient-text group-hover:scale-110 transition-transform inline-block">{s.value}</p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

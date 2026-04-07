export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark-bg)] via-[var(--color-dark-surface)] to-[var(--color-dark-bg)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-purple)]/30 text-[var(--color-purple-light)] text-xs font-semibold tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-4">
            Our Operational Efficiency{' '}
            <span className="gradient-text">Platform</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
            A done-for-you system that audits your workflows, automates repetitive tasks, and delivers measurable results.
          </p>
        </div>

        {/* Dashboard Preview Card */}
        <div className="relative max-w-5xl mx-auto rounded-3xl border border-[var(--color-dark-border)] bg-[var(--color-dark-card)] p-1 shadow-2xl shadow-black/40 overflow-hidden card-glow">
          <div className="rounded-2xl bg-gradient-to-br from-[var(--color-dark-surface)] to-[var(--color-dark-card)] p-6 sm:p-8">
            {/* Header bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-blue)] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0b0d1a" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <span className="font-bold text-[var(--color-text-primary)]">10xMyOps Dashboard</span>
              </div>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Workflows Active', val: '24', color: 'text-[var(--color-cyan)]', icon: '⚡' },
                { label: 'Tasks Completed', val: '1,847', color: 'text-emerald-400', icon: '✓' },
                { label: 'Hours Saved', val: '320+', color: 'text-[var(--color-purple-light)]', icon: '⏱' },
                { label: 'Error Rate', val: '0.3%', color: 'text-emerald-400', icon: '↓' },
                { label: 'Team Efficiency', val: '94%', color: 'text-[var(--color-blue)]', icon: '↑' },
                { label: 'Cost Savings', val: '$12.4K', color: 'text-[var(--color-amber)]', icon: '💰' },
              ].map((m, i) => (
                <div key={i} className="p-4 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] hover:border-[var(--color-cyan)]/20 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">{m.icon}</span>
                    <p className="text-xs text-[var(--color-text-muted)]">{m.label}</p>
                  </div>
                  <p className={`text-2xl font-extrabold ${m.color}`}>{m.val}</p>
                </div>
              ))}
            </div>

            {/* Chart placeholder */}
            <div className="p-4 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)]">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">Weekly Performance</p>
                <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--color-cyan)]"></span> Tasks</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--color-purple)]"></span> Savings</span>
                </div>
              </div>
              <div className="flex items-end gap-2 h-32">
                {[40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 92, 88].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-1">
                    <div
                      className="w-full rounded-t-sm bg-gradient-to-t from-[var(--color-cyan)] to-[var(--color-blue)] opacity-80"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ambient glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-[var(--color-cyan)]/5 via-[var(--color-blue)]/5 to-[var(--color-purple)]/5 rounded-3xl blur-2xl -z-10" />
        </div>
      </div>
    </section>
  )
}

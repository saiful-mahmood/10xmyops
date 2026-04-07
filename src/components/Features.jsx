const features = [
  {
    title: 'White-Glove Execution',
    desc: 'We manage strategy, setup, workflow design, and optimization — fully done for you, with safe processes that protect your business.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'High-Precision Targeting',
    desc: 'We define your exact bottlenecks by department, process, and cost center, then build targeted automation that delivers measurable ROI.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    title: 'Automated Personalization',
    desc: 'AI runs best-practice workflows, personalizes every process, optimizes in real time, and routes outputs straight to your team.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-[var(--color-dark-border)] bg-[var(--color-dark-card)] hover:border-[var(--color-cyan)]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-cyan)]/10 to-[var(--color-blue)]/10 border border-[var(--color-dark-border)] flex items-center justify-center text-[var(--color-cyan)] mb-5 group-hover:border-[var(--color-cyan)]/40 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3 text-[var(--color-text-primary)]">{f.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

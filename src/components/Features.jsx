const features = [
  {
    title: 'Done-For-You Integration',
    desc: 'We map out your processes and integrate everything perfectly with Housecall Pro, ServiceTitan, Jobber, and your existing accounting stack—no coding required.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Zero Dispatch Friction',
    desc: 'Eliminate manual data entry. We automate tech routing, status updates, and customer ETA texts so your CSRs can focus on high-value conversations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    title: 'Automated Sales & Renewals',
    desc: 'AI triggers perfectly-timed estimate follow-ups, drives 5-star reviews on auto-pilot, and handles service agreement renewals before they ever churn.',
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

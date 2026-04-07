export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Discovery Call',
      desc: 'A 30-minute deep dive into your current operations, pain points, and goals. We identify the 2–3 highest-ROI processes to automate first.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Refine Strategy',
      desc: 'We design your custom automation architecture, refine the workflows, and map out every integration with your existing tools.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10M18 20V4M6 20v-4"/>
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Go Live',
      desc: 'We launch within days, not months. Real-time reporting keeps you in the loop while we continuously optimize for peak performance.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark-bg)] via-[var(--color-dark-surface)] to-[var(--color-dark-bg)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-blue)]/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-cyan)]/30 text-[var(--color-cyan)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] tracking-wide uppercase">
            Onboarding in{' '}
            <span className="gradient-text">3 Steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector lines */}
          <div className="hidden md:block absolute top-24 left-[33%] right-[33%] h-px border-t-2 border-dashed border-[var(--color-dark-border)]" />

          {steps.map((s, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-[var(--color-dark-border)] bg-[var(--color-dark-card)] hover:border-[var(--color-cyan)]/40 transition-all duration-300 hover:-translate-y-1 card-glow"
            >
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-blue)] flex items-center justify-center text-xs font-bold text-[var(--color-dark-bg)]">
                {s.num}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-cyan)]/10 to-[var(--color-blue)]/10 border border-[var(--color-dark-border)] flex items-center justify-center text-[var(--color-cyan)] mb-5 group-hover:border-[var(--color-cyan)]/40 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300">
                {s.icon}
              </div>

              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3">{s.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

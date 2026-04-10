const testimonials = [
  {
    quote: "10xMyOps rebuilt our dispatch-to-close workflow in under two weeks. We're running 30% more service calls and I didn't have to hire another dispatcher.",
    name: 'Marcus Thompson',
    role: 'Owner, Apex Heating & Cooling',
  },
  {
    quote: "Our maintenance agreement renewals used to be a nightmare. Now it's fully automated. We added $40k in recurring revenue this month alone.",
    name: 'Dr. Sarah Lewis',
    role: 'Operations Director, ComfortAir Pros',
  },
  {
    quote: "They automated our post-job review process and we went from 3.8 to 4.9 stars on Google right before summer peak. The phone rings non-stop now.",
    name: 'James Kim',
    role: 'Founder, Elite Climate Solutions',
  },
  {
    quote: "The operational overhaul saved our CSRs 20+ hours a week. They finally focus on booking high-ticket installs instead of chasing paperwork.",
    name: 'Rachel Gonzalez',
    role: 'COO, Precision HVAC',
  },
  {
    quote: "We scaled from 5 to 12 trucks without adding a single person to the office. The automation systems they built for our estimators are game-changing.",
    name: 'David Park',
    role: 'CEO, Summit Mechanical Services',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-heading)]">
            What Growing HVAC Owners Say
          </h2>
        </div>
      </div>

      {/* Horizontal scrolling cards */}
      <div className="relative">
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-dark-bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-dark-bg)] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 overflow-x-auto pb-4 px-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[350px] sm:w-[400px] p-6 rounded-2xl bg-white/[0.03] border border-[var(--color-dark-border)] hover:border-[var(--color-cyan)]/30 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 text-[15px]">"{t.quote}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-dark-border)]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-cyan)]/20 to-[var(--color-blue)]/20 flex items-center justify-center border border-[var(--color-dark-border)]">
                  <span className="text-sm font-bold gradient-text">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-[var(--color-text-primary)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

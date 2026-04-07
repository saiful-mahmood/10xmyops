const packages = [
  {
    name: 'Lead-to-Revenue Autopilot',
    price: '$2,500',
    unit: 'one-time',
    desc: 'Full sales pipeline automation — from first touch to closed deal.',
    features: [
      'Lead capture & scoring setup',
      'Automated nurture sequences',
      'CRM integration & pipeline views',
      'Performance reporting dashboard',
    ],
    highlight: false,
  },
  {
    name: 'Cash-Flow Accelerator',
    price: '$2,000',
    unit: 'one-time',
    desc: 'Automated invoicing and collections so you get paid faster.',
    features: [
      'Smart invoice generation',
      'Auto-reminders & follow-ups',
      'Payment gateway integration',
      'Aging receivables dashboard',
    ],
    highlight: true,
  },
  {
    name: 'Reputation Engine',
    price: '$1,500',
    unit: 'one-time',
    desc: 'Hands-free review generation and reputation management system.',
    features: [
      'Automated review requests',
      'Multi-platform distribution',
      'Response drafting assistance',
      'Sentiment tracking dashboard',
    ],
    highlight: false,
  },
  {
    name: 'Ops Retainer',
    price: '$1,200',
    unit: '/month',
    desc: 'Ongoing monitoring, optimization, and new workflow builds each month.',
    features: [
      '24/7 workflow monitoring',
      'Monthly optimization sprints',
      'Priority support & tuning',
      'Quarterly ROI reviews',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-purple)]/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-cyan)]/30 text-[var(--color-cyan)] text-xs font-semibold tracking-widest uppercase mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-4">
            Fixed-price packages.{' '}
            <span className="gradient-text">No surprises.</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Every engagement starts with a free assessment. Pay only when you see the roadmap and agree it makes sense.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((p, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                p.highlight
                  ? 'border-[var(--color-cyan)]/50 bg-gradient-to-b from-[var(--color-cyan)]/5 to-[var(--color-dark-card)] shadow-[0_0_40px_rgba(34,211,238,0.08)]'
                  : 'border-[var(--color-dark-border)] bg-[var(--color-dark-card)] hover:border-[var(--color-cyan)]/30'
              } card-glow`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-blue)] text-[var(--color-dark-bg)] rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-2">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-3xl font-extrabold gradient-text">{p.price}</span>
                <span className="text-sm text-[var(--color-text-muted)]">{p.unit}</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6">{p.desc}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                    <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="rgba(34,211,238,0.1)"/>
                      <path d="M8 12l3 3 5-5" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 block ${
                  p.highlight
                    ? 'btn-gradient text-[var(--color-dark-bg)]'
                    : 'border border-[var(--color-dark-border)] text-[var(--color-text-primary)] hover:border-[var(--color-cyan)]/40 hover:bg-[var(--color-cyan)]/5'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-[var(--color-cyan)]/10 via-[var(--color-blue)]/5 to-transparent rounded-full blur-[80px]" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Booking info */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-cyan)]/30 text-[var(--color-cyan)] text-xs font-semibold tracking-widest uppercase mb-6">
              Free HVAC Audit
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-heading)] mb-4">
              Book Your Free{' '}
              <span className="gradient-text">Operations Audit</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              Stop letting unbooked installs slip through the cracks. See exactly how automation can scale your dispatching and sales.
            </p>

            <div className="space-y-4">
              {[
                'We analyze your FSM & dispatch workflows',
                'Done-for-you automation implementation',
                'Built for Housecall Pro, ServiceTitan & More',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-cyan)]/20 to-[var(--color-blue)]/20 border border-[var(--color-cyan)]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <p className="text-[var(--color-text-primary)] font-medium text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8 rounded-2xl border border-[var(--color-dark-border)] bg-[var(--color-dark-card)] card-glow">
            {submitted ? (
              <div className="text-center py-8 animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-cyan)]/20 to-[var(--color-blue)]/20 border border-[var(--color-cyan)]/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-2">You're on the list!</h3>
                <p className="text-[var(--color-text-secondary)]">We'll be in touch within 24 hours to schedule your free HVAC operations audit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-cyan)]/60 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Work email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-cyan)]/60 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="HVAC Company name"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-cyan)]/60 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="What FSM are you using? (ServiceTitan, HCP, Jobber?)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-cyan)]/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl btn-gradient text-[var(--color-dark-bg)] font-bold cursor-pointer"
                >
                  Claim My Free Audit →
                </button>
                <p className="text-center text-xs text-[var(--color-text-muted)]">No commitment. No credit card. Just a conversation.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

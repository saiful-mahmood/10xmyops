import { useState } from 'react'

const faqs = [
  {
    q: "Do I need to replace my existing tools?",
    a: "No. We integrate with whatever you already use — Google Workspace, QuickBooks, HubSpot, Slack, Shopify, you name it. Our job is to make your current stack work harder, not to sell you new software.",
  },
  {
    q: "How long does setup take?",
    a: "Most projects go live within 5–10 business days depending on complexity. We handle all the heavy lifting — you just approve the plan and give us access to the relevant accounts.",
  },
  {
    q: "Do I need any technical skills?",
    a: "Not at all. We build everything for non-technical operators. You'll get dashboards and alerts, not code. If something needs adjusting, we do it — that's what we're here for.",
  },
  {
    q: "What if my business is too small for this?",
    a: "If you're doing over $250K in revenue and have at least one operational pain point that eats up your week, you're exactly who we built this for. Our smallest clients see ROI within the first month.",
  },
  {
    q: "What happens after the initial build?",
    a: "You can operate independently — everything we build is yours to keep. Most clients choose our Ops Retainer for ongoing monitoring, optimization, and new workflow builds each month.",
  },
  {
    q: "How do I know this will pay for itself?",
    a: "Every engagement starts with a detailed ROI projection. If we can't show you at least 3x return in 90 days, we'll tell you before you spend a dime. We've never had a client lose money on an engagement.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-cyan)]/30 text-[var(--color-cyan)] text-xs font-semibold tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)]">
            Questions?{' '}
            <span className="gradient-text">Answers.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl border bg-[var(--color-dark-card)] overflow-hidden transition-all duration-300 ${
                open === i
                  ? 'border-[var(--color-cyan)]/30 shadow-[0_0_20px_rgba(34,211,238,0.05)]'
                  : 'border-[var(--color-dark-border)] hover:border-[var(--color-dark-border-hover)]'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="font-semibold font-[family-name:var(--font-heading)] pr-4 text-[var(--color-text-primary)]">{f.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  open === i
                    ? 'bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-blue)] rotate-45'
                    : 'bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)]'
                }`}>
                  <svg
                    className={`w-4 h-4 transition-colors duration-300 ${open === i ? 'text-[var(--color-dark-bg)]' : 'text-[var(--color-cyan)]'}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-[var(--color-text-secondary)] leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

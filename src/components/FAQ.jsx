import { useState } from 'react'

const faqs = [
  {
    q: "Does this integrate with ServiceTitan and Housecall Pro?",
    a: "Yes. We specialize in Field Service Management (FSM) integrations. Whether you use ServiceTitan, Housecall Pro, Jobber, or FieldEdge, our automations map directly to your existing software without disrupting your techs in the field.",
  },
  {
    q: "Will this confuse my dispatchers or technicians?",
    a: "Not at all. In fact, they usually love it. Our automations work purely in the background. Techs will still use their standard mobile app, and dispatchers will just notice that annoying manual tasks (like sending ETA texts or updating accounting status) are happening automatically.",
  },
  {
    q: "Do I need any technical skills?",
    a: "Zero. We are a \"Done-For-You\" partner. Unlike buying a generic software tool where you have to build the workflows yourself, we architect, build, configure, and test everything for you. You get the results without the headache.",
  },
  {
    q: "What if my HVAC business is already too busy?",
    a: "That's exactly when you need us most. We implement these systems specifically to fix the bottlenecks that happen during extreme heat waves or deep freezes. The setup typically requires just a single 45-minute discovery call from your team.",
  },
  {
    q: "What happens during shoulder seasons?",
    a: "Our Service Agreement Engine is built precisely for this. By automatically working your existing customer list to renew maintenance contracts and scheduling tune-ups, we keep your trucks rolling even when the weather is mild.",
  },
  {
    q: "How fast will I see a return on investment?",
    a: "Most of our HVAC partners see a positive ROI within the first 45 days, typically through recapturing lost estimates that weren't followed up on or by eliminating the need to hire a seasonal dispatcher.",
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
            <span className="gradient-text">Operations Answered.</span>
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

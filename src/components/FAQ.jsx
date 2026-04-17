import { useState } from 'react'

const faqs = [
  {
    q: "Which types of trade businesses do you support?",
    a: "We partner with service-based trade businesses across the board—HVAC, roofing, plumbing, electrical, commercial cleaning, landscaping, and general contracting. If you sell B2B or high-ticket residential services and need a steady flow of prospects, we're built for you.",
  },
  {
    q: "How does the automated email outreach work?",
    a: "We manage the full lifecycle. We source and verify decision-maker contact lists in your target market, configure dedicated sending domains with proper warm-up, author personalized email sequences, and iterate on performance weekly. Warm replies land directly in your inbox—ready for you to close.",
  },
  {
    q: "Will this damage my sending reputation?",
    a: "Not at all. We operate from separate sending domains with gradual warm-up protocols, so your primary domain is never exposed. Bounces stay under 1%, and we actively monitor deliverability scores to keep everything clean.",
  },
  {
    q: "Do I need any marketing experience to use this?",
    a: "None. This is a completely done-for-you engagement. We own the strategy, infrastructure, prospecting, copy, and ongoing optimization. Your only job is responding to interested leads.",
  },
  {
    q: "How quickly will I see qualified replies?",
    a: "Most clients start receiving interested responses in the first 7-14 days after launch. By day 30, campaigns are fully optimized and running at peak conversion rates.",
  },
  {
    q: "Why choose this over hiring a marketing person?",
    a: "You get an entire outbound operations team—strategist, copywriter, data engineer, and deliverability specialist—for less than the cost of a single part-time hire. Plus, we bring infrastructure and trade-specific playbooks that an in-house marketer would take months to build.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-32 relative bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] text-slate-900">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${
                open === i
                  ? 'border-blue-300 bg-blue-50/30'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
              >
                <span className="font-bold font-[family-name:var(--font-heading)] pr-4 text-slate-900">{f.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  open === i
                    ? 'bg-blue-600 rotate-45 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  <svg
                    className="w-4 h-4"
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
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

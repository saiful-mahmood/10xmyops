import { useState } from 'react'

const faqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "We work with trade service businesses of all sizes—HVAC, roofing, plumbing, electrical, cleaning, landscaping, and more. If you sell B2B services and need qualified leads, we can help.",
  },
  {
    q: "How does the cold email system work?",
    a: "We handle everything end-to-end. We source and verify lead lists of decision-makers in your target market, set up and warm dedicated sending inboxes, write personalized email sequences, and continuously optimize for deliverability and reply rates. Interested replies go straight to your inbox.",
  },
  {
    q: "Will cold emails hurt my domain reputation?",
    a: "No. We use dedicated sending domains and a careful inbox warming process to protect your primary domain. Safe sending limits, rotation, and deliverability monitoring are all built in.",
  },
  {
    q: "Do I need any technical skills?",
    a: "Zero. This is a fully done-for-you service. We handle strategy, infrastructure, copywriting, lead sourcing, and optimization. You just close the deals that come in.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients start seeing qualified replies within the first 7-14 days of going live. Campaigns typically reach full optimization within 30 days.",
  },
  {
    q: "What makes this different from hiring an in-house marketer?",
    a: "We bring specialized cold email infrastructure, AI-driven personalization, and years of trade-specific outreach experience. You get a full outbound team for a fraction of the cost of one hire—with faster results.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl border bg-[#0f1225] overflow-hidden transition-all duration-300 ${
                open === i
                  ? 'border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.05)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="font-semibold font-[family-name:var(--font-heading)] pr-4 text-white">{f.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  open === i
                    ? 'bg-gradient-to-br from-cyan-400 to-blue-500 rotate-45'
                    : 'bg-[#0b0c15] border border-white/10'
                }`}>
                  <svg
                    className={`w-4 h-4 transition-colors duration-300 ${open === i ? 'text-[#0b0c15]' : 'text-cyan-400'}`}
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
                  <p className="px-5 pb-5 text-gray-400 leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

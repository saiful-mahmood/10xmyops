const testimonials = [
  {
    quote: "2-3 new commercial accounts per month with a high close rate. We're scaling to 8-10 per month now.",
    name: 'Marcus Thompson',
    role: 'Comfort Heating and Cooling',
  },
  {
    quote: "5 walkthroughs and 3 signed contracts in the first week. Cold email actually works when someone knows what they're doing.",
    name: 'Jessica Rivera',
    role: 'Yardie Cleaning LLC',
  },
  {
    quote: "We scaled our outreach effort 300% because it was working so well. The ROI speaks for itself.",
    name: 'James Kim',
    role: 'Line by Line Roofing',
  },
  {
    quote: "They set up everything. Inbox warming, deliverability, lead lists—entirely done for us. We just close the deals.",
    name: 'Rachel Gonzalez',
    role: 'Precision Plumbing Co.',
  },
  {
    quote: "Went from zero outbound to 15+ qualified replies per week. Our pipeline has never looked this full.",
    name: 'David Park',
    role: 'Summit Electrical Services',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-heading)]">
            What Our Customers Are Saying
          </h2>
        </div>
      </div>

      {/* Horizontal scrolling cards */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0b0c15] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0b0c15] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 overflow-x-auto pb-4 px-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[350px] sm:w-[400px] p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-[15px]">"{t.quote}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-white/10">
                  <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

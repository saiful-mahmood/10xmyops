const features = [
  {
    title: 'Fully Managed Execution',
    desc: 'From outreach strategy to inbox infrastructure—we handle your sending domains, warm-up sequences, deliverability monitoring, and ongoing A/B testing so your reputation stays clean.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Laser-Focused Targeting',
    desc: 'We build hyper-specific lead lists by trade vertical, geography, and company size—then cross-verify every contact and test up to 60 email permutations per prospect.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    title: 'AI-Driven Personalization',
    desc: 'Every outbound message is dynamically personalized using AI—adapting tone, subject lines, and CTAs in real time, then routing warm replies directly to your inbox or CRM.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
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
              className="group p-8 rounded-2xl border border-[#2d4470] bg-[#152036] hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-[#2d4470] flex items-center justify-center text-cyan-400 mb-5 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3 text-white">{f.title}</h3>
              <p className="text-[#cbd5e1] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

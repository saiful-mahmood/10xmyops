export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Strategy Call',
      desc: 'A focused 30-minute session where we nail down your ideal customer, target geography, and outreach thesis.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Build & Warm',
      desc: 'We assemble verified lead lists, write your sequences, spin up dedicated inboxes, and complete a full warm-up cycle.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10M18 20V4M6 20v-4"/>
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Launch & Optimize',
      desc: 'Campaigns go live within days. We monitor opens, replies, and conversions—then iterate continuously for peak performance.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1628] via-[#111d32] to-[#0e1628]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/40 text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] tracking-wide uppercase text-white">
            Live in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">3 Steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-24 left-[33%] right-[33%] h-px border-t-2 border-dashed border-[#2d4470]" />

          {steps.map((s, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-[#2d4470] bg-[#152036] hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-[#0e1628]">
                {s.num}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-[#2d4470] flex items-center justify-center text-cyan-400 mb-5 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300">
                {s.icon}
              </div>

              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3 text-white">{s.title}</h3>
              <p className="text-[#cbd5e1] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

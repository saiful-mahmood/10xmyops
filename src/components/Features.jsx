export default function Features() {
  const points = [
    { title: 'High Intent', desc: 'We identify buying signals instead of chasing dead leads.' },
    { title: 'Conversion Ready', desc: 'Every campaign is optimized for high intent, not vanity metrics.' },
    { title: 'Scalable Systems', desc: 'Our systems are built to handle growth without breaking.' },
    { title: 'Data-Driven Decisions', desc: 'We rely on hard data, not guesswork, to drive strategy.' },
    { title: 'Transparent Reporting', desc: 'Real-time dashboards show exactly where your pipeline is.' },
    { title: 'Dedicated Support', desc: 'A dedicated team that feels like an in-house department.' }
  ]

  return (
    <section className="py-24 md:py-32 relative bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="md:pr-10">
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              OUR FOCUS
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] tracking-tight text-slate-900 mb-6 leading-[1.1]">
              We Start With<br/>a Signal.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">Not a List.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Quality over quantity, always. We focus on high-intent leads and optimized systems to ensure sustained growth.
            </p>
          </div>

          <div className="space-y-3">
            {points.map((p, i) => (
              <div key={i} className="flex p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all items-start gap-4">
                 <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-900 text-[15px] mb-1">{p.title}</h3>
                    <p className="text-slate-500 text-sm">{p.desc}</p>
                 </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

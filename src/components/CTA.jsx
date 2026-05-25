export default function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] -z-10" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
          OUR PROMISE
        </span>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-heading)] mb-8 text-slate-900 leading-tight">
          Your Pipeline<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">Shouldn't Depend on Luck.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Book a free strategy session. We'll show you exactly how we can add $1M+ to your pipeline this year. No fluff, just strategy.
        </p>

        <a href="mailto:nus@10xmyops.com" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:opacity-95 transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5">
          Get My Free Audit
        </a>
      </div>
    </section>
  )
}

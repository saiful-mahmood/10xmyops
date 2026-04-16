export default function HeroGTM() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1050] via-[#0e1628] to-[#0e1628] -z-20" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-purple-600/15 via-indigo-600/5 to-transparent -z-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="animate-fade-in-up md:pr-8">
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#152036] border border-[#263a5e]/50">
                <div className="w-5 h-5 rounded-full bg-[#00A4E4] flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span className="text-sm font-semibold text-white">A Thumbtack Partner</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                <span className="text-sm font-semibold text-amber-400">Trusted by 600+ Trade Professionals</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-heading)] leading-[1.15] mb-6">
              Automated Outreach for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Trade Service Businesses
              </span>
            </h1>

            <p className="text-lg text-[#a8b8cf] mb-8 max-w-xl leading-relaxed">
              We run your entire cold email engine from start to finish—finding verified contacts, writing personalized sequences, and putting <strong className="text-white">warm, ready-to-close leads</strong> directly in your inbox.
            </p>

            <a href="#cta" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-base hover:from-blue-400 hover:to-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              Get Started
            </a>
          </div>

          <div className="relative animate-float pt-10 lg:pt-0">
            <div className="w-full aspect-square max-w-[500px] ml-auto relative">
              <div className="absolute inset-0" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <div className="grid grid-cols-2 grid-rows-2 h-full gap-1 bg-white/5 p-1">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center p-4">
                    <span className="text-white/40 font-bold text-xl uppercase tracking-widest text-center">HVAC<br/>Installs</span>
                  </div>
                  <div className="bg-gradient-to-bl from-purple-500/20 to-indigo-600/20 flex items-center justify-center p-4">
                    <span className="text-white/40 font-bold text-xl uppercase tracking-widest text-center">Roofing<br/>Repairs</span>
                  </div>
                  <div className="bg-gradient-to-tr from-amber-500/20 to-orange-600/20 flex items-center justify-center p-4">
                    <span className="text-white/40 font-bold text-xl uppercase tracking-widest text-center">Plumbing<br/>Services</span>
                  </div>
                  <div className="bg-gradient-to-tl from-emerald-500/20 to-teal-600/20 flex items-center justify-center p-4">
                    <span className="text-white/40 font-bold text-xl uppercase tracking-widest text-center">Electrical<br/>Contracting</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

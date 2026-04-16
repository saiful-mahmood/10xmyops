export default function HeroAI() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0e1628] -z-20" />
      <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-blue-900/15 via-cyan-900/5 to-transparent -z-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative animate-float order-2 lg:order-1 pt-10 lg:pt-0">
            <div className="w-full aspect-square max-w-[500px] mr-auto relative">
              <div className="absolute inset-0" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <div className="grid grid-cols-2 grid-rows-2 h-full gap-1 bg-white/5 p-1">
                  <div className="bg-[#152036] flex items-center justify-center p-4">
                    <span className="text-white/30 font-bold text-xl uppercase tracking-widest text-center">Banking<br/>&amp; Finance</span>
                  </div>
                  <div className="bg-[#1a2844] flex items-center justify-center p-4">
                    <span className="text-white/30 font-bold text-xl uppercase tracking-widest text-center">Healthcare<br/>Systems</span>
                  </div>
                  <div className="bg-[#1a2844] flex items-center justify-center p-4">
                    <span className="text-white/30 font-bold text-xl uppercase tracking-widest text-center">Oil<br/>&amp; Gas</span>
                  </div>
                  <div className="bg-[#152036] flex items-center justify-center p-4">
                    <span className="text-white/30 font-bold text-xl uppercase tracking-widest text-center">Public<br/>Sector</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          <div className="animate-fade-in-up lg:pl-8 order-1 lg:order-2">
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#152036] border border-[#263a5e]/50">
                <span className="text-sm font-semibold text-white">Certified Government Contractor</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-sm font-semibold text-blue-400">Deployed Across 30+ Organizations</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-heading)] leading-[1.15] mb-6 text-white">
              Enterprise AI That Transforms Operations
            </h1>

            <p className="text-lg text-[#a8b8cf] mb-8 max-w-xl leading-relaxed">
              Bespoke AI strategy, design, and deployment to modernize your workflows and unlock measurable efficiency gains.
            </p>

            <a href="#cta" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-indigo-600 text-white font-bold text-base hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)]">
              Get Started
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

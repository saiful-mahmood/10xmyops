export default function HeroAI() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-50/50 via-white to-white -z-20" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative animate-float order-2 lg:order-1 pt-10 lg:pt-0">
            <div className="w-full aspect-square max-w-[500px] mr-auto relative">
              <div className="absolute inset-0 shadow-2xl rounded-2xl overflow-hidden border border-gray-100" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <div className="grid grid-cols-2 grid-rows-2 h-full gap-1 bg-gray-100 p-1">
                  <div className="bg-white flex items-center justify-center p-4">
                    <span className="text-slate-900/60 font-bold text-xl uppercase tracking-widest text-center">Banking<br/>&amp; Finance</span>
                  </div>
                  <div className="bg-slate-50 flex items-center justify-center p-4">
                    <span className="text-slate-900/60 font-bold text-xl uppercase tracking-widest text-center">Healthcare<br/>Systems</span>
                  </div>
                  <div className="bg-slate-50 flex items-center justify-center p-4">
                    <span className="text-slate-900/60 font-bold text-xl uppercase tracking-widest text-center">Oil<br/>&amp; Gas</span>
                  </div>
                  <div className="bg-white flex items-center justify-center p-4">
                    <span className="text-slate-900/60 font-bold text-xl uppercase tracking-widest text-center">Public<br/>Sector</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-10 bg-gradient-to-r from-indigo-100/50 via-blue-100/50 to-purple-100/50 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          <div className="animate-fade-in-up lg:pl-8 order-1 lg:order-2">
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm">
                <span className="text-sm font-semibold text-slate-900">Certified Government Contractor</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 shadow-sm">
                <span className="text-sm font-semibold">Deployed Across 30+ Organizations</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] leading-[1.15] mb-6 text-slate-900">
              Enterprise AI That Transforms Operations
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Bespoke AI strategy, design, and deployment to modernize your workflows and unlock measurable efficiency gains.
            </p>

            <a href="#cta" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-indigo-600 text-white font-bold text-base hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20">
              Get Started
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

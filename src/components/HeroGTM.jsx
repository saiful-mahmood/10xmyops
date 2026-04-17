export default function HeroGTM() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white">
      {/* Subtle light background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-50/30 to-transparent -z-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="animate-fade-in-up md:pr-8">
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-[#00A4E4] flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span className="text-sm font-semibold text-blue-900">A Thumbtack Partner</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 shadow-sm text-amber-900">
                <span className="text-sm font-semibold">Trusted by 600+ Trade Professionals</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] leading-[1.15] mb-6 text-slate-900">
              Lead Gen Automation for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
                Trade Service Businesses
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              We run your entire cold email engine from start to finish—finding verified contacts, writing personalized sequences, and putting <strong className="text-blue-900">warm, ready-to-close leads</strong> directly in your inbox.
            </p>

            <a href="#cta" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-base hover:opacity-95 transition-all shadow-xl shadow-blue-500/20">
              Get Started
            </a>
          </div>

          <div className="relative animate-float pt-10 lg:pt-0">
            <div className="w-full aspect-square max-w-[500px] ml-auto relative">
              <div className="absolute inset-0 shadow-2xl rounded-2xl overflow-hidden border border-gray-100" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <div className="grid grid-cols-2 grid-rows-2 h-full gap-1 bg-gray-50 p-1">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center p-4">
                    <span className="text-blue-900/40 font-bold text-xl uppercase tracking-widest text-center">HVAC<br/>Installs</span>
                  </div>
                  <div className="bg-gradient-to-bl from-purple-500/10 to-indigo-600/10 flex items-center justify-center p-4">
                    <span className="text-indigo-900/40 font-bold text-xl uppercase tracking-widest text-center">Roofing<br/>Repairs</span>
                  </div>
                  <div className="bg-gradient-to-tr from-amber-500/10 to-orange-600/10 flex items-center justify-center p-4">
                    <span className="text-amber-900/40 font-bold text-xl uppercase tracking-widest text-center">Plumbing<br/>Services</span>
                  </div>
                  <div className="bg-gradient-to-tl from-emerald-500/10 to-teal-600/10 flex items-center justify-center p-4">
                    <span className="text-emerald-900/40 font-bold text-xl uppercase tracking-widest text-center">Electrical<br/>Contracting</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-10 bg-gradient-to-r from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default function HeroGTM() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white text-center">
      {/* Subtle light background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-50/30 to-transparent -z-10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 w-full animate-fade-in-up">
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-[0.15em] uppercase shadow-sm">
            REVENUE-FOCUSED GROWTH PARTNER
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold font-[family-name:var(--font-heading)] leading-[1.1] mb-6 text-slate-900 tracking-tight">
          Stop Waiting.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            Start Growing.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          We scale service-based businesses with Revenue-as-a-Service (RaaS) frameworks, focusing on paid media, SEO, automation, and operational efficiency.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a href="mailto:nus@10xmyops.com" className="inline-flex items-center justify-center min-w-[200px] px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-base hover:opacity-95 transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5">
            Free action plan
          </a>
          <a href="#how-it-works" className="inline-flex items-center justify-center min-w-[200px] px-8 py-4 rounded-full border-2 border-slate-200 bg-white text-slate-700 font-bold text-base hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5">
            See what we do
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-200">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">10x</span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold text-center max-w-[120px]">Return on ad spend</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">3-5x</span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold text-center max-w-[140px]">Increase in conversion rates</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">8</span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold text-center max-w-[140px]">Hours saved per week per employee</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">100%</span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold text-center max-w-[120px]">Guarantee on performance</span>
          </div>
        </div>

      </div>
    </section>
  )
}

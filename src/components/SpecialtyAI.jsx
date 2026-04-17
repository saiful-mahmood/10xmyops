export default function SpecialtyAI() {
  return (
    <section className="py-24 relative bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/50 blur-[100px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">
              Our Specialty:<br/>
              <span className="text-indigo-600">Conversational AI Agents</span>
            </h2>
            <p className="text-slate-700 text-lg mb-6 leading-relaxed">
              We build voice and text AI agents that field customer inquiries around the clock—qualifying leads, booking appointments, and resolving routine requests without human involvement.
            </p>
            <p className="text-slate-500 leading-relaxed font-medium">
              Under the hood, our platforms combine intent classification, real-time knowledge retrieval, and deterministic decision logic—all wrapped in enterprise-grade security and full audit trails.
            </p>
            <div className="mt-10">
              <a href="#cta" className="px-8 py-3 rounded border-2 border-indigo-600 text-indigo-600 font-bold hover:bg-indigo-600 hover:text-white transition-all shadow-lg shadow-indigo-500/10">
                Learn More
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-2xl p-8 bg-slate-50">
              <div className="flex flex-col gap-5">
                {/* Visual Chat Mockup */}
                <div className="flex gap-4 p-4 rounded-xl bg-white shadow-sm w-4/5 border border-gray-50">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0" />
                  <div className="space-y-2 w-full">
                    <div className="h-2.5 w-24 bg-gray-200 rounded"></div>
                    <div className="h-2.5 w-full bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-indigo-600 text-white w-4/5 self-end shadow-md border border-indigo-500/20">
                  <div className="space-y-2 w-full">
                    <div className="h-2.5 w-28 bg-white/20 rounded ml-auto"></div>
                    <div className="h-2.5 w-full bg-white/30 rounded ml-auto"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0" />
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-white shadow-sm w-4/5 border border-gray-50">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0" />
                  <div className="space-y-2 w-full">
                    <div className="h-2.5 w-32 bg-gray-200 rounded"></div>
                    <div className="h-2.5 w-48 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

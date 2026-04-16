export default function SpecialtyAI() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-[#111d32] to-[#17152e] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-900/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
              Our Specialty:<br/>
              <span className="text-indigo-400">Conversational AI Agents</span>
            </h2>
            <p className="text-[#a8b8cf] text-lg mb-6 leading-relaxed">
              We build voice and text AI agents that field customer inquiries around the clock—qualifying leads, booking appointments, and resolving routine requests without human involvement.
            </p>
            <p className="text-[#7b8fad] leading-relaxed">
              Under the hood, our platforms combine intent classification, real-time knowledge retrieval, and deterministic decision logic—all wrapped in enterprise-grade security and full audit trails.
            </p>
            <div className="mt-10">
              <a href="#cta" className="px-8 py-3 rounded border border-indigo-500 text-indigo-400 font-bold hover:bg-indigo-500 hover:text-white transition-colors">
                Learn More
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-[#263a5e]/50 shadow-2xl p-6 bg-[#0e1628]">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 p-4 rounded-lg bg-white/5 w-4/5">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 shrink-0" />
                  <div>
                    <div className="h-2 w-32 bg-[#263a5e] rounded mb-2"></div>
                    <div className="h-2 w-48 bg-[#1a2844] rounded"></div>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-indigo-600/10 w-4/5 self-end border border-indigo-500/20">
                  <div className="w-full">
                    <div className="h-2 w-24 bg-indigo-400 rounded mb-2 ml-auto"></div>
                    <div className="h-2 w-40 bg-indigo-900 rounded mb-2 ml-auto"></div>
                    <div className="h-2 w-32 bg-indigo-900 rounded ml-auto"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-indigo-600 shrink-0" />
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-white/5 w-4/5">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 shrink-0" />
                  <div>
                    <div className="h-2 w-48 bg-[#263a5e] rounded mb-2"></div>
                    <div className="h-2 w-32 bg-[#1a2844] rounded"></div>
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

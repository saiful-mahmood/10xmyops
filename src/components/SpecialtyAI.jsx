export default function SpecialtyAI() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-[#0f1225] to-[#15122b] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-900/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
              Our Specialty:<br/>
              <span className="text-indigo-400">Conversational AI Agents</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We deliver fully customizable conversational AI agents for voice and text designed specifically for the trades. Prevent lost revenue from missed calls while your dispatchers are tied up.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We build secure, end-to-end AI platforms that handle intent detection (e.g. \"My AC is blowing warm air\"), knowledge retrieval from your price books, and decision logic with enterprise-grade privacy and auditability.
            </p>
            <div className="mt-10">
              <a href="#cta" className="px-8 py-3 rounded border border-indigo-500 text-indigo-400 font-bold hover:bg-indigo-500 hover:text-white transition-colors">
                Learn More
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl p-6 bg-[#0a0c16]">
              {/* Fake chat interface */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 p-4 rounded-lg bg-white/5 w-4/5">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 shrink-0" />
                  <div>
                    <div className="h-2 w-32 bg-gray-600 rounded mb-2"></div>
                    <div className="h-2 w-48 bg-gray-700 rounded"></div>
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
                    <div className="h-2 w-48 bg-gray-600 rounded mb-2"></div>
                    <div className="h-2 w-32 bg-gray-700 rounded"></div>
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

export default function ProductGTM() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0b0c15]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded bg-[#1a1c2e] border border-white/10 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
            Lead Generation
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Lead Gen Product, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Prospex</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A done-for-you cold email system that finds verified decision-makers, delivers personalized emails, and generates replies—so you can focus on closing.
          </p>
        </div>

        {/* Dashboard visual */}
        <div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#0f1225] p-2 shadow-2xl overflow-hidden">
          <div className="rounded-lg bg-[#1a1c2e] p-6 border border-white/5">
            <div className="flex border-b border-white/10 pb-4 mb-6">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Emails Sent', val: '12,842', trend: '+18%' },
                { label: 'Reply Rate', val: '4.8%', trend: '+0.6%' },
                { label: 'Email Bounces', val: '0.3%', trend: '-0.1%' },
                { label: 'Interested Reply Rate', val: '62%', trend: '+5%' }
              ].map((m, i) => (
                <div key={i} className="p-4 bg-[#0f1225] rounded-xl border border-white/5">
                  <p className="text-xs text-gray-500 mb-2">{m.label}</p>
                  <div className="flex items-end justify-between">
                    <p className="text-2xl font-bold text-white">{m.val}</p>
                    <p className="text-xs text-emerald-400">{m.trend}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-48 bg-[#0f1225] rounded-xl border border-white/5 flex items-end justify-between p-4 gap-2">
              {[40,30,50,45,60,80,65,90,75,85,95,90,80,95,100].map((h,i) => (
                <div key={i} className="w-full bg-blue-500/50 rounded-t-sm transition-all hover:bg-cyan-400" style={{height: `${h}%`}}></div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

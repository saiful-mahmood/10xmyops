export default function ProductGTM() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
            Outbound Engine
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">Our Outreach Platform, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">OpsFlow</span></h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            An end-to-end cold email engine that identifies verified commercial contacts, delivers tailored outreach at scale, and funnels interested replies straight to you.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-xl border border-gray-200 bg-white p-2 shadow-2xl overflow-hidden">
          <div className="rounded-lg bg-slate-50 p-6 border border-gray-100">
            <div className="flex border-b border-gray-200 pb-4 mb-6">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Sequences Active', val: '12,842', trend: '+18%' },
                { label: 'Open Rate', val: '64%', trend: '+3.2%' },
                { label: 'Bounce Rate', val: '0.3%', trend: '-0.1%' },
                { label: 'Interested Replies', val: '62%', trend: '+5%' }
              ].map((m, i) => (
                <div key={i} className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-xs text-slate-500 mb-2">{m.label}</p>
                  <div className="flex items-end justify-between">
                    <p className="text-2xl font-bold text-slate-900">{m.val}</p>
                    <p className="text-xs text-emerald-600 font-bold">{m.trend}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-48 bg-white rounded-xl border border-gray-200 shadow-inner flex items-end justify-between p-4 gap-2">
              {[40,30,50,45,60,80,65,90,75,85,95,90,80,95,100].map((h,i) => (
                <div key={i} className="w-full bg-blue-100 rounded-t-sm transition-all hover:bg-blue-300" style={{height: `${h}%`}}></div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

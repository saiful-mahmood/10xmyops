export default function ProductGTM() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
            Intelligent Outreach
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">Your Lead Generation Command Center, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">OpsFlow</span></h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A centralized platform to monitor campaigns, manage replies, and track your trade business growth in real-time.
          </p>
        </div>

        {/* Dashboard Mockup - Professional SaaS Style */}
        <div className="relative max-w-6xl mx-auto rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden flex h-[500px] md:h-[600px]">
          
          {/* Sidebar */}
          <div className="w-16 md:w-64 bg-slate-50 border-r border-gray-200 flex flex-col pt-6">
            <div className="px-4 mb-8 hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <span className="font-bold text-slate-900">OpsFlow</span>
              </div>
            </div>

            <nav className="space-y-1 px-2">
              {[
                { name: 'Campaigns', icon: <path d="M12 2v20m-9-9h18"/>, active: true },
                { name: 'Inbox', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, badge: '5' },
                { name: 'Accounts', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
                { name: 'Analytics', icon: <><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></> },
                { name: 'Settings', icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></> },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    item.active ? 'bg-white text-blue-700 shadow-sm border border-gray-100' : 'text-slate-500 hover:bg-gray-200'
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                  <span className="text-sm font-semibold hidden md:block">{item.name}</span>
                  {item.badge && <span className="ml-auto bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded hidden md:block">{item.badge}</span>}
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white flex flex-col">
            {/* Top Header */}
            <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6">
              <h3 className="font-bold text-slate-900">Commercial Outreach - Tristate Area</h3>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-slate-200" />)}
                </div>
                <button className="px-3 py-1.5 text-xs font-bold border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Manage Access</button>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Total Emails', val: '8,421', trend: '+12%' },
                  { label: 'Qualified Leads', val: '312', trend: '+18%' },
                  { label: 'Reply Rate', val: '5.8%', trend: '+0.4%' },
                  { label: 'Interest Rate', val: '14.2%', trend: '+2.1%' },
                ].map((m, i) => (
                  <div key={i} className="p-4 rounded-xl border border-gray-100 bg-slate-50/50 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">{m.label}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-xl font-extrabold text-slate-900">{m.val}</p>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">{m.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-bold text-slate-900">Outreach Volume vs Interested Replies</p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      <span className="text-[10px] font-bold text-slate-500">Sent</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      <span className="text-[10px] font-bold text-slate-500">Interested</span>
                    </div>
                  </div>
                </div>
                <div className="h-40 md:h-56 bg-slate-50/30 rounded-xl border border-dashed border-gray-200 flex items-end justify-between p-4 gap-2">
                  {[30, 45, 35, 60, 50, 80, 70, 95, 85, 100, 90, 80, 75, 85, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-1 group relative">
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                         {h * 10} emails
                      </div>
                      {/* Bars */}
                      <div className="w-full bg-cyan-400/40 rounded-t-sm" style={{ height: `${h * 0.4}%` }}></div>
                      <div className="w-full bg-blue-600 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity Table */}
              <div className="rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-slate-50">
                    <tr>
                      {['Prospect', 'Company', 'Status', 'Score'].map(h => (
                        <th key={h} className="text-left py-3 px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { p: 'David Miller', c: 'Miller HVAC Solutions', s: 'Replied', sc: 'A+' },
                      { p: 'Sarah Johnson', c: 'Tri-State Roofing', s: 'Interested', sc: 'A' },
                      { p: 'Michael Brown', c: 'Precision Plumbing', s: 'Follow-up', sc: 'B+' },
                    ].map((r, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 text-xs font-bold text-slate-900">{r.p}</td>
                        <td className="py-3 px-4 text-xs text-slate-600">{r.c}</td>
                        <td className="py-3 px-4">
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                            r.s === 'Interested' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                          }`}>{r.s}</span>
                        </td>
                        <td className="py-3 px-4 text-xs font-bold text-blue-600">{r.sc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

import { useState } from 'react'

const trades = ['Commercial Cleaning', 'HVAC', 'Roofing', 'Plumbing', 'Electrical', 'Landscaping', 'General Contracting']
const jobValues = [
  { label: '<$2,500', value: 1250 },
  { label: '$2,500 - $5,000', value: 3750 },
  { label: '$5,000 - $10,000', value: 7500 },
  { label: '$10,000 - $25,000', value: 17500 },
  { label: '$25,000+', value: 30000 },
]
const timeframes = [
  { label: '3 months', value: 3 },
  { label: '6 months', value: 6 },
  { label: '9 months', value: 9 },
  { label: '12 months', value: 12 },
]
const monthlyCloses = [
  { label: '1 close', value: 1 },
  { label: '2 closes', value: 2 },
  { label: '3 closes', value: 3 },
  { label: '4 closes', value: 4 },
  { label: '5+ closes', value: 5 },
]

export default function Calculator() {
  const [trade, setTrade] = useState('')
  const [jobVal, setJobVal] = useState('')
  const [timeframe, setTimeframe] = useState('')
  const [closes, setCloses] = useState('')

  const calcResults = () => {
    if (!jobVal || !timeframe || !closes) return null
    const jv = jobValues.find(j => j.label === jobVal)?.value || 0
    const tf = timeframes.find(t => t.label === timeframe)?.value || 0
    const cl = monthlyCloses.find(m => m.label === closes)?.value || 0
    const revenue = jv * cl * tf
    const cost = 500 * tf
    const roi = Math.round(revenue / cost)
    return { revenue: revenue.toLocaleString(), roi: `${roi}x` }
  }
  const result = calcResults()

  const selectClass = "w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer text-sm"

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-[family-name:var(--font-heading)] text-slate-900">
              Revenue Impact Calculator
            </h2>
          </div>
          <p className="text-slate-600">Model the revenue potential of automated outreach for your specific trade and deal size.</p>
        </div>

        <div className="p-8 rounded-2xl border border-gray-200 bg-slate-50 shadow-sm">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Your Trade</label>
              <select value={trade} onChange={e => setTrade(e.target.value)} className={selectClass}>
                <option value="">Select</option>
                {trades.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Avg. Job Value</label>
              <select value={jobVal} onChange={e => setJobVal(e.target.value)} className={selectClass}>
                <option value="">Select</option>
                {jobValues.map(v => <option key={v.label} value={v.label}>{v.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Timeframe</label>
              <select value={timeframe} onChange={e => setTimeframe(e.target.value)} className={selectClass}>
                <option value="">Select</option>
                {timeframes.map(t => <option key={t.label} value={t.label}>{t.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Closes</label>
              <select value={closes} onChange={e => setCloses(e.target.value)} className={selectClass}>
                <option value="">Select</option>
                {monthlyCloses.map(c => <option key={c.label} value={c.label}>{c.label}</option>)}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm text-center">
              <p className="text-sm text-slate-500 mb-2">Revenue Uplift</p>
              <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
                {result ? `$${result.revenue}` : '$—'}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm text-center">
              <p className="text-sm text-slate-500 mb-2">Your Return</p>
              <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
                {result ? result.roi : '—'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

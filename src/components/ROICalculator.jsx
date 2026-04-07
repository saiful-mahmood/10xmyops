import { useState } from 'react'

const trades = ['Professional Services', 'E-commerce', 'Healthcare', 'Logistics', 'Home Services']
const jobValues = ['$1,000', '$2,500', '$5,000', '$10,000', '$25,000']
const timeframes = ['3 months', '6 months', '12 months']
const closes = ['2', '5', '10', '15', '20']

export default function ROICalculator() {
  const [trade, setTrade] = useState('')
  const [jobValue, setJobValue] = useState('')
  const [timeframe, setTimeframe] = useState('')
  const [monthlyCloses, setMonthlyCloses] = useState('')

  const calcROI = () => {
    if (!jobValue || !timeframe || !monthlyCloses) return null
    const jv = parseInt(jobValue.replace(/[$,]/g, ''))
    const months = parseInt(timeframe)
    const mc = parseInt(monthlyCloses)
    const revenue = jv * mc * months
    const cost = 2000
    const roi = ((revenue - cost) / cost * 100).toFixed(0)
    return { revenue: revenue.toLocaleString(), roi }
  }

  const result = calcROI()

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark-bg)] via-[var(--color-dark-surface)] to-[var(--color-dark-bg)]" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-[family-name:var(--font-heading)]">
              ROI Calculator
            </h2>
          </div>
        </div>

        <div className="p-8 rounded-2xl border border-[var(--color-dark-border)] bg-[var(--color-dark-card)] card-glow">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Your Industry</label>
              <select
                value={trade}
                onChange={e => setTrade(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-cyan)]/60 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select</option>
                {trades.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Avg. Job Value</label>
              <select
                value={jobValue}
                onChange={e => setJobValue(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-cyan)]/60 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select</option>
                {jobValues.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Timeframe</label>
              <select
                value={timeframe}
                onChange={e => setTimeframe(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-cyan)]/60 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select</option>
                {timeframes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Monthly Closes</label>
              <select
                value={monthlyCloses}
                onChange={e => setMonthlyCloses(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-cyan)]/60 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select</option>
                {closes.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-center">
              <p className="text-sm text-[var(--color-text-muted)] mb-2">Revenue Uplift</p>
              <p className="text-3xl font-extrabold gradient-text">
                {result ? `$${result.revenue}` : '$—'}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-center">
              <p className="text-sm text-[var(--color-text-muted)] mb-2">Your Return</p>
              <p className="text-3xl font-extrabold gradient-text">
                {result ? `${result.roi}%` : '—'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

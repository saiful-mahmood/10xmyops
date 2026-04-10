import { useState } from 'react'

const serviceTypes = ['Residential Install', 'Commercial HVAC', 'Service/Repair Only', 'Plumbing & HVAC']
const jobValues = ['$500 (Service)', '$3,500 (Mixed)', '$8,500 (Install Focus)', '$15,000+ (Commercial)']
const lostLeads = ['10 leads', '25 leads', '50 leads', '100+ leads']
const recaptureRate = ['10%', '15%', '20%', '25%']

export default function ROICalculator() {
  const [serviceType, setServiceType] = useState('')
  const [jobValue, setJobValue] = useState('')
  const [missedLeads, setMissedLeads] = useState('')
  const [recapture, setRecapture] = useState('15%') // Default expected

  const calcROI = () => {
    if (!jobValue || !missedLeads || !recapture) return null
    const jv = parseInt(jobValue.replace(/[^0-9]/g, ''))
    const ml = parseInt(missedLeads.replace(/[^0-9]/g, ''))
    const rr = parseInt(recapture.replace('%', '')) / 100
    
    // Revenue from recaptured leads per month
    const revenue = Math.round(jv * ml * rr)
    const cost = 2500 // Cost of Estimate-to-close system
    
    // ROI over 3 months
    const totalRev3Months = revenue * 3
    const roi = (((totalRev3Months - cost) / cost) * 100).toFixed(0)
    
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
              Lost-Lead Recapture Calculator
            </h2>
          </div>
          <p className="text-[var(--color-text-secondary)]">See how much revenue automated estimate follow-ups will add to your bottom line every month.</p>
        </div>

        <div className="p-8 rounded-2xl border border-[var(--color-dark-border)] bg-[var(--color-dark-card)] card-glow">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Service Type</label>
              <select
                value={serviceType}
                onChange={e => setServiceType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-cyan)]/60 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select</option>
                {serviceTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Avg. Ticket Size</label>
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
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Unbooked Estimates (Mo)</label>
              <select
                value={missedLeads}
                onChange={e => setMissedLeads(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-cyan)]/60 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select</option>
                {lostLeads.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Expected Recapture</label>
              <select
                value={recapture}
                onChange={e => setRecapture(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-cyan)]/60 transition-colors appearance-none cursor-pointer"
              >
                {recaptureRate.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-center">
              <p className="text-sm text-[var(--color-text-muted)] mb-2">Added Monthly Revenue</p>
              <p className="text-3xl font-extrabold gradient-text">
                {result ? `+$${result.revenue}` : '$—'}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] text-center">
              <p className="text-sm text-[var(--color-text-muted)] mb-2">System ROI (90 Days)</p>
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

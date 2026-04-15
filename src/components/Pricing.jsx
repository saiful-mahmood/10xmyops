import { useState } from 'react'

const plans = {
  commercial: {
    name: 'Commercial Plan',
    price: '$500',
    period: '/month',
    fee: '+ one-time $75 onboarding fee',
    features: [
      'Multi-campaign outreach (up to 3 active at once)',
      'We find and target your ideal local clients',
      'Done-for-you email deliverability & inbox management',
      'Built-in CRM with automated follow-up sequences',
    ],
  },
  residential: {
    name: 'Residential Plan',
    price: '$500',
    period: '/month',
    fee: '+ one-time $75 onboarding fee',
    features: [
      'Multi-campaign outreach (up to 3 active at once)',
      'We find and target your ideal local clients',
      'Done-for-you email deliverability & inbox management',
      'Built-in CRM with automated follow-up sequences',
    ],
  },
}

export default function Pricing() {
  const [tab, setTab] = useState('commercial')
  const plan = plans[tab]

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Book a Call */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-heading)] mb-8">
              Book a Call To Learn More
            </h2>
            <div className="rounded-2xl border border-white/10 bg-white p-6 text-gray-900">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Powered by Calendly</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">10xOps AI Demo</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                30 min
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                Web conferencing details provided upon confirmation.
              </div>
              <p className="text-gray-600 text-sm mb-6">
                See how AI can consistently deliver qualified commercial and residential leads each month.
              </p>
              <a 
                href="#cta" 
                className="block w-full text-center py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold hover:from-blue-400 hover:to-cyan-300 transition-all"
              >
                Schedule a Demo
              </a>
            </div>
          </div>

          {/* Right: Pricing */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-heading)] mb-8">
              Simple, Transparent Pricing
            </h2>

            {/* Tab toggle */}
            <div className="flex mb-6 bg-[#1a1c2e] rounded-lg p-1 max-w-xs border border-white/5">
              <button
                onClick={() => setTab('commercial')}
                className={`flex-1 px-4 py-2.5 rounded-md text-sm font-semibold transition-all ${
                  tab === 'commercial' ? 'bg-[#0f1225] text-white shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Commercial
              </button>
              <button
                onClick={() => setTab('residential')}
                className={`flex-1 px-4 py-2.5 rounded-md text-sm font-semibold transition-all ${
                  tab === 'residential' ? 'bg-[#0f1225] text-white shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Residential
              </button>
            </div>

            {/* Plan card */}
            <div className="rounded-2xl border border-white/10 bg-[#0f1225] p-8">
              <p className="text-sm text-gray-400 mb-1">{plan.name}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                <span className="text-gray-400 text-lg">{plan.period}</span>
              </div>
              <p className="text-sm text-cyan-400 mb-8">{plan.fee}</p>

              <ul className="space-y-4">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="mt-0.5 flex-shrink-0 text-cyan-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#cta" className="mt-8 block w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold hover:from-blue-400 hover:to-cyan-300 transition-all">
                Get Started
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

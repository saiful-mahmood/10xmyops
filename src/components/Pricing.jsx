export default function Pricing() {
  const plans = [
    {
      pill: 'LOCAL SEO',
      title: 'Local Marketing',
      desc: 'Dominate your local service area. We combine website optimization, content creation, & link building.',
      price: '$400/m',
      period: 'starting at',
      timeline: 'Results take 1 to 3 months to start compounding',
      features: [
        'Keyword Targeting & Content Gap Analysis',
        'High-performing on-page & off-page SEO strategy',
        'Local SEO (GBP) Management',
        'Citation Building & Management',
        'Monthly Content (Blogs, copy)',
        'Dedicated Account Manager'
      ],
      highlighted: false
    },
    {
      pill: 'REVENUE GENERATION',
      title: 'SEO + Content + Paid Media',
      desc: 'The ultimate revenue engine. We combine organic and paid traffic to scale your business aggressively.',
      price: '$5K',
      period: 'or more project scoped',
      timeline: 'Typical setup timeline is 3-6 months',
      features: [
        'Advanced CRO & A/B testing',
        'Comprehensive SEO Strategy (Local + National)',
        'Google & Meta Ads Management',
        'Email/SMS Automation Sequences',
        'Retargeting Campaigns',
        'Premium Video Content Creation'
      ],
      highlighted: true
    },
    {
      pill: 'OPS EFFICIENCY',
      title: 'AI Workflows',
      desc: 'Automate your daily operations. We build custom AI and automation tools to save you time and money.',
      price: '$15K',
      period: 'or more per project',
      timeline: 'ROI is measured in hours saved and improved accuracy',
      features: [
        'CRM setup & optimization',
        'Custom AI Agents & Chatbots',
        'Automated Data Entry & Reporting',
        'Workflow automation (Zapier/Make)',
        'Internal Tooling Development',
        'Dedicated Tech Support'
      ],
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] text-slate-900 mb-6 tracking-tight">
            Three Ways We Grow Your Business
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are absolutely ruthlessly focused on driving revenue and margin. All our efforts align with this simple goal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 bg-white shadow-sm hover:shadow-xl ${
                plan.highlighted ? 'border-blue-500 shadow-blue-500/10 shadow-lg' : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div className="inline-flex self-start px-3 py-1 mb-6 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold tracking-[0.15em] uppercase border border-blue-100">
                {plan.pill}
              </div>

              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-3 text-slate-900">{plan.title}</h3>
              <p className="text-sm text-slate-600 mb-6 min-h-[40px] leading-relaxed">{plan.desc}</p>
              
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 mb-8 mt-auto">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-sm font-semibold text-slate-500">{plan.period}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">{plan.timeline}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                    <svg className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-blue-600' : 'text-blue-500'}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#cta" 
                className={`mt-auto block w-full text-center py-3.5 rounded-xl font-bold transition-all ${
                  plan.highlighted 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20 hover:opacity-95'
                  : 'border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

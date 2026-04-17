const sectors = [
  {
    title: 'Banking & Finance',
    items: ['Intelligent Fraud Detection Pipelines', 'AI-Driven Credit Risk Assessment', 'Automated Regulatory Compliance'],
  },
  {
    title: 'Healthcare',
    items: ['Claims Processing Automation', 'Omnichannel Patient Support Platforms', 'Conversational Voice AI Agents'],
  },
  {
    title: 'Oil & Gas',
    items: ['Real-Time Compliance Monitoring', 'Automated Incident Response Workflows', 'Intelligent Document Extraction'],
  },
  {
    title: 'Airlines',
    items: ['Smart Booking & Rebooking Agents', 'Multilingual Passenger Support AI', 'Live Flight Operations Dashboards'],
  },
  {
    title: 'Trades',
    items: ['Outbound Lead Generation Engines', 'Automated Scheduling & Smart Dispatch', 'CRM & Email Workflow Integration'],
  },
  {
    title: 'Public Sector',
    items: ['AI-Powered Dispatch & Routing', 'Citizen Service Request Automation', 'Cross-Agency Data Interoperability'],
  },
]

export default function SectorsAI() {
  return (
    <section className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-slate-900">
          Core Services by Sector
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-indigo-700">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate-600 text-sm font-medium">
                    <span className="text-indigo-500 mt-1 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

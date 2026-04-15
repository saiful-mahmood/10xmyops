const sectors = [
  {
    title: 'Banking & Finance',
    items: ['Fraud Detection Systems', 'Credit Risk Underwriting Agents', 'Regulatory Compliance Automation'],
  },
  {
    title: 'Healthcare',
    items: ['Claims Processing Automation', 'Multi-Channel Support Platforms', 'Voice AI Agents'],
  },
  {
    title: 'Oil & Gas',
    items: ['Regulatory Compliance Monitoring', 'Security Incident Response', 'Intelligent Document Processing'],
  },
  {
    title: 'Airlines',
    items: ['Intelligent Booking Assistants', 'Multilingual Customer Service', 'Real-Time Flight Ops Support'],
  },
  {
    title: 'Trades',
    items: ['AI-Powered Lead Generation', 'Automated Scheduling & Dispatch', 'CRM & Email Integration'],
  },
  {
    title: 'Public Sector',
    items: ['Intelligent Dispatch Systems', 'Citizen Service Automation', 'Inter-Agency Data Integration'],
  },
]

export default function SectorsAI() {
  return (
    <section className="py-24 relative bg-[#0b0c15]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-white">
          Core Services by Sector
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/10 bg-[#0f1225] hover:bg-[#151832] transition-colors">
              <h3 className="text-xl font-bold mb-4 text-indigo-300">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-indigo-400 mt-0.5">•</span>
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

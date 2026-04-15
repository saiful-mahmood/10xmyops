const sectors = [
  {
    title: 'Commercial HVAC',
    desc: 'Automated bidding workflows, maintenance contract parsing, and intelligent dispatch routing for large-scale properties.',
  },
  {
    title: 'Residential Service',
    desc: 'Voice AI agents to book calls 24/7, automated technician routing based on skill-sets, and diagnostic intent detection.',
  },
  {
    title: 'Plumbing & Pipefitting',
    desc: 'Intelligent document processing for parts ordering, multi-channel customer support platforms, and dispatch logic.',
  },
  {
    title: 'Electrical Contractors',
    desc: 'Automated municipal permit processing, regulatory compliance monitoring, and high-ticket estimate follow-ups.',
  },
  {
    title: 'Refrigeration',
    desc: 'IoT alert ingestion and automated emergency dispatch routing, ensuring immediate security and incident response.',
  },
  {
    title: 'Public Sector Trades',
    desc: 'Inter-agency data integration, citizen service reporting automation, and prevailing wage compliance tracking.',
  },
]

export default function SectorsAI() {
  return (
    <section className="py-24 relative bg-[var(--color-dark-bg)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-white">
          Core Services by Sector
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/10 bg-[#0f1225] hover:bg-[#151832] transition-colors">
              <h3 className="text-xl font-bold mb-4 text-indigo-300">{s.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

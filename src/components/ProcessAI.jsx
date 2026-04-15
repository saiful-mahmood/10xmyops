const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We map your business objectives, compliance requirements, and identify high-impact AI opportunities.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We architect conversational and agentic AI systems customized to your operational workflows.',
  },
  {
    num: '03',
    title: 'Implementation',
    desc: 'Seamless integration with your existing systems, launching live with controlled, phased deployments.',
  },
  {
    num: '04',
    title: 'Optimization',
    desc: 'Ongoing governance, model refinement, and scaling your AI infrastructure as your organization grows.',
  },
]

export default function ProcessAI() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-white">
          Our Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px border-t border-white/20" />
          
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-14 h-14 rounded-full bg-indigo-600 border-4 border-[#0f1225] text-white flex items-center justify-center font-bold text-lg mb-6">
                {s.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base pr-0 md:pr-4">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

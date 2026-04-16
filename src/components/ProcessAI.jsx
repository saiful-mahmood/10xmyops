const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We audit your workflows, map your operational bottlenecks, and align on the highest-impact AI opportunities.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We architect AI agents and automation pipelines tailored to your unique data, compliance, and integration requirements.',
  },
  {
    num: '03',
    title: 'Implementation',
    desc: 'We deploy into your live environment with phased rollouts, staff training, and real-time monitoring baked in.',
  },
  {
    num: '04',
    title: 'Optimization',
    desc: 'Continuous model tuning, governance reporting, and infrastructure scaling as your organization evolves.',
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
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px border-t border-[#2d4470]" />
          
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-14 h-14 rounded-full bg-indigo-600 border-4 border-[#0e1628] text-white flex items-center justify-center font-bold text-lg mb-6">
                {s.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-[#cbd5e1] leading-relaxed text-sm md:text-base pr-0 md:pr-4">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

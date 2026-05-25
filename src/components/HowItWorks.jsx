export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Consult & Predict',
      desc: "We begin with understanding where your business is today and where you want it to go. We'll identify bottlenecks and craft a tailored growth strategy.",
    },
    {
      num: '02',
      title: 'Execute & Prove',
      desc: "We hit the ground running with implementation. You'll see weekly reports detailing our actions, what's working, and what needs adjustment.",
    },
    {
      num: '03',
      title: 'Scale & Compound',
      desc: "Once we have a winning system, we double down. We scale ad spend, expand SEO efforts, and deploy more advanced AI tools to maximize ROI.",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-[80px] -z-10" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="md:pr-10">
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              OUR PROCESS
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] tracking-tight text-slate-900 mb-6 leading-tight">
              Up & Running<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">in 3 Steps</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We act as an extension of your team, moving fast and efficiently.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="group relative flex gap-6 p-6 rounded-2xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-x-1"
              >
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300 pt-1">
                  {s.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-2 text-slate-900">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: "10xMyOps completely transformed our revenue engine. We saw a 3x increase in qualified leads within 3 months, and our sales team has never been happier.",
    name: 'Sarah J.',
    role: 'VP of Sales',
  },
  {
    quote: "The AI automation tools they deployed saved our team 20 hours a week. It's like having an extra employee that never sleeps.",
    name: 'Michael T.',
    role: 'Operations Manager',
  },
  {
    quote: "Their SEO strategy generated more traffic in 6 months than we saw in the previous 2 years combined. Highly recommended.",
    name: 'David L.',
    role: 'CEO',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 text-center md:text-left">
        <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
          TESTIMONIALS
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] text-slate-900">
          What Our Clients Say
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md hover:bg-white hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                 {[...Array(5)].map((_, j) => (
                   <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                   </svg>
                 ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-8 flex-grow tracking-wide">"{t.quote}"</p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center border border-blue-200 shadow-sm">
                  <span className="text-sm font-bold text-blue-800">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

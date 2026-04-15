import { useState } from 'react'

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-cyan-400/10 via-blue-500/5 to-transparent rounded-full blur-[80px]" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-heading)] mb-4">
              Book Your Free{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Strategy Call</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              See exactly how automated cold email outreach can fill your pipeline with qualified leads—without lifting a finger.
            </p>

            <div className="space-y-4">
              {[
                'Done-for-you lead sourcing & outreach',
                'Dedicated sending infrastructure',
                'AI-powered personalization at scale',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <p className="text-white font-medium text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0f1225]">
            {submitted ? (
              <div className="text-center py-8 animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-2">You're on the list!</h3>
                <p className="text-gray-400">We'll be in touch within 24 hours to schedule your free strategy call.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0c15] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Work email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0c15] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0c15] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
                />
                <textarea
                  placeholder="What trade are you in? (HVAC, Roofing, Plumbing, etc.)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0c15] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold cursor-pointer hover:from-blue-400 hover:to-cyan-300 transition-all"
                >
                  Get Started →
                </button>
                <p className="text-center text-xs text-gray-500">No commitment. No credit card. Just a conversation.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

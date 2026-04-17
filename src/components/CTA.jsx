import { useState } from 'react'

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)

    try {
      await fetch('https://formsubmit.co/ajax/Nus@10xmyops.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          trade: formData.get('trade'),
          _subject: '🚀 New 10xMyOps Lead Submission (Light Mode)',
        }),
      })
      setSubmitted(true)
    } catch (err) {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"

  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-100/30 rounded-full blur-[80px] -z-10" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-6">
              Let's Talk
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-heading)] mb-4 text-slate-900">
              Book Your Free{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">Strategy Session</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Find out exactly how automated cold email can fill your pipeline with qualified prospects—without adding headcount.
            </p>

            <div className="space-y-4">
              {[
                'Fully managed prospect sourcing & outreach',
                'Dedicated sending infrastructure included',
                'AI-powered message personalization at scale',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <p className="text-slate-700 font-semibold text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-xl">
            {submitted ? (
              <div className="text-center py-8 animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4 scale-110 shadow-sm">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-2 text-slate-900">You're on the list!</h3>
                <p className="text-slate-600">We'll reach out within 24 hours to set up your free strategy session.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" type="text" placeholder="Your name" required className={inputClass} />
                <input name="email" type="email" placeholder="Work email" required className={inputClass} />
                <input name="company" type="text" placeholder="Company name" className={inputClass} />
                <textarea name="trade" placeholder="What trade are you in? (HVAC, Roofing, Plumbing, etc.)" rows={3} className={`${inputClass} resize-none`} />
                
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold cursor-pointer hover:opacity-95 transition-all disabled:opacity-60 shadow-lg shadow-blue-500/20"
                >
                  {loading ? 'Sending...' : 'Get Started →'}
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">No commitment. No credit card. Just a conversation.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

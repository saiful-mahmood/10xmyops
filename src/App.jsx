import Header from './components/Header'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ROICalculator from './components/ROICalculator'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-dark-bg)] text-[var(--color-text-primary)]">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Services />
        <Features />
        <HowItWorks />
        <ROICalculator />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

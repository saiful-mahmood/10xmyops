import Header from './components/Header'
import HeroGTM from './components/HeroGTM'
import Pricing from './components/Pricing'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <Header />
      
      <main>
        <HeroGTM />
        <Pricing />
        <HowItWorks />
        <Features />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

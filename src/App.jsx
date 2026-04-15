import { useState } from 'react'
import Header from './components/Header'
// GTM Components
import HeroGTM from './components/HeroGTM'
import Testimonials from './components/Testimonials'
import ProductGTM from './components/ProductGTM'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Calculator from './components/Calculator'
import Pricing from './components/Pricing'
// AI Components
import HeroAI from './components/HeroAI'
import SectorsAI from './components/SectorsAI'
import ProcessAI from './components/ProcessAI'
import SpecialtyAI from './components/SpecialtyAI'
// Shared Components
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [activeTab, setActiveTab] = useState('gtm')

  return (
    <div className="min-h-screen bg-[#0b0c15] text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        {activeTab === 'gtm' ? (
          <>
            <HeroGTM />
            <Testimonials />
            <ProductGTM />
            <Features />
            <HowItWorks />
            <Calculator />
            <Pricing />
            <FAQ />
            <CTA />
          </>
        ) : (
          <div className="animate-fade-in">
            <HeroAI />
            <SectorsAI />
            <ProcessAI />
            <SpecialtyAI />
            <CTA />
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

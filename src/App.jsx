import { useState } from 'react'
import Header from './components/Header'
import HeroGTM from './components/HeroGTM'
import Testimonials from './components/Testimonials'
import ProductGTM from './components/ProductGTM'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Calculator from './components/Calculator'
import Pricing from './components/Pricing'
import HeroAI from './components/HeroAI'
import SectorsAI from './components/SectorsAI'
import ProcessAI from './components/ProcessAI'
import SpecialtyAI from './components/SpecialtyAI'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [activeTab, setActiveTab] = useState('gtm')

  return (
    <div className="min-h-screen bg-[#0e1628] text-[#f1f5f9]">
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

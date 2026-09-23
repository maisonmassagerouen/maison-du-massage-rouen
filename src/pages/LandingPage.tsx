import { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/HeroSection'
import TrustBar from '../components/sections/TrustBar'
import ServicesSection from '../components/sections/ServicesSection'
import PricingSection from '../components/sections/PricingSection'
import LocalSeoSection from '../components/sections/LocalSeoSection'
import WhyUsSection from '../components/sections/WhyUsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/layout/Footer'
import FloatingCTA from '../components/ui/FloatingCTA'

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal, .reveal-left').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div id="top" className="min-h-screen bg-background">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
        Aller au contenu
      </a>
      <Navbar />
      <main id="contenu">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <PricingSection />
        <LocalSeoSection />
        <WhyUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}

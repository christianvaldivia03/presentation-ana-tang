'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Experience from '@/components/experience'
import Education from '@/components/education'
import WhyChoose from '@/components/why-choose'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import FinalCTA from '@/components/final-cta'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Education />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingButtons />
    </main>
  )
}

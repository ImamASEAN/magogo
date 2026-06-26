'use client'

import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WasteCounter from '@/components/WasteCounter'
import ProductShowcase from '@/components/ProductShowcase'
import DashboardDemo from '@/components/DashboardDemo'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Partners from '@/components/Partners'
import Instagram from '@/components/Instagram'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <WasteCounter />
        <ProductShowcase />
        <DashboardDemo />
        <HowItWorks />
        <Pricing />
        <Partners />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

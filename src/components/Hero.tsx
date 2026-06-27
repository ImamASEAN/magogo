'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Thermometer, Droplets, Activity, Weight } from 'lucide-react'

const floatingCards = [
  { icon: Thermometer, label: 'Temperature', value: '24.5°C', status: 'Optimal', color: '#f97316', delay: 0, className: 'top-[12%] right-[2%] md:top-[18%] md:right-[4%]' },
  { icon: Droplets, label: 'Humidity', value: '72%', status: 'Good', color: '#3b82f6', delay: 0.2, className: 'top-[38%] right-[0%] md:right-[2%]' },
  { icon: Activity, label: 'System Status', value: 'Optimal ✓', status: 'Live', color: '#a8ff3e', delay: 0.4, className: 'bottom-[28%] right-[2%] md:right-[5%]' },
  { icon: Weight, label: 'Biomass', value: '850g', status: '+12% today', color: '#2d7a4f', delay: 0.6, className: 'bottom-[10%] right-[8%] md:right-[12%]' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #dff0d8 0%, #eef5ea 30%, #f4f6f2 60%, #e8eedf 100%)' }}
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-blob absolute w-[600px] h-[600px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(61,189,111,0.35) 0%, transparent 70%)', top: '-100px', left: '-100px' }} />
        <div className="animate-blob animation-delay-2000 absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(168,255,62,0.25) 0%, transparent 70%)', top: '40%', right: '-100px' }} />
        <div className="animate-blob animation-delay-4000 absolute w-[400px] h-[400px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(45,122,79,0.3) 0%, transparent 70%)', bottom: '-100px', left: '30%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            {/* Logo banner */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-banner.png" alt="MagoGo Smart Chamber" className="h-12 w-auto" />
            </motion.div>

            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: 'var(--color-lime)' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>
                IoT · Circular Economy · Climate Tech
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              Transform Organic
              <br />
              <span style={{ color: 'var(--color-emerald-light)' }}>Waste</span> Into
              <br />
              <span className="relative">
                Smart Growth
                <motion.span
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.9 }}
                  className="absolute bottom-1 left-0 right-0 h-1 rounded-full"
                  style={{ background: 'var(--color-lime)', transformOrigin: 'left' }}
                />
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg" style={{ color: 'rgba(26,58,42,0.65)' }}>
              An IoT-powered smart chamber that converts organic waste into valuable biomass through intelligent monitoring and automation.
            </motion.p>

            {/* Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4">
              <a href="#product"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ background: 'var(--color-forest)', color: 'var(--color-lime)', fontFamily: 'Space Grotesk, sans-serif', boxShadow: '0 4px 24px rgba(26,58,42,0.25)' }}>
                Explore Technology
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 glass"
                style={{ color: 'var(--color-forest)', fontFamily: 'Space Grotesk, sans-serif', border: '1.5px solid rgba(45,122,79,0.3)' }}>
                Contact Us
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-8 mt-12 pt-8" style={{ borderTop: '1px solid rgba(45,122,79,0.15)' }}>
              {[{ val: '4 in 1', label: 'Smart Sensors' }, { val: 'Real-time', label: 'ML Analytics' }, { val: '100%', label: 'Automated' }].map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>{s.val}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(26,58,42,0.5)' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — product image */}
          <div className="relative flex justify-center items-center h-[500px] md:h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float relative"
            >
              <div className="absolute inset-0 rounded-3xl blur-3xl scale-90 translate-y-8"
                style={{ background: 'radial-gradient(ellipse, rgba(168,255,62,0.3) 0%, rgba(45,122,79,0.2) 60%, transparent 100%)' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/product-single.png" alt="MagoGo Smart Chamber"
                className="relative z-10 w-72 md:w-[420px] object-contain"
                style={{ filter: 'drop-shadow(0 24px 48px rgba(26,58,42,0.35))' }} />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 h-10 rounded-full blur-2xl"
                style={{ background: 'rgba(168,255,62,0.3)' }} />
            </motion.div>

            {/* Floating cards */}
            {floatingCards.map((card, i) => (
              <motion.div key={card.label}
                initial={{ opacity: 0, scale: 0.7, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + card.delay }}
                className={`absolute glass rounded-2xl px-4 py-3 min-w-[120px] ${i % 2 === 0 ? 'animate-float' : 'animate-float-delay'} ${card.className}`}
                style={{ border: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 8px 32px rgba(26,58,42,0.1)' }}>
                <div className="flex items-center gap-2 mb-1">
                  <card.icon size={13} style={{ color: card.color }} />
                  <span className="text-xs" style={{ color: 'rgba(26,58,42,0.5)', fontFamily: 'Space Mono, monospace' }}>{card.label}</span>
                </div>
                <div className="text-lg font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>{card.value}</div>
                <div className="text-xs mt-0.5 flex items-center gap-1" style={{ color: card.color }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: card.color }} />
                  {card.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(26,58,42,0.4)', fontFamily: 'Space Mono, monospace' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} style={{ color: 'rgba(26,58,42,0.4)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

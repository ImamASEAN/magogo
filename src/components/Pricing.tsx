'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Zap, ArrowRight, Star } from 'lucide-react'

const included = [
  'MagoGo Smart Chamber hardware',
  'Web & mobile monitoring dashboard',
  'Basic analytics & reports',
  'Temperature, humidity, pH, biomass sensors',
  'Automated environmental control',
  'Cloud data logging (1 year)',
  'Setup guide & documentation',
  'Email support',
]

const upgrade = [
  'Advanced ML growth predictions',
  'Multi-unit monitoring (unlimited)',
  'Priority customer support',
  'API access for custom integrations',
  'Historical analytics & export',
  'Early access to new features',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-pad relative overflow-hidden"
      style={{ background: '#f4f6f2' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(168,255,62,0.5), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-emerald-light)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>
              Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
          >
            Simple, transparent pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-md mx-auto"
            style={{ color: 'rgba(26,58,42,0.6)' }}
          >
            Start transforming waste with the Smart Chamber. Upgrade anytime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Main product card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, var(--color-forest), rgba(26,58,42,0.95))',
              border: '1px solid rgba(168,255,62,0.25)',
              boxShadow: '0 20px 60px rgba(26,58,42,0.25)',
            }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(168,255,62,0.15) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 p-8">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{ background: 'rgba(168,255,62,0.15)', border: '1px solid rgba(168,255,62,0.3)' }}
              >
                <Star size={12} style={{ color: 'var(--color-lime)' }} />
                <span className="text-xs font-semibold" style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}>
                  CORE PRODUCT
                </span>
              </div>

              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                MagoGo Smart Chamber
              </h3>
              <p className="text-white/50 text-sm mb-8">
                Complete hardware + software system to start cultivating immediately.
              </p>

              {/* Price */}
              <div className="flex items-end gap-2 mb-8">
                <span className="text-white/50 text-xl font-medium">Rp</span>
                <span
                  className="text-5xl font-bold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-lime)' }}
                >
                  1.800.000
                </span>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {included.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={15} style={{ color: 'var(--color-lime)', flexShrink: 0, marginTop: 1 }} />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="group w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'var(--color-lime)',
                  color: 'var(--color-forest)',
                  fontFamily: 'Space Grotesk, sans-serif',
                  boxShadow: '0 4px 24px rgba(168,255,62,0.35)',
                }}
              >
                Order Now
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Upgrade card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl p-8"
            style={{
              background: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(255,255,255,0.9)',
              boxShadow: '0 8px 40px rgba(26,58,42,0.07)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{
                background: 'rgba(45,122,79,0.1)',
                border: '1px solid rgba(45,122,79,0.2)',
              }}
            >
              <Zap size={12} style={{ color: 'var(--color-emerald)' }} />
              <span className="text-xs font-semibold" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>
                LANGGANAN BULANAN
              </span>
            </div>

            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
            >
              Expert Upgrade
            </h3>
            <p className="text-sm mb-6" style={{ color: 'rgba(26,58,42,0.6)' }}>
              Analitik canggih dan pemantauan multi-unit tak terbatas untuk operator serius.
            </p>

            {/* Price */}
            <div className="flex items-end gap-2 mb-8">
              <span className="text-forest/50 text-xl font-medium">Rp</span>
              <span
                className="text-5xl font-bold"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
              >
                200.000
              </span>
              <span className="text-forest/40 text-sm mb-2">/ bulan</span>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {upgrade.map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={15} style={{ color: 'var(--color-emerald-light)', flexShrink: 0, marginTop: 1 }} />
                  <span className="text-sm" style={{ color: 'rgba(26,58,42,0.7)' }}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'transparent',
                color: 'var(--color-forest)',
                border: '1.5px solid rgba(26,58,42,0.2)',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              Add Expert Upgrade
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Bundle note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 p-5 rounded-2xl glass"
        >
          <p className="text-sm" style={{ color: 'rgba(26,58,42,0.6)' }}>
            Beli Smart Chamber + Expert Upgrade bulan pertama hanya{' '}
            <span className="font-bold" style={{ color: 'var(--color-forest)' }}>Rp 1.900.000</span>
            {' '}•{' '}
            <a href="#contact" className="underline" style={{ color: 'var(--color-emerald)' }}>
              Hubungi kami untuk harga volume / korporat
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

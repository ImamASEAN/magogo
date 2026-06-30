'use client'

import { motion } from 'framer-motion'
import { Thermometer, Cpu, BrainCircuit, CheckCircle2, Droplets, FlaskConical, Scale, Flame, Wind, CloudRain, TrendingUp, LineChart, Calendar } from 'lucide-react'

const cards = [
  {
    icon: Thermometer,
    tag: 'Sensing',
    title: 'Smart Monitoring',
    description: 'Continuous environmental sensing with precision IoT sensors delivering real-time data to the cloud.',
    features: [
      { icon: Thermometer, text: 'Temperature tracking (±0.1°C accuracy)' },
      { icon: Droplets, text: 'Humidity monitoring (0–100% RH)' },
      { icon: FlaskConical, text: 'pH level monitoring' },
      { icon: Scale, text: 'Live biomass weight measurement' },
    ],
    accent: '#3b82f6',
    gradient: 'from-blue-500/10 to-blue-500/5',
  },
  {
    icon: Cpu,
    tag: 'Automation',
    title: 'Automatic Control',
    description: 'Closed-loop environmental automation. The system reacts to sensor data, keeping conditions perfect without any manual input.',
    features: [
      { icon: Flame, text: 'Automated heating system' },
      { icon: Wind, text: 'Intelligent exhaust ventilation' },
      { icon: CloudRain, text: 'Precision mist maker control' },
      { icon: CheckCircle2, text: 'Environmental self-adjustment' },
    ],
    accent: '#f97316',
    gradient: 'from-orange-500/10 to-orange-500/5',
  },
  {
    icon: BrainCircuit,
    tag: 'Intelligence',
    title: 'Machine Learning',
    description: 'Our ML models learn from every cultivation cycle, continuously improving predictions for better yield outcomes.',
    features: [
      { icon: TrendingUp, text: 'Biomass growth prediction' },
      { icon: LineChart, text: 'Harvest time estimation' },
      { icon: Calendar, text: 'Cycle optimization insights' },
      { icon: BrainCircuit, text: 'Anomaly detection & alerts' },
    ],
    accent: '#a8ff3e',
    gradient: 'from-lime-400/10 to-lime-400/5',
  },
]

export default function ProductShowcase() {
  return (
    <section
      id="product"
      className="section-pad relative overflow-hidden"
      style={{ background: '#f4f6f2' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(61,189,111,0.4), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-emerald-light)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>
              Product
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
          >
            Meet MagoGo Smart Chamber
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-xl mx-auto"
            style={{ color: 'rgba(5,65,42,0.6)' }}
          >
            A complete closed-loop bioconversion system. Hardware meets software meets biology.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl p-8 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.8)',
                boxShadow: '0 4px 40px rgba(5,65,42,0.06)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Accent bar */}
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
                style={{ background: card.accent }}
              />

              <div className="relative z-10">
                {/* Tag + icon */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      background: `${card.accent}18`,
                      color: card.accent,
                      fontFamily: 'Space Mono, monospace',
                    }}
                  >
                    {card.tag}
                  </span>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${card.accent}15`,
                      border: `1px solid ${card.accent}30`,
                    }}
                  >
                    <card.icon size={22} style={{ color: card.accent }} />
                  </div>
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
                >
                  {card.title}
                </h3>

                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(5,65,42,0.6)' }}>
                  {card.description}
                </p>

                {/* Features */}
                <div className="space-y-2.5">
                  {card.features.map((feat) => (
                    <div key={feat.text} className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${card.accent}15` }}
                      >
                        <feat.icon size={12} style={{ color: card.accent }} />
                      </div>
                      <span className="text-sm" style={{ color: 'rgba(5,65,42,0.7)' }}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product lineup image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-8"
          style={{
            background: 'linear-gradient(155deg, #eef7f1 0%, #e3f1e8 50%, #d9ece1 100%)',
            border: '1px solid rgba(255,255,255,0.9)',
            boxShadow: '0 8px 40px rgba(5,65,42,0.08)',
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(168,255,62,0.4), transparent 70%)' }}
          />

          <div className="relative px-6 pt-10 pb-0 text-center">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 inline-block"
              style={{ background: 'rgba(12,98,71,0.1)', color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}
            >
              Scalable · Modular · Deploy-Ready
            </span>
            <h3
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
            >
              One unit or many — all connected
            </h3>
            <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: 'rgba(5,65,42,0.55)' }}>
              MagoGo Smart Chamber is built to scale. Monitor a single unit or your entire fleet from one dashboard.
            </p>
          </div>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/product-lineup.png"
              alt="MagoGo Smart Chamber lineup — 5 units"
              className="w-full object-cover"
              style={{ maxHeight: '380px', objectPosition: 'center center' }}
            />
            {/* Bottom fade into card */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(217,236,225,0.9), transparent)' }}
            />
          </div>
        </motion.div>

        {/* Product visual banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16"
          style={{
            background: 'linear-gradient(135deg, var(--color-forest) 0%, var(--color-deep) 45%, var(--color-teal) 100%)',
            border: '1px solid rgba(168,255,62,0.2)',
          }}
        >
          {/* Glow orbs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(168,255,62,0.2) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(61,189,111,0.2) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}
              >
                The Technology Stack
              </div>
              <h3
                className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Hardware + Cloud + ML in one closed loop
              </h3>
              <p className="text-white/60 leading-relaxed">
                MagoGo integrates precision IoT hardware with a cloud analytics platform and ML inference engine. Every data point feeds back into the system, making each cultivation cycle smarter than the last.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'IoT Sensors', val: '4 types', desc: 'Real-time data' },
                { label: 'Actuators', val: '3 units', desc: 'Auto control' },
                { label: 'Data Points', val: '1/min', desc: 'Continuous logging' },
                { label: 'ML Models', val: 'Live', desc: 'Growth prediction' },
              ].map(item => (
                <div
                  key={item.label}
                  className="rounded-2xl p-5"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div
                    className="text-2xl font-bold mb-0.5"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-lime)' }}
                  >
                    {item.val}
                  </div>
                  <div className="text-white text-sm font-medium">{item.label}</div>
                  <div className="text-white/40 text-xs mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

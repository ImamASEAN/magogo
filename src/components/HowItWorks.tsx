'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Trash2, Cpu, Bug, Package, RefreshCw } from 'lucide-react'

const steps = [
  { num: '01', icon: Trash2, title: 'Organic Waste Input', description: 'Household, restaurant, or agricultural organic waste is loaded into the MagoGo Smart Chamber. Any biodegradable material works.', detail: 'Food scraps · Vegetable peelings · Organic farm waste', color: '#f97316' },
  { num: '02', icon: Cpu, title: 'Smart Chamber Processing', description: 'IoT sensors continuously monitor temperature, humidity, and pH. Actuators automatically maintain ideal conditions for BSF cultivation.', detail: 'Real-time monitoring · Auto-regulation · Cloud logging', color: '#3b82f6' },
  { num: '03', icon: Bug, title: 'BSF Maggot Conversion', description: "Black Soldier Fly larvae efficiently convert organic waste into protein-rich biomass — nature's most efficient bioconversion engine.", detail: 'Up to 70% waste reduction · High protein output', color: '#a8ff3e' },
  { num: '04', icon: Package, title: 'Biomass Production', description: 'Harvested larvae are processed into premium biomass: high-protein animal feed, organic fertilizer, or feedstock for other industries.', detail: 'Animal feed · Fertilizer · Industrial feedstock', color: '#0C6247' },
  { num: '05', icon: RefreshCw, title: 'Circular Economy', description: 'Zero waste. The cycle continues — residual frass becomes fertilizer, creating a complete closed-loop system with no outputs going to landfill.', detail: '100% closed loop · Carbon positive · Scalable', color: '#1B5B5D' },
]

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="how-it-works" className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #e8ede5 0%, #f4f6f2 100%)' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-emerald-light)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>The Process</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>
            How It Works
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg max-w-lg mx-auto" style={{ color: 'rgba(5,65,42,0.6)' }}>
            Five elegant steps from waste to value, powered by biology and IoT.
          </motion.p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Track background line */}
          <div className="absolute left-[28px] md:left-1/2 top-8 bottom-8 w-px"
            style={{ background: 'rgba(12,98,71,0.12)', transform: 'translateX(-50%)' }} />
          {/* Animated draw-on progress line */}
          <motion.div
            className="absolute left-[28px] md:left-1/2 top-8 bottom-8 w-[3px] rounded-full origin-top"
            style={{
              background: 'linear-gradient(to bottom, var(--color-lime), var(--color-emerald), var(--color-teal))',
              transform: 'translateX(-50%)',
              scaleY: pathLength,
              boxShadow: '0 0 12px rgba(168,255,62,0.4)',
            }}
          />

          {steps.map((step, i) => (
            <motion.div key={step.num}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex items-start gap-6 mb-10 md:mb-14 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

              <motion.div
                whileInView={{ scale: [0.5, 1.15, 1] }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, var(--color-forest), ${step.color}40)`, border: `2px solid ${step.color}50`, boxShadow: `0 0 24px ${step.color}30` }}>
                <step.icon size={22} style={{ color: step.color }} />
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0.6, scale: 1 }}
                  whileInView={{ opacity: 0, scale: 1.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  style={{ border: `2px solid ${step.color}` }}
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -4, boxShadow: `0 12px 32px ${step.color}20` }}
                className="flex-1 rounded-2xl p-6 transition-shadow duration-300"
                style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 4px 24px rgba(5,65,42,0.06)', backdropFilter: 'blur(20px)' }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold" style={{ color: step.color, fontFamily: 'Space Mono, monospace' }}>STEP {step.num}</span>
                    <h3 className="text-xl font-bold mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>{step.title}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center ml-3" style={{ background: `${step.color}15` }}>
                    <span className="text-base font-bold" style={{ color: step.color, fontFamily: 'Space Mono, monospace' }}>{step.num}</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(5,65,42,0.65)' }}>{step.description}</p>
                <div className="text-xs px-3 py-2 rounded-lg" style={{ background: `${step.color}10`, border: `1px solid ${step.color}25`, color: step.color, fontFamily: 'Space Mono, monospace' }}>
                  {step.detail}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-12 p-8 rounded-3xl relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--color-forest), var(--color-deep), var(--color-teal))', border: '1px solid rgba(168,255,62,0.2)' }}>
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-20"
            animate={{ background: ['radial-gradient(circle at 20% 50%, rgba(168,255,62,0.3), transparent 50%)', 'radial-gradient(circle at 80% 50%, rgba(168,255,62,0.3), transparent 50%)', 'radial-gradient(circle at 20% 50%, rgba(168,255,62,0.3), transparent 50%)']}}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative z-10 flex items-center justify-center gap-2 mb-4">
            <RefreshCw size={20} style={{ color: 'var(--color-lime)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}>Full Circular Loop</span>
          </div>
          <p className="relative z-10 text-white/80 text-lg max-w-md mx-auto">
            Waste in. Value out. Nothing to landfill. The MagoGo system closes the organic waste loop completely.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

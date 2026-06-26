'use client'

import { motion } from 'framer-motion'
import { Leaf, Recycle, Sprout, Building2, ExternalLink } from 'lucide-react'

const partners = [
  {
    icon: Leaf,
    category: 'Environmental',
    title: 'Environmental Communities',
    description: 'Partnering with local and national environmental groups to drive adoption of circular waste management practices.',
    count: '12+ communities',
    color: '#3dbd6f',
  },
  {
    icon: Recycle,
    category: 'Waste Management',
    title: 'Waste Management Partners',
    description: 'Collaborating with waste processing facilities to integrate BSF bioconversion at scale.',
    count: '8 partners',
    color: '#f97316',
  },
  {
    icon: Sprout,
    category: 'Agriculture',
    title: 'Agriculture Partners',
    description: 'Working with farms and agribusinesses to supply premium BSF-derived feed and organic fertilizer.',
    count: '20+ farms',
    color: '#a8ff3e',
  },
  {
    icon: Building2,
    category: 'Government',
    title: 'Government Collaboration',
    description: 'Aligned with national zero-waste roadmap initiatives and urban organic waste reduction programs.',
    count: '3 programs',
    color: '#3b82f6',
  },
]

export default function Partners() {
  return (
    <section
      id="partners"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f4f6f2 0%, #e8ede5 100%)' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
              Ecosystem
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
            Building The Future Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-lg mx-auto"
            style={{ color: 'rgba(26,58,42,0.6)' }}
          >
            MagoGo is building a full circular economy ecosystem across sectors.
          </motion.p>
        </div>

        {/* Partner cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {partners.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl p-6 relative overflow-hidden transition-shadow duration-300"
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.9)',
                boxShadow: '0 4px 24px rgba(26,58,42,0.06)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${p.color}15`, border: `1px solid ${p.color}25` }}
                >
                  <p.icon size={22} style={{ color: p.color }} />
                </div>

                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: `${p.color}12`,
                    color: p.color,
                    fontFamily: 'Space Mono, monospace',
                  }}
                >
                  {p.count}
                </span>
              </div>

              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: p.color, fontFamily: 'Space Mono, monospace' }}>
                {p.category}
              </div>

              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
              >
                {p.title}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,58,42,0.65)' }}>
                {p.description}
              </p>

              {/* Logo placeholder strip */}
              <div className="flex gap-2 mt-5 pt-5" style={{ borderTop: '1px solid rgba(26,58,42,0.08)' }}>
                {[1, 2, 3].map(n => (
                  <div
                    key={n}
                    className="h-7 rounded-lg flex-1"
                    style={{ background: `${p.color}10`, border: `1px solid ${p.color}20` }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl p-10 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, var(--color-forest), rgba(45,122,79,0.9))',
            border: '1px solid rgba(168,255,62,0.2)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center top, rgba(168,255,62,0.12), transparent 60%)' }}
          />
          <div className="relative z-10">
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Interested in partnering?
            </h3>
            <p className="text-white/60 mb-7 max-w-md mx-auto">
              We're actively building our ecosystem. Whether you're a community, business, or institution, let's talk.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: 'var(--color-lime)',
                color: 'var(--color-forest)',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              Explore Partnership
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

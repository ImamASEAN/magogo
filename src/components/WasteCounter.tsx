'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertTriangle, Globe, Clock, TrendingUp } from 'lucide-react'

// ~2.01 billion tonnes/year global organic waste → ~63.7 kg/second
const KG_PER_SECOND = 63700

export default function WasteCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return
    startTimeRef.current = performance.now()

    const tick = (now: number) => {
      const elapsed = (now - (startTimeRef.current ?? now)) / 1000
      setCount(Math.floor(elapsed * KG_PER_SECOND))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [inView])

  const formatted = count.toLocaleString()

  const stats = [
    { icon: Globe, label: 'Billion tonnes', value: '2.01', sub: 'organic waste per year globally' },
    { icon: Clock, label: 'Kg per second', value: '63,700', sub: 'generated right now worldwide' },
    { icon: TrendingUp, label: 'Of food wasted', value: '30%', sub: 'of all food produced globally' },
  ]

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f4f6f2 0%, #1a3a2a 40%, #1a3a2a 100%)' }}
    >
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #f4f6f2, transparent)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(168,255,62,0.1)',
            border: '1px solid rgba(168,255,62,0.3)',
          }}
        >
          <AlertTriangle size={14} style={{ color: 'var(--color-lime)' }} />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}
          >
            The Global Crisis
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Organic waste keeps growing
          <br />
          <span style={{ color: 'var(--color-lime)' }}>every second.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg mb-16 max-w-xl mx-auto"
        >
          While you read this, millions of kilograms of organic waste pile up with nowhere to go.
        </motion.p>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative rounded-3xl p-10 md:p-14 mb-6"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Warning glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 80px rgba(168,255,62,0.05), 0 0 80px rgba(168,255,62,0.08)',
            }}
          />

          <p className="text-white/50 text-sm mb-3 tracking-widest uppercase font-mono">
            Estimated organic waste generated while you are here
          </p>

          <div
            className="text-6xl md:text-8xl font-bold tabular-nums my-4"
            style={{
              fontFamily: 'Space Mono, monospace',
              color: '#ef4444',
              textShadow: '0 0 40px rgba(239,68,68,0.5)',
            }}
          >
            {formatted}
            <span className="text-3xl md:text-4xl ml-3 text-red-300/70">kg</span>
          </div>

          {/* Pulsing bar */}
          <div className="mx-auto max-w-xs h-1 rounded-full overflow-hidden mt-6"
            style={{ background: 'rgba(255,255,255,0.08)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #ef4444, #f97316)' }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            />
          </div>

          <p className="text-white/30 text-xs mt-4 font-mono">
            ⚠ Based on estimated global organic waste generation rate (~63,700 kg/s)
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="rounded-2xl p-6 text-left"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <stat.icon size={20} style={{ color: 'var(--color-lime)' }} className="mb-3" />
              <div
                className="text-3xl font-bold text-white mb-1"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-white/40 text-sm">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Bridge to solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 inline-flex items-center gap-3 px-8 py-4 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(168,255,62,0.15), rgba(45,122,79,0.2))',
            border: '1px solid rgba(168,255,62,0.3)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: 'var(--color-lime)' }}
          />
          <span className="text-white font-medium">
            MagoGo turns this problem into a resource.
          </span>
          <span style={{ color: 'var(--color-lime)' }}>→</span>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #f4f6f2, transparent)' }}
      />
    </section>
  )
}

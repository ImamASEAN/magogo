'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Thermometer, Droplets, Activity, Weight } from 'lucide-react'

const floatingCards = [
  { icon: Thermometer, label: 'Temperature', value: '24.5°C', status: 'Optimal', color: '#f97316', delay: 0, depth: 30, className: 'top-[10%] right-[0%] md:top-[14%] md:right-[2%]' },
  { icon: Droplets, label: 'Humidity', value: '72%', status: 'Good', color: '#3b82f6', delay: 0.2, depth: 50, className: 'top-[36%] right-[-2%] md:right-[-1%]' },
  { icon: Activity, label: 'System Status', value: 'Optimal ✓', status: 'Live', color: '#a8ff3e', delay: 0.4, depth: 70, className: 'bottom-[26%] right-[0%] md:right-[4%]' },
  { icon: Weight, label: 'Biomass', value: '850g', status: '+12% today', color: '#2d7a4f', delay: 0.6, depth: 40, className: 'bottom-[8%] right-[6%] md:right-[10%]' },
]

function FloatingCard({ card, index, mouseX, mouseY }: { card: typeof floatingCards[0]; index: number; mouseX: any; mouseY: any }) {
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-card.depth * 0.4, card.depth * 0.4]), { stiffness: 100, damping: 20 })
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-card.depth * 0.4, card.depth * 0.4]), { stiffness: 100, damping: 20 })

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 + card.delay }}
      style={{ x, y }}
      whileHover={{ scale: 1.06 }}
      className={`absolute glass rounded-2xl px-4 py-3 min-w-[120px] z-20 cursor-default ${index % 2 === 0 ? 'animate-float' : 'animate-float-delay'} ${card.className}`}
      data-cursor
    >
      <div className="flex items-center gap-2 mb-1">
        <card.icon size={13} style={{ color: card.color }} />
        <span className="text-xs" style={{ color: 'rgba(5,65,42,0.5)', fontFamily: 'Space Mono, monospace' }}>{card.label}</span>
      </div>
      <div className="text-lg font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>{card.value}</div>
      <div className="text-xs mt-0.5 flex items-center gap-1" style={{ color: card.color }}>
        <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: card.color }} />
        {card.status}
      </div>
    </motion.div>
  )
}

function MagneticButton({ children, href, primary }: { children: React.ReactNode; href: string; primary?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15 })
  const springY = useSpring(y, { stiffness: 200, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * 0.3)
    y.set(relY * 0.3)
  }

  const handleMouseLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-shadow duration-300 hover:shadow-xl ${primary ? '' : 'glass'}`}
      data-cursor
    >
      <span
        className="absolute inset-0 rounded-full -z-10"
        style={primary ? { background: 'var(--color-forest)', boxShadow: '0 4px 24px rgba(5,65,42,0.25)' } : { border: '1.5px solid rgba(12,98,71,0.3)' }}
      />
      <span style={{ color: primary ? 'var(--color-lime)' : 'var(--color-forest)', fontFamily: 'Space Grotesk, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
        {children}
      </span>
    </motion.a>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const relX = (e.clientX - rect.left - rect.width / 2) / rect.width
      const relY = (e.clientY - rect.top - rect.height / 2) / rect.height
      mouseX.set(relX)
      mouseY.set(relY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  const springConfig = { stiffness: 150, damping: 20 }
  const productX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig)
  const productY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 14]), springConfig)
  const ringRotate = useTransform(mouseX, [-0.5, 0.5], [-8, 8])
  const blobX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), { stiffness: 60, damping: 25 })
  const blobY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), { stiffness: 60, damping: 25 })

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #e1f0e8 0%, #eef7f1 30%, #F9FDFB 60%, #e7f1ec 100%)' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Mouse-reactive blobs */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ x: blobX, y: blobY }}>
        <div className="animate-blob absolute w-[600px] h-[600px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(27,91,93,0.35) 0%, transparent 70%)', top: '-100px', left: '-100px' }} />
        <div className="animate-blob animation-delay-2000 absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(168,255,62,0.25) 0%, transparent 70%)', top: '40%', right: '-100px' }} />
        <div className="animate-blob animation-delay-4000 absolute w-[400px] h-[400px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(12,98,71,0.3) 0%, transparent 70%)', bottom: '-100px', left: '30%' }} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: 'var(--color-lime)' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>
                IoT · Circular Economy · Climate Tech
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              Transform Organic
              <br />
              <span className="relative inline-block">
                <span style={{ color: 'var(--color-emerald-light)' }}>Waste</span>
                <motion.svg
                  className="absolute -top-2 -right-8 w-12 h-12"
                  viewBox="0 0 50 50"
                  initial={{ opacity: 0, rotate: -20, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6, ease: 'backOut' }}
                >
                  <path d="M25 5 L29 20 L44 24 L29 28 L25 43 L21 28 L6 24 L21 20 Z" fill="var(--color-lime)" opacity="0.8" />
                </motion.svg>
              </span> Into
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

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg" style={{ color: 'rgba(5,65,42,0.65)' }}>
              An IoT-powered smart chamber that converts organic waste into valuable biomass through intelligent monitoring and automation.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4 relative">
              <MagneticButton href="#product" primary>
                Explore Technology
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton href="#contact">
                Contact Us
              </MagneticButton>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-8 mt-12 pt-8" style={{ borderTop: '1px solid rgba(12,98,71,0.15)' }}>
              {[{ val: '4 in 1', label: 'Smart Sensors' }, { val: 'Real-time', label: 'ML Analytics' }, { val: '100%', label: 'Automated' }].map((s, i) => (
                <motion.div key={s.label} whileHover={{ y: -3 }} className="cursor-default" data-cursor>
                  <div className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>{s.val}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(5,65,42,0.5)' }}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — product with parallax */}
          <div className="relative flex justify-center items-center h-[500px] md:h-[600px]">
            <motion.div className="absolute rounded-full pointer-events-none"
              style={{ width: '440px', height: '440px', border: '1.5px dashed rgba(12,98,71,0.18)', rotate: ringRotate }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div className="absolute rounded-full pointer-events-none"
              style={{ width: '360px', height: '360px', border: '1px solid rgba(168,255,62,0.2)' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
              className="absolute rounded-[2.5rem] overflow-hidden"
              style={{
                width: '380px', height: '420px',
                background: 'linear-gradient(155deg, rgba(5,65,42,0.08) 0%, rgba(27,91,93,0.10) 50%, rgba(168,255,62,0.06) 100%)',
                border: '1px solid rgba(12,98,71,0.12)',
                x: useTransform(productX, v => v * 0.3),
                y: useTransform(productY, v => v * 0.3),
              }}
            >
              <motion.div className="absolute left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(168,255,62,0.6), transparent)' }}
                animate={{ top: ['8%', '92%', '8%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
              {[{ top: 14, left: 14, rotate: 0 }, { top: 14, right: 14, rotate: 90 }, { bottom: 14, right: 14, rotate: 180 }, { bottom: 14, left: 14, rotate: 270 }].map((pos, i) => (
                <div key={i} className="absolute w-6 h-6" style={{ ...pos, transform: `rotate(${pos.rotate}deg)` }}>
                  <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: 'rgba(12,98,71,0.35)' }} />
                  <div className="absolute top-0 left-0 w-[2px] h-full" style={{ background: 'rgba(12,98,71,0.35)' }} />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float relative"
              style={{ x: productX, y: productY }}
            >
              <div className="absolute inset-0 rounded-3xl blur-3xl scale-90 translate-y-8"
                style={{ background: 'radial-gradient(ellipse, rgba(168,255,62,0.35) 0%, rgba(12,98,71,0.25) 60%, transparent 100%)' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/product-single.png" alt="MagoGo Smart Chamber"
                className="relative z-10 w-64 md:w-[360px] object-contain"
                style={{ filter: 'drop-shadow(0 24px 48px rgba(5,65,42,0.35)) saturate(1.1) contrast(1.05)' }} />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 h-10 rounded-full blur-2xl"
                style={{ background: 'rgba(168,255,62,0.3)' }} />
            </motion.div>

            {floatingCards.map((card, i) => (
              <FloatingCard key={card.label} card={card} index={i} mouseX={mouseX} mouseY={mouseY} />
            ))}
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(5,65,42,0.4)', fontFamily: 'Space Mono, monospace' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} style={{ color: 'rgba(5,65,42,0.4)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

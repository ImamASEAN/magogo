'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Thermometer, Droplets, Activity, Weight } from 'lucide-react'

const floatingCards = [
  { icon: Thermometer, label: 'Temperature', value: '24.5°C', status: 'Optimal', color: '#3be08a', delay: 0, depth: 30, className: 'top-[10%] right-[0%] md:top-[14%] md:right-[2%]' },
  { icon: Droplets, label: 'Humidity', value: '72%', status: 'Good', color: '#3b82f6', delay: 0.2, depth: 50, className: 'top-[36%] right-[-2%] md:right-[-1%]' },
  { icon: Activity, label: 'System Status', value: 'Optimal ✓', status: 'Live', color: '#a8ff3e', delay: 0.4, depth: 70, className: 'bottom-[26%] right-[0%] md:right-[4%]' },
  { icon: Weight, label: 'Biomass', value: '850g', status: '+12% today', color: '#1eab6e', delay: 0.6, depth: 40, className: 'bottom-[8%] right-[6%] md:right-[10%]' },
]

function FloatingCard({ card, index, mouseX, mouseY }: { card: typeof floatingCards[0]; index: number; mouseX: any; mouseY: any }) {
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-card.depth * 0.4, card.depth * 0.4]), { stiffness: 100, damping: 20 })
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-card.depth * 0.4, card.depth * 0.4]), { stiffness: 100, damping: 20 })
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 + card.delay }}
      style={{ x, y, background: 'rgba(10,30,18,0.75)', border: '1px solid rgba(59,224,138,0.15)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
      whileHover={{ scale: 1.06, borderColor: 'rgba(59,224,138,0.4)' }}
      className={`absolute rounded-2xl px-4 py-3 min-w-[130px] z-20 ${index % 2 === 0 ? 'animate-float' : 'animate-float-delay'} ${card.className}`}
      data-cursor
    >
      <div className="flex items-center gap-2 mb-1">
        <card.icon size={12} style={{ color: card.color }} />
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Mono, monospace' }}>{card.label}</span>
      </div>
      <div className="text-lg font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{card.value}</div>
      <div className="text-xs mt-0.5 flex items-center gap-1.5" style={{ color: card.color }}>
        <span className="w-1.5 h-1.5 rounded-full inline-block animate-live" style={{ background: card.color }} />
        {card.status}
      </div>
    </motion.div>
  )
}

function MagneticButton({ children, href, primary }: { children: React.ReactNode; href: string; primary?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0); const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 }); const sy = useSpring(y, { stiffness: 200, damping: 15 })
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.3)
    y.set((e.clientY - r.top - r.height / 2) * 0.3)
  }
  return (
    <motion.a ref={ref} href={href} onMouseMove={onMove} onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ x: sx, y: sy, display: 'inline-flex', alignItems: 'center', gap: '8px', position: 'relative' }}
      className="px-7 py-3.5 rounded-full font-semibold text-sm group" data-cursor>
      {primary ? (
        <>
          <span className="absolute inset-0 rounded-full" style={{ background: 'var(--color-lime)', boxShadow: '0 4px 20px rgba(59,224,138,0.35)' }} />
          <span className="relative" style={{ color: 'var(--color-forest)', fontFamily: 'Space Grotesk, sans-serif' }}>{children}</span>
        </>
      ) : (
        <>
          <span className="absolute inset-0 rounded-full" style={{ border: '1.5px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)' }} />
          <span className="relative text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{children}</span>
        </>
      )}
    </motion.a>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0); const mouseY = useMotionValue(0)
  const springConfig = { stiffness: 150, damping: 20 }
  const productX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig)
  const productY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 14]), springConfig)
  const blobX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), { stiffness: 60, damping: 25 })
  const blobY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), { stiffness: 60, damping: 25 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect(); if (!rect) return
      mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width)
      mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #051a0d 0%, #073520 25%, #0a3d2a 50%, #0d4a35 70%, #1B5B5D 100%)' }}>
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\")" }} />

      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ x: blobX, y: blobY }}>
        <div className="absolute w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(27,91,93,0.35) 0%, transparent 70%)', top: '-100px', left: '-150px' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,224,138,0.12) 0%, transparent 70%)', top: '20%', right: '-80px' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(12,98,71,0.3) 0%, transparent 70%)', bottom: '-100px', left: '30%' }} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — original content */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(59,224,138,0.1)', border: '1px solid rgba(59,224,138,0.25)' }}>
              <span className="w-2 h-2 rounded-full animate-live" style={{ background: 'var(--color-lime)' }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70" style={{ fontFamily: 'Space Mono, monospace' }}>
                IoT · Circular Economy · Climate Tech
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bold leading-[1.05] tracking-tight mb-6 text-white"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}>
              Transform Organic
              <br />
              <span style={{ color: 'var(--color-lime)' }}>Waste</span> Into
              <br />
              <span className="relative">
                Smart Growth
                <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.9 }}
                  className="absolute bottom-1 left-0 right-0 h-1 rounded-full"
                  style={{ background: 'var(--color-lime)', transformOrigin: 'left' }} />
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
              An IoT-powered smart chamber that converts organic waste into valuable biomass through intelligent monitoring and automation.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4">
              <MagneticButton href="#product" primary>
                Explore Technology <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton href="#contact">
                Contact Us
              </MagneticButton>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-8 mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[{ val: '4 in 1', label: 'Smart Sensors' }, { val: 'Real-time', label: 'ML Analytics' }, { val: '100%', label: 'Automated' }].map(s => (
                <motion.div key={s.label} whileHover={{ y: -3 }} data-cursor>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.val}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center h-[500px] md:h-[600px]">
            <motion.div className="absolute rounded-full pointer-events-none"
              style={{ width: '440px', height: '440px', border: '1px dashed rgba(59,224,138,0.15)' }}
              animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
            <motion.div className="absolute rounded-full pointer-events-none"
              style={{ width: '340px', height: '340px', border: '1px solid rgba(59,224,138,0.08)' }}
              animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} />

            <div className="absolute rounded-[2.5rem] overflow-hidden"
              style={{ width: '360px', height: '400px', background: 'rgba(5,25,14,0.4)', border: '1px solid rgba(59,224,138,0.08)' }}>
              <motion.div className="absolute left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(59,224,138,0.4), transparent)' }}
                animate={{ top: ['8%', '92%', '8%'] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
              {[{ top: 14, left: 14, rotate: 0 }, { top: 14, right: 14, rotate: 90 }, { bottom: 14, right: 14, rotate: 180 }, { bottom: 14, left: 14, rotate: 270 }].map(({ rotate, ...pos }, i) => (
                <div key={i} className="absolute w-5 h-5" style={{ ...pos, transform: `rotate(${rotate}deg)` }}>
                  <div className="absolute top-0 left-0 w-full h-[1.5px]" style={{ background: 'rgba(59,224,138,0.3)' }} />
                  <div className="absolute top-0 left-0 w-[1.5px] h-full" style={{ background: 'rgba(59,224,138,0.3)' }} />
                </div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float relative" style={{ x: productX, y: productY }}>
              <div className="absolute inset-0 blur-3xl scale-90 translate-y-8"
                style={{ background: 'radial-gradient(ellipse, rgba(59,224,138,0.25) 0%, rgba(12,98,71,0.2) 60%, transparent 100%)' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/product-single.png" alt="MagoGo Smart Chamber"
                className="relative z-10 w-64 md:w-[360px] object-contain"
                style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5)) saturate(1.1) brightness(1.05)' }} />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-10 rounded-full blur-2xl"
                style={{ background: 'rgba(59,224,138,0.2)' }} />
            </motion.div>

            {floatingCards.map((card, i) => (
              <FloatingCard key={card.label} card={card} index={i} mouseX={mouseX} mouseY={mouseY} />
            ))}
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Space Mono, monospace' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  )
}

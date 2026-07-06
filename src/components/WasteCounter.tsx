'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertTriangle, Globe, Clock, TrendingUp } from 'lucide-react'

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

  const stats = [
    { icon: Globe, value: '2,01 Gt / tahun', sub: 'sampah organik dihasilkan secara global — lebih berat dari 11 juta paus biru' },
    { icon: Clock, value: '63.700 kg/detik', sub: 'sampah organik dihasilkan setiap detik di seluruh penjuru dunia' },
    { icon: TrendingUp, value: '30% pangan', sub: 'dari seluruh produksi pangan global terbuang sebelum sampai ke piring' },
  ]

  return (
    <section ref={ref} className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #051a0d 0%, #073520 30%, #0a3d2a 55%, #4d7d6e 80%, #F5F7F5 100%)' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,224,138,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ background: 'rgba(59,224,138,0.08)', border: '1px solid rgba(59,224,138,0.25)' }}>
          <AlertTriangle size={14} style={{ color: 'var(--color-lime)' }} />
          <span className="text-xs font-semibold tracking-widest uppercase text-white/70" style={{ fontFamily: 'Space Mono, monospace' }}>
            Krisis Global
          </span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Sampah organik terus bertambah
          <br /><span style={{ color: 'var(--color-lime)' }}>setiap detik.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-lg mb-16 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Saat Anda membaca ini, jutaan kilogram sampah organik terus menumpuk tanpa solusi yang memadai.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative rounded-3xl p-10 md:p-14 mb-6"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>
          <div className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ boxShadow: 'inset 0 0 80px rgba(59,224,138,0.04)' }} />
          <p className="text-white/40 text-xs mb-3 tracking-widest uppercase" style={{ fontFamily: 'Space Mono, monospace' }}>
            Estimasi sampah organik yang dihasilkan selama Anda di sini
          </p>
          <div className="text-6xl md:text-8xl font-bold tabular-nums my-4"
            style={{ fontFamily: 'Space Mono, monospace', color: '#ef4444', textShadow: '0 0 40px rgba(239,68,68,0.4)' }}>
            {count.toLocaleString('id-ID')}
            <span className="text-3xl md:text-4xl ml-3" style={{ color: 'rgba(239,68,68,0.5)' }}>kg</span>
          </div>
          <div className="mx-auto max-w-xs h-1 rounded-full overflow-hidden mt-6" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <motion.div className="h-full rounded-full" style={{ background: 'linear-gradient(90deg, #ef4444, #f97316)' }}
              animate={{ x: ['-100%', '200%'] }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }} />
          </div>
          <p className="text-white/25 text-xs mt-4" style={{ fontFamily: 'Space Mono, monospace' }}>
            ⚠ Berdasarkan estimasi laju produksi sampah organik global (~63.700 kg/detik)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(59,224,138,0.3)' }}
              className="rounded-2xl p-6 text-left transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="inline-block mb-3">
                <stat.icon size={20} style={{ color: 'var(--color-lime)' }} />
              </motion.div>
              <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{stat.value}</div>
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.a href="#product" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.03 }}
          className="mt-16 inline-flex items-center gap-3 px-8 py-4 rounded-full transition-shadow duration-300 hover:shadow-lg"
          style={{ background: 'rgba(59,224,138,0.1)', border: '1px solid rgba(59,224,138,0.3)' }}>
          <span className="w-2 h-2 rounded-full animate-live" style={{ background: 'var(--color-lime)' }} />
          <span className="text-white font-medium">MagoGo mengubah masalah ini menjadi sumber daya.</span>
          <span style={{ color: 'var(--color-lime)' }}>→</span>
        </motion.a>
      </div>
    </section>
  )
}

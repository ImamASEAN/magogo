'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Trash2, Cpu, Bug, Package, RefreshCw } from 'lucide-react'

const steps = [
  { num: '01', icon: Trash2, title: 'Input Sampah Organik', description: 'Sampah organik dari rumah tangga, restoran, atau pertanian dimasukkan ke dalam MagoGo Smart Chamber. Semua bahan yang dapat terurai secara biologis dapat digunakan.', detail: 'Sisa makanan · Kulit sayuran · Limbah pertanian organik', color: '#f97316' },
  { num: '02', icon: Cpu, title: 'Pemrosesan Smart Chamber', description: 'Sensor IoT memantau suhu, kelembapan, dan pH secara terus-menerus. Aktuator secara otomatis menjaga kondisi ideal untuk budidaya BSF tanpa campur tangan manual.', detail: 'Pemantauan real-time · Regulasi otomatis · Pencatatan cloud', color: '#3b82f6' },
  { num: '03', icon: Bug, title: 'Konversi Maggot BSF', description: 'Larva Black Soldier Fly secara efisien mengubah sampah organik menjadi biomassa kaya protein — mesin biokonversi paling efisien yang pernah diciptakan alam.', detail: 'Reduksi limbah hingga 70% · Output protein tinggi', color: '#a8ff3e' },
  { num: '04', icon: Package, title: 'Produksi Biomassa', description: 'Larva yang dipanen diolah menjadi biomassa premium: pakan hewan berprotein tinggi, pupuk organik berkualitas, atau bahan baku untuk industri lainnya.', detail: 'Pakan ternak · Pupuk organik · Bahan baku industri', color: '#0C6247' },
  { num: '05', icon: RefreshCw, title: 'Ekonomi Sirkular', description: 'Nol limbah. Siklus terus berlanjut — sisa frass menjadi pupuk, menciptakan sistem loop tertutup yang sempurna tanpa satu pun output berakhir di tempat pembuangan akhir.', detail: '100% loop tertutup · Carbon positif · Skalabel', color: '#1B5B5D' },
]

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.4'] })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="how-it-works" className="section-pad relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F5F7F5 0%, #eef5ee 100%)' }}>
      <div className="absolute inset-0 bg-grid-light opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-emerald-light)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>Cara Kerja</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>
            Bagaimana Cara Kerjanya
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg max-w-lg mx-auto" style={{ color: 'rgba(5,65,42,0.6)' }}>
            Lima langkah elegan dari sampah menjadi nilai, didukung kekuatan biologi dan IoT.
          </motion.p>
        </div>

        <div className="relative" ref={containerRef}>
          <div className="absolute left-[28px] md:left-1/2 top-8 bottom-8 w-px" style={{ background: 'rgba(12,98,71,0.1)', transform: 'translateX(-50%)' }} />
          <motion.div className="absolute left-[28px] md:left-1/2 top-8 bottom-8 w-[3px] rounded-full origin-top"
            style={{ background: 'linear-gradient(to bottom, var(--color-lime), var(--color-emerald), var(--color-teal))', transform: 'translateX(-50%)', scaleY: pathLength, boxShadow: '0 0 12px rgba(59,224,138,0.4)' }} />

          {steps.map((step, i) => (
            <motion.div key={step.num}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
              className={`relative flex items-start gap-6 mb-10 md:mb-14 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <motion.div whileInView={{ scale: [0.5, 1.15, 1] }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, var(--color-forest), ${step.color}40)`, border: `2px solid ${step.color}50`, boxShadow: `0 0 24px ${step.color}25` }}>
                <step.icon size={22} style={{ color: step.color }} />
                <motion.div className="absolute inset-0 rounded-2xl" initial={{ opacity: 0.6, scale: 1 }}
                  whileInView={{ opacity: 0, scale: 1.8 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                  style={{ border: `2px solid ${step.color}` }} />
              </motion.div>
              <motion.div whileHover={{ y: -4 }} className="flex-1 rounded-2xl p-6 transition-shadow duration-300"
                style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.95)', boxShadow: '0 4px 24px rgba(5,65,42,0.06)', backdropFilter: 'blur(20px)' }}>
                <span className="text-xs font-semibold" style={{ color: step.color, fontFamily: 'Space Mono, monospace' }}>LANGKAH {step.num}</span>
                <h3 className="text-xl font-bold mt-1 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>{step.title}</h3>
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
          style={{ background: 'linear-gradient(135deg, var(--color-forest), var(--color-deep), var(--color-teal))', border: '1px solid rgba(59,224,138,0.2)' }}>
          <motion.div className="absolute inset-0 pointer-events-none opacity-20"
            animate={{ background: ['radial-gradient(circle at 20% 50%, rgba(59,224,138,0.3), transparent 50%)', 'radial-gradient(circle at 80% 50%, rgba(59,224,138,0.3), transparent 50%)', 'radial-gradient(circle at 20% 50%, rgba(59,224,138,0.3), transparent 50%)'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
          <RefreshCw size={20} className="mx-auto mb-3" style={{ color: 'var(--color-lime)' }} />
          <p className="relative z-10 text-white/80 text-lg max-w-md mx-auto">
            Sampah masuk. Nilai keluar. Tidak ada yang berakhir di tempat pembuangan akhir. MagoGo menutup loop sampah organik sepenuhnya.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

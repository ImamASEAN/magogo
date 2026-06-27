'use client'

import { motion } from 'framer-motion'
import { Trash2, Cpu, Bug, Package, RefreshCw } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Trash2,
    title: 'Input Sampah Organik',
    description: 'Sampah organik dari rumah tangga, restoran, atau pertanian dimasukkan ke dalam MagoGo Smart Chamber. Semua bahan yang dapat terurai secara biologis bisa digunakan.',
    detail: 'Sisa makanan · Kulit sayuran · Limbah pertanian organik',
    color: '#f97316',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'Pemrosesan Smart Chamber',
    description: 'Sensor IoT memantau suhu, kelembaban, dan pH secara terus-menerus. Aktuator secara otomatis menjaga kondisi ideal untuk budidaya BSF.',
    detail: 'Pemantauan real-time · Regulasi otomatis · Pencatatan cloud',
    color: '#3b82f6',
  },
  {
    num: '03',
    icon: Bug,
    title: 'Konversi Maggot BSF',
    description: 'Larva Black Soldier Fly secara efisien mengubah sampah organik menjadi biomassa kaya protein — mesin biokonversi paling efisien di alam.',
    detail: 'Reduksi limbah hingga 70% · Output protein tinggi',
    color: '#a8ff3e',
  },
  {
    num: '04',
    icon: Package,
    title: 'Produksi Biomassa',
    description: 'Larva yang dipanen diolah menjadi biomassa premium: pakan hewan berprotein tinggi, pupuk organik, atau bahan baku industri lainnya.',
    detail: 'Pakan ternak · Pupuk · Bahan baku industri',
    color: '#2d7a4f',
  },
  {
    num: '05',
    icon: RefreshCw,
    title: 'Ekonomi Sirkular',
    description: 'Nol limbah. Siklus terus berlanjut — sisa frass menjadi pupuk, menciptakan sistem loop tertutup lengkap tanpa output yang berakhir di TPA.',
    detail: '100% loop tertutup · Carbon positif · Skalabel',
    color: '#3dbd6f',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #e8ede5 0%, #f4f6f2 100%)' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-emerald-light)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>
              Proses
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
            Cara Kerjanya
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-lg mx-auto"
            style={{ color: 'rgba(26,58,42,0.6)' }}
          >
            Lima langkah elegan dari sampah menjadi nilai, didukung biologi dan IoT.
          </motion.p>
        </div>

        <div className="relative">
          <div
            className="absolute left-[28px] md:left-1/2 top-8 bottom-8 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(45,122,79,0.3), transparent)', transform: 'translateX(-50%)' }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.1 }}
              className={`relative flex items-start gap-6 mb-10 md:mb-14 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div
                className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--color-forest), rgba(45,122,79,0.8))`,
                  border: `2px solid ${step.color}40`,
                  boxShadow: `0 0 24px ${step.color}25`,
                }}
              >
                <step.icon size={22} style={{ color: step.color }} />
              </div>

              <div
                className="flex-1 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(255,255,255,0.9)',
                  boxShadow: '0 4px 24px rgba(26,58,42,0.06)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: step.color, fontFamily: 'Space Mono, monospace' }}
                    >
                      LANGKAH {step.num}
                    </span>
                    <h3
                      className="text-xl font-bold mt-1"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center ml-3"
                    style={{ background: `${step.color}12` }}
                  >
                    <span className="text-base font-bold" style={{ color: step.color, fontFamily: 'Space Mono, monospace' }}>
                      {step.num}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(26,58,42,0.65)' }}>
                  {step.description}
                </p>

                <div
                  className="text-xs px-3 py-2 rounded-lg"
                  style={{
                    background: `${step.color}08`,
                    border: `1px solid ${step.color}20`,
                    color: step.color,
                    fontFamily: 'Space Mono, monospace',
                  }}
                >
                  {step.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, var(--color-forest), rgba(45,122,79,0.9))',
            border: '1px solid rgba(168,255,62,0.2)',
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <RefreshCw size={20} style={{ color: 'var(--color-lime)' }} />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}
            >
              Loop Sirkular Penuh
            </span>
          </div>
          <p className="text-white/80 text-lg max-w-md mx-auto">
            Sampah masuk. Nilai keluar. Tidak ada yang berakhir di tempat pembuangan akhir. MagoGo menutup loop sampah organik sepenuhnya.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

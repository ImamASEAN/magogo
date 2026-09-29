'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Zap, ArrowRight, Star, Shield, Truck, Headphones } from 'lucide-react'

const included = [
  'Perangkat keras MagoGo Smart Chamber',
  'Dashboard pemantauan web & mobile',
  'Analitik & laporan dasar',
  'Sensor suhu, kelembapan, pH, biomassa',
  'Kontrol lingkungan otomatis',
  'Akses MagoGo-Network',
  'Garansi 1 tahun',
]

const upgrade = [
  'Prediksi pertumbuhan ML tingkat lanjut',
  'Pemantauan multi-unit (tak terbatas)',
  'Dukungan pelanggan prioritas',
  'Analitik historis & ekspor data',
  'Akses awal ke fitur terbaru',
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad relative overflow-hidden" style={{ background: '#F5F7F5' }}>
      <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-emerald-light)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>Harga</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>
            Harga yang Jelas & Transparan
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg max-w-md mx-auto" style={{ color: 'rgba(5,65,42,0.6)' }}>
            Mulai transformasi sampah dengan Smart Chamber. Tingkatkan kapabilitas kapan saja.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Main product — dark card */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="relative rounded-3xl overflow-hidden flex flex-col h-full"
            style={{ background: 'linear-gradient(145deg, var(--color-forest), var(--color-deep))', border: '1px solid rgba(59,224,138,0.2)', boxShadow: '0 20px 60px rgba(5,65,42,0.25)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(59,224,138,0.12) 0%, transparent 70%)' }} />
            <div className="relative z-10 p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                  style={{ background: 'rgba(59,224,138,0.12)', border: '1px solid rgba(59,224,138,0.25)' }}>
                  <Star size={12} style={{ color: 'var(--color-lime)' }} />
                  <span className="text-xs font-semibold" style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}>PRODUK UTAMA</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>MagoGo Smart Chamber</h3>
                <p className="text-white/45 text-sm mb-8 min-h-[40px]">Sistem hardware + software lengkap untuk mulai budidaya seketika.</p>
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-white/45 text-xl font-medium">Rp</span>
                  <span className="text-5xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-lime)' }}>1.800.000</span>
                </div>
                <div className="space-y-3 mb-8">
                  {included.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={15} style={{ color: 'var(--color-lime)', flexShrink: 0, marginTop: 1 }} />
                      <span className="text-sm text-white/65">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="#contact"
                className="group w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] mt-auto"
                style={{ background: 'var(--color-lime)', color: 'var(--color-forest)', fontFamily: 'Space Grotesk, sans-serif', boxShadow: '0 4px 24px rgba(59,224,138,0.3)' }}>
                Pesan Sekarang <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Upgrade card — light */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl p-8 flex flex-col justify-between h-full"
            style={{ background: 'rgba(255,255,255,0.85)', border: '1.5px solid rgba(5,65,42,0.1)', boxShadow: '0 8px 40px rgba(5,65,42,0.07)', backdropFilter: 'blur(20px)' }}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{ background: 'rgba(12,98,71,0.1)', border: '1px solid rgba(12,98,71,0.15)' }}>
                <Zap size={12} style={{ color: 'var(--color-emerald)' }} />
                <span className="text-xs font-semibold" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>LANGGANAN BULANAN</span>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>Expert Upgrade</h3>
              <p className="text-sm mb-6 min-h-[40px]" style={{ color: 'rgba(5,65,42,0.55)' }}>
                Analitik canggih dan pemantauan multi-unit tak terbatas untuk operator serius.
              </p>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-xl font-medium" style={{ color: 'rgba(5,65,42,0.4)' }}>Rp</span>
                <span className="text-5xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>149.000</span>
                <span className="text-sm mb-2" style={{ color: 'rgba(5,65,42,0.4)' }}>/ bulan</span>
              </div>
              <div className="space-y-3 mb-8">
                {upgrade.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={15} style={{ color: 'var(--color-emerald-light)', flexShrink: 0, marginTop: 1 }} />
                    <span className="text-sm" style={{ color: 'rgba(5,65,42,0.7)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a href="#contact"
              className="group w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] mt-auto"
              style={{ background: 'transparent', color: 'var(--color-forest)', border: '1.5px solid rgba(5,65,42,0.2)', fontFamily: 'Space Grotesk, sans-serif' }}>
              Tambah Expert Upgrade <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Bundle note */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-8 p-5 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(5,65,42,0.08)', backdropFilter: 'blur(20px)' }}>
          <p className="text-sm" style={{ color: 'rgba(5,65,42,0.55)' }}>
            Bundel Smart Chamber + bulan pertama Expert Upgrade hanya{' '}
            <span className="font-bold" style={{ color: 'var(--color-forest)' }}>Rp 1.849.000</span>
            {' '}·{' '}
            <a href="#contact" className="underline" style={{ color: 'var(--color-emerald)' }}>Hubungi kami untuk harga korporat</a>
          </p>
        </motion.div>

        {/* Trust row */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm" style={{ color: 'rgba(5,65,42,0.45)' }}>
          {[
            { icon: Shield, text: 'Garansi perangkat 12 bulan' },
            { icon: Truck, text: 'Pengiriman ke seluruh Indonesia' },
            { icon: Headphones, text: 'Dukungan teknis tersedia' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon size={15} style={{ color: 'var(--color-emerald)' }} />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

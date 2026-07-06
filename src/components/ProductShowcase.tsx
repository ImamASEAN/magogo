'use client'

import { motion } from 'framer-motion'
import { Thermometer, Cpu, BrainCircuit, CheckCircle2, Droplets, FlaskConical, Scale, Flame, Wind, CloudRain, TrendingUp, LineChart, Calendar } from 'lucide-react'

const cards = [
  {
    icon: Thermometer, tag: 'Pemantauan', title: 'Pemantauan Cerdas',
    description: 'Sensor IoT presisi tinggi memantau kondisi lingkungan secara terus-menerus dan mengirim data real-time ke cloud.',
    features: [
      { icon: Thermometer, text: 'Pelacakan suhu (akurasi ±0,1°C)' },
      { icon: Droplets, text: 'Pemantauan kelembapan (0–100% RH)' },
      { icon: FlaskConical, text: 'Pemantauan kadar pH' },
      { icon: Scale, text: 'Pengukuran berat biomassa langsung' },
    ],
    accent: '#3b82f6', gradient: 'from-blue-500/10 to-blue-500/5',
  },
  {
    icon: Cpu, tag: 'Otomasi', title: 'Kontrol Otomatis',
    description: 'Sistem kontrol lingkungan loop tertutup yang bereaksi terhadap data sensor, menjaga kondisi ideal tanpa campur tangan manual.',
    features: [
      { icon: Flame, text: 'Sistem pemanas otomatis' },
      { icon: Wind, text: 'Ventilasi exhaust cerdas' },
      { icon: CloudRain, text: 'Kontrol mist maker presisi' },
      { icon: CheckCircle2, text: 'Penyesuaian lingkungan mandiri' },
    ],
    accent: '#f97316', gradient: 'from-orange-500/10 to-orange-500/5',
  },
  {
    icon: BrainCircuit, tag: 'Kecerdasan', title: 'Machine Learning',
    description: 'Model ML kami belajar dari setiap siklus budidaya, terus meningkatkan akurasi prediksi untuk hasil panen yang optimal.',
    features: [
      { icon: TrendingUp, text: 'Prediksi pertumbuhan biomassa' },
      { icon: LineChart, text: 'Estimasi waktu panen' },
      { icon: Calendar, text: 'Wawasan optimasi siklus' },
      { icon: BrainCircuit, text: 'Deteksi anomali & peringatan dini' },
    ],
    accent: '#a8ff3e', gradient: 'from-lime-400/10 to-lime-400/5',
  },
]

export default function ProductShowcase() {
  return (
    <section id="product" className="section-pad relative overflow-hidden" style={{ background: '#F5F7F5' }}>
      <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(12,98,71,0.5), transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-emerald-light)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>Produk</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>
            Kenali MagoGo Smart Chamber
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(5,65,42,0.6)' }}>
            Sistem biokonversi loop tertutup yang lengkap — hardware, software, dan biologi dalam satu solusi terpadu.
          </motion.p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => (
            <motion.div key={card.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16,1,0.3,1] }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group relative rounded-3xl p-8 overflow-hidden cursor-default" data-cursor
              style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 4px 40px rgba(5,65,42,0.06)', backdropFilter: 'blur(20px)' }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full" style={{ background: card.accent }} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: `${card.accent}18`, color: card.accent, fontFamily: 'Space Mono, monospace' }}>{card.tag}</span>
                  <motion.div whileHover={{ rotate: 8, scale: 1.08 }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${card.accent}15`, border: `1px solid ${card.accent}30` }}>
                    <card.icon size={22} style={{ color: card.accent }} />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>{card.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(5,65,42,0.6)' }}>{card.description}</p>
                <div className="space-y-2.5">
                  {card.features.map((feat) => (
                    <div key={feat.text} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${card.accent}15` }}>
                        <feat.icon size={12} style={{ color: card.accent }} />
                      </div>
                      <span className="text-sm" style={{ color: 'rgba(5,65,42,0.7)' }}>{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lineup image */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-8"
          style={{ background: 'linear-gradient(155deg, #eef7f1 0%, #e3f1e8 50%, #d9ece1 100%)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 40px rgba(5,65,42,0.08)' }}>
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-25"
            style={{ background: 'radial-gradient(circle, rgba(59,224,138,0.4), transparent 70%)' }} />
          <div className="relative px-6 pt-10 pb-0 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 inline-block"
              style={{ background: 'rgba(12,98,71,0.1)', color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>
              Skalabel · Modular · Siap Deploy
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>
              Satu unit atau ribuan — semua terhubung
            </h3>
            <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: 'rgba(5,65,42,0.55)' }}>
              MagoGo Smart Chamber dirancang untuk tumbuh bersama bisnis Anda. Pantau seluruh armada dari satu dashboard terpadu.
            </p>
          </div>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/product-lineup.png" alt="MagoGo Smart Chamber lineup" className="w-full object-cover" style={{ maxHeight: '380px', objectPosition: 'center' }} />
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(217,236,225,0.9), transparent)' }} />
          </div>
        </motion.div>

        {/* Tech banner — dark */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16"
          style={{ background: 'linear-gradient(135deg, var(--color-forest) 0%, var(--color-deep) 45%, var(--color-teal) 100%)', border: '1px solid rgba(59,224,138,0.12)' }}>
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(59,224,138,0.1) 0%, transparent 70%)' }} />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}>Tumpukan Teknologi</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Hardware + Cloud + ML dalam satu loop tertutup
              </h3>
              <p className="text-white/50 leading-relaxed">
                MagoGo mengintegrasikan perangkat keras IoT presisi tinggi dengan platform analitik cloud dan mesin inferensi ML. Setiap titik data mengumpan balik ke sistem, menjadikan setiap siklus budidaya lebih cerdas dari sebelumnya.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Sensor IoT', val: '4 tipe', desc: 'Data real-time' },
                { label: 'Aktuator', val: '3 unit', desc: 'Kontrol otomatis' },
                { label: 'Titik Data', val: '1/menit', desc: 'Logging berkelanjutan' },
                { label: 'Model ML', val: 'Live', desc: 'Prediksi pertumbuhan' },
              ].map(item => (
                <div key={item.label} className="rounded-2xl p-5"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-2xl font-bold mb-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-lime)' }}>{item.val}</div>
                  <div className="text-white text-sm font-medium">{item.label}</div>
                  <div className="text-white/30 text-xs mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

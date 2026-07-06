'use client'

import { motion } from 'framer-motion'
import { Leaf, Recycle, Sprout, Building2, ExternalLink } from 'lucide-react'

const partners = [
  { icon: Leaf, category: 'Lingkungan', title: 'Komunitas Lingkungan Hidup', description: 'Bermitra dengan komunitas lingkungan lokal dan nasional untuk mendorong adopsi praktik pengelolaan sampah sirkular yang berkelanjutan.', count: '12+ komunitas', color: '#3be08a' },
  { icon: Recycle, category: 'Pengelolaan Sampah', title: 'Mitra Pengelolaan Sampah', description: 'Berkolaborasi dengan fasilitas pengolahan sampah untuk mengintegrasikan biokonversi BSF dalam skala yang lebih besar.', count: '8 mitra', color: '#f97316' },
  { icon: Sprout, category: 'Pertanian', title: 'Mitra Pertanian', description: 'Bekerja sama dengan petani dan agrobisnis untuk menyuplai pakan ternak berbasis BSF dan pupuk organik berkualitas premium.', count: '20+ petani', color: '#a8ff3e' },
  { icon: Building2, category: 'Pemerintah', title: 'Kolaborasi Pemerintah', description: 'Selaras dengan program peta jalan zero-waste nasional dan inisiatif pengurangan sampah organik perkotaan yang berkelanjutan.', count: '3 program', color: '#3b82f6' },
]

const logos = [
  { src: '/partner-insan-cendekia.png', name: 'MAN Insan Cendekia' },
  { src: '/partner-badan-gizi.png', name: 'Badan Gizi Nasional' },
  { src: '/partner-koperasi.png', name: 'Koperasi Jaa Tahzan' },
  { src: '/partner-bengkel-inovasi.png', name: 'Bengkel Inovasi' },
]

const marqueeLogos = [...logos, ...logos, ...logos, ...logos]

export default function Partners() {
  return (
    <section id="partners" className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F5F7F5 0%, #eef5ee 100%)' }}>
      <div className="absolute inset-0 bg-grid-light opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-emerald-light)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>Ekosistem</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>
            Membangun Masa Depan Bersama
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg max-w-lg mx-auto" style={{ color: 'rgba(5,65,42,0.6)' }}>
            MagoGo tengah membangun ekosistem ekonomi sirkular yang menyeluruh lintas sektor dan industri.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {partners.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl p-6 relative overflow-hidden transition-shadow duration-300"
              style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.95)', boxShadow: '0 4px 24px rgba(5,65,42,0.05)', backdropFilter: 'blur(20px)' }}>
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${p.color}15`, border: `1px solid ${p.color}25` }}>
                  <p.icon size={22} style={{ color: p.color }} />
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: `${p.color}12`, color: p.color, fontFamily: 'Space Mono, monospace' }}>{p.count}</span>
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: p.color, fontFamily: 'Space Mono, monospace' }}>{p.category}</div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(5,65,42,0.65)' }}>{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Logo marquee */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <p className="text-center text-xs font-semibold tracking-widest uppercase mb-8"
            style={{ color: 'rgba(5,65,42,0.35)', fontFamily: 'Space Mono, monospace' }}>Mitra Kami</p>
          <div className="relative overflow-hidden rounded-2xl py-6"
            style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.9)' }}>
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(245,247,245,0.95), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, rgba(245,247,245,0.95), transparent)' }} />
            <div className="animate-marquee">
              {marqueeLogos.map((logo, i) => (
                <div key={i} className="flex-shrink-0 mx-10 flex flex-col items-center gap-3 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.name}
                    className="h-16 w-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" />
                  <span className="text-xs whitespace-nowrap" style={{ color: 'rgba(5,65,42,0.4)', fontFamily: 'Space Mono, monospace' }}>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center rounded-3xl p-10 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--color-forest), var(--color-deep), var(--color-teal))', border: '1px solid rgba(59,224,138,0.15)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center top, rgba(59,224,138,0.1), transparent 60%)' }} />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Tertarik untuk Bermitra?
            </h3>
            <p className="text-white/55 mb-7 max-w-md mx-auto">
              Kami aktif membangun ekosistem kami. Apakah Anda komunitas, pelaku bisnis, atau institusi pemerintah — mari berkolaborasi.
            </p>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{ background: 'var(--color-lime)', color: 'var(--color-forest)', fontFamily: 'Space Grotesk, sans-serif' }}>
              Jelajahi Kemitraan <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

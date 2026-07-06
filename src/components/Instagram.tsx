'use client'

import { motion } from 'framer-motion'
import { Instagram as InstagramIcon, Heart, MessageCircle, ExternalLink } from 'lucide-react'

const posts = [
  { id: 1, caption: 'Hari ke-3 budidaya BSF — pertumbuhan biomassa terlihat luar biasa 🌱 #MagoGo #EkonomiSirkular', likes: 142, comments: 18, bg: 'linear-gradient(135deg, #05412A, #0C6247)', label: 'Update Biomassa', tag: '#Hari3' },
  { id: 2, caption: 'Dashboard real-time menampilkan kondisi optimal di 3 chamber sekaligus. Inilah wujud pertanian cerdas modern.', likes: 287, comments: 34, bg: 'linear-gradient(135deg, #0a1f14, #1B5B5D)', label: 'Dashboard Live', tag: '#IoT' },
  { id: 3, caption: 'Dari sampah organik menjadi pakan ternak premium — satu siklus penuh hanya dalam 10 hari ✅', likes: 398, comments: 52, bg: 'linear-gradient(135deg, #1e3a1a, #1B5B5D40)', label: 'Hari Panen', tag: '#ZeroWaste' },
  { id: 4, caption: 'Desain Smart Chamber terbaru kami. Lebih bersih, lebih cerdas, lebih presisi. Pre-order segera dibuka.', likes: 521, comments: 67, bg: 'linear-gradient(135deg, #2a1a3a, #4a2d7a)', label: 'Perangkat Baru', tag: '#ClimaTech' },
  { id: 5, caption: 'Suhu stabil di 28°C. Pemanas otomatis dan exhaust bekerja sempurna secara sinkron. 🌡️', likes: 184, comments: 22, bg: 'linear-gradient(135deg, #3a1a1a, #7a2d2d)', label: 'Data Sensor', tag: '#Otomasi' },
  { id: 6, caption: 'Workshop bersama 40 petani urban tentang bagaimana IoT mengubah cara pengelolaan sampah organik. 🙌', likes: 312, comments: 45, bg: 'linear-gradient(135deg, #1a2a3a, #2d4f7a)', label: 'Komunitas', tag: '#Workshop' },
]

export default function Instagram() {
  return (
    <section id="instagram" className="section-pad relative overflow-hidden" style={{ background: '#F5F7F5' }}>
      <div className="absolute inset-0 bg-grid-light opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <InstagramIcon size={14} style={{ color: 'var(--color-emerald)' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>Instagram</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>
              Ikuti Perjalanan Kami
            </motion.h2>
          </div>
          <motion.a initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            href="https://instagram.com/magogo.io" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{ background: 'var(--color-forest)', color: 'var(--color-lime)', fontFamily: 'Space Grotesk, sans-serif' }}>
            <InstagramIcon size={16} /> @magogo.io <ExternalLink size={14} />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <motion.div key={post.id}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative rounded-2xl overflow-hidden aspect-square" style={{ background: post.bg }}>
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(59,224,138,0.15)', color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace', border: '1px solid rgba(59,224,138,0.25)' }}>
                    {post.tag}
                  </span>
                  <InstagramIcon size={14} className="text-white/35" />
                </div>
                <div className="flex items-center justify-center flex-1">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <span className="text-xs font-bold" style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}>
                      {post.label.split(' ').map((w: string) => w[0]).join('')}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{post.label}</div>
                  <p className="text-white/45 text-xs leading-relaxed line-clamp-2 mb-2">{post.caption}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1"><Heart size={11} className="text-red-400" /><span className="text-xs text-white/45">{post.likes}</span></div>
                    <div className="flex items-center gap-1"><MessageCircle size={11} className="text-white/35" /><span className="text-xs text-white/45">{post.comments}</span></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: 'rgba(5,65,42,0.65)', backdropFilter: 'blur(4px)' }}>
                <div className="text-center">
                  <InstagramIcon size={28} className="text-white mx-auto mb-2" />
                  <span className="text-white text-sm font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Lihat Postingan</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
          <p className="text-sm mb-4" style={{ color: 'rgba(5,65,42,0.45)' }}>Bergabunglah bersama ribuan orang yang mengikuti perjalanan teknologi iklim kami</p>
          <a href="https://instagram.com/magogo.io" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 glass"
            style={{ color: 'var(--color-forest)', border: '1.5px solid rgba(12,98,71,0.2)', fontFamily: 'Space Grotesk, sans-serif' }}>
            <InstagramIcon size={16} style={{ color: 'var(--color-emerald)' }} /> Ikuti @magogo.io di Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}

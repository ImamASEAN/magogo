'use client'

import { motion } from 'framer-motion'
import { Instagram as InstagramIcon, Heart, MessageCircle, ExternalLink } from 'lucide-react'

const posts = [
  {
    id: 1,
    caption: 'Day 3 of BSF cultivation — biomass growth looking incredible 🌱 #MagoGo #CircularEconomy',
    likes: 142,
    comments: 18,
    bg: 'linear-gradient(135deg, #1a3a2a, #2d7a4f)',
    label: 'Biomass Update',
    tag: '#Day3',
  },
  {
    id: 2,
    caption: 'Real-time dashboard showing optimal conditions across 3 chambers. This is what smart farming looks like.',
    likes: 287,
    comments: 34,
    bg: 'linear-gradient(135deg, #0f2d1f, #1a5c38)',
    label: 'Dashboard Live',
    tag: '#IoT',
  },
  {
    id: 3,
    caption: 'From organic waste to premium animal feed — the full cycle in 10 days ✅',
    likes: 398,
    comments: 52,
    bg: 'linear-gradient(135deg, #1e3a1a, #3dbd6f40)',
    label: 'Harvest Day',
    tag: '#ZeroWaste',
  },
  {
    id: 4,
    caption: 'Our latest Smart Chamber design. Cleaner, smarter, more precise than ever. Pre-orders opening soon.',
    likes: 521,
    comments: 67,
    bg: 'linear-gradient(135deg, #2a1a3a, #4a2d7a)',
    label: 'New Hardware',
    tag: '#ClimaTech',
  },
  {
    id: 5,
    caption: 'Temperature holding steady at 28°C. Automated heater + exhaust working perfectly in sync. 🌡️',
    likes: 184,
    comments: 22,
    bg: 'linear-gradient(135deg, #3a1a1a, #7a2d2d)',
    label: 'Sensor Data',
    tag: '#Automation',
  },
  {
    id: 6,
    caption: 'Workshop with 40 urban farmers on how IoT is changing organic waste management. 🙌',
    likes: 312,
    comments: 45,
    bg: 'linear-gradient(135deg, #1a2a3a, #2d4f7a)',
    label: 'Community',
    tag: '#Workshop',
  },
]

export default function Instagram() {
  return (
    <section
      id="instagram"
      className="section-pad relative overflow-hidden"
      style={{ background: '#f4f6f2' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <InstagramIcon size={14} style={{ color: 'var(--color-emerald)' }} />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}
              >
                Instagram
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
            >
              Follow Our Journey
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://instagram.com/magogo.io "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--color-forest)',
              color: 'var(--color-lime)',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            <InstagramIcon size={16} />
            @magogo.io
            <ExternalLink size={14} />
          </motion.a>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative rounded-2xl overflow-hidden aspect-square"
              style={{ background: post.bg }}
            >
              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                {/* Top tag */}
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(168,255,62,0.2)',
                      color: 'var(--color-lime)',
                      fontFamily: 'Space Mono, monospace',
                      border: '1px solid rgba(168,255,62,0.3)',
                    }}
                  >
                    {post.tag}
                  </span>
                  <InstagramIcon size={14} className="text-white/40" />
                </div>

                {/* Decorative center element */}
                <div className="flex items-center justify-center flex-1">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}
                    >
                      {post.label.split(' ')[0][0]}{post.label.split(' ')[1]?.[0] ?? ''}
                    </span>
                  </div>
                </div>

                {/* Bottom */}
                <div>
                  <div
                    className="text-xs font-semibold text-white mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {post.label}
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed line-clamp-2 mb-3">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Heart size={11} className="text-red-400" />
                      <span className="text-xs text-white/50">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={11} className="text-white/40" />
                      <span className="text-xs text-white/50">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: 'rgba(26,58,42,0.6)', backdropFilter: 'blur(4px)' }}
              >
                <div className="text-center">
                  <InstagramIcon size={28} className="text-white mx-auto mb-2" />
                  <span className="text-white text-sm font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    View Post
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-sm mb-4" style={{ color: 'rgba(26,58,42,0.5)' }}>
            Join thousands following our climate tech journey
          </p>
          <a
            href="https://instagram.com/magogo.io "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 glass"
            style={{
              color: 'var(--color-forest)',
              border: '1.5px solid rgba(45,122,79,0.25)',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            <InstagramIcon size={16} style={{ color: 'var(--color-emerald)' }} />
            Follow @magogo.io on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Instagram, Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Fitur', href: '#product' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Cara Kerja', href: '#how-it-works' },
  { label: 'Harga', href: '#pricing' },
  { label: 'Mitra', href: '#partners' },
  { label: 'Kontak', href: '#contact' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden pt-20 pb-10"
      style={{ background: 'linear-gradient(180deg, #051a0d 0%, #030f08 100%)' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,224,138,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-icon.png" alt="MagoGo" className="h-10 w-auto brightness-0 invert" />
              <span className="font-bold text-2xl tracking-tight text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Mago<span style={{ color: 'var(--color-lime)' }}>Go</span>
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed">
              Mengubah sampah organik menjadi pertumbuhan cerdas melalui teknologi IoT dan ekonomi sirkular.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { href: 'https://instagram.com/magogo.io', icon: Instagram },
                { href: 'mailto:hello@magogo.io', icon: Mail },
              ].map(({ href, icon: Icon }) => (
                <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <Icon size={16} className="text-white/50" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}>Navigasi</div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="text-sm text-white/35 hover:text-white/70 transition-colors">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}>Kontak</div>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-white/25" />
                <a href="mailto:hello@magogo.io" className="text-sm text-white/40 hover:text-white/70 transition-colors">hello@magogo.io</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram size={14} className="text-white/25" />
                <a href="https://instagram.com/magogo.io" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white/70 transition-colors">@magogo.io</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20" style={{ fontFamily: 'Space Mono, monospace' }}>
            © {new Date().getFullYear()} MagoGo. Mengubah sampah, menumbuhkan masa depan.
          </p>
          <button onClick={scrollTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all duration-200 hover:scale-105"
            style={{ background: 'rgba(59,224,138,0.08)', border: '1px solid rgba(59,224,138,0.15)', color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}>
            Kembali ke atas <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  )
}

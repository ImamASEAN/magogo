'use client'

import { motion } from 'framer-motion'
import { Instagram, Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'Technology', href: '#product' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      className="relative overflow-hidden pt-20 pb-10"
      style={{ background: 'var(--color-forest)' }}
    >
      {/* Glow orb */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(168,255,62,0.08) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center animate-pulse-glow"
                style={{ background: 'linear-gradient(135deg, #2d7a4f, #a8ff3e)' }}
              >
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>M</span>
              </div>
              <span
                className="font-bold text-2xl tracking-tight text-white"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Mago<span style={{ color: 'var(--color-lime)' }}>Go</span>
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Turning organic waste into smart growth through IoT and circular economy technology.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/magogo.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Instagram size={16} className="text-white/60" />
              </a>
              <a
                href="mailto:hello@magogo.io"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Mail size={16} className="text-white/60" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}
            >
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              {navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/45 hover:text-white/80 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact quick */}
          <div>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}
            >
              Contact
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-white/30" />
                <a href="mailto:hello@magogo.io" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                  hello@magogo.io
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram size={14} className="text-white/30" />
                <a href="https://instagram.com/magogo.io" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                  @magogo.io
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} className="mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25" style={{ fontFamily: 'Space Mono, monospace' }}>
            © {new Date().getFullYear()} MagoGo. Transforming waste, growing futures.
          </p>

          <button
            onClick={scrollTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all duration-200 hover:scale-105"
            style={{
              background: 'rgba(168,255,62,0.1)',
              border: '1px solid rgba(168,255,62,0.2)',
              color: 'var(--color-lime)',
              fontFamily: 'Space Mono, monospace',
            }}
          >
            Back to top
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  )
}

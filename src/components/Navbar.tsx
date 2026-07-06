'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Beranda', href: '#home' },
  { label: 'Fitur', href: '#product' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Harga', href: '#pricing' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(5,30,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(59,224,138,0.1)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-icon.png" alt="MagoGo" className="h-9 w-auto brightness-0 invert" />
          <span className="font-bold text-xl text-white tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Mago<span style={{ color: 'var(--color-lime)' }}>Go</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="nav-link text-sm font-medium transition-colors"
              style={{ color: 'rgba(255,255,255,0.75)' }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{ background: 'var(--color-lime)', color: 'var(--color-forest)', fontFamily: 'Space Grotesk, sans-serif', boxShadow: '0 4px 16px rgba(59,224,138,0.3)' }}>
            Beli Sekarang
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg" style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          onClick={() => setOpen(!open)}>
          {open ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(5,30,16,0.98)', borderTop: '1px solid rgba(59,224,138,0.1)' }}>
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-white/75 font-medium py-2 border-b border-white/5" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 py-3 rounded-full text-sm font-semibold text-center"
                style={{ background: 'var(--color-lime)', color: 'var(--color-forest)' }}
                onClick={() => setOpen(false)}>
                Beli Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

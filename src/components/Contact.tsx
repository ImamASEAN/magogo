'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, MapPin, ArrowRight, CheckCircle, Send } from 'lucide-react'

type FormState = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setState('sending')
    await new Promise(r => setTimeout(r, 1500))
    setState('sent')
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'hello@magogo.io', href: 'mailto:hello@magogo.io', color: '#3b82f6' },
    { icon: Instagram, label: 'Instagram', value: '@magogo.io', href: 'https://instagram.com/magogo.io', color: '#e1306c' },
    { icon: MapPin, label: 'Location', value: 'Indonesia 🇮🇩', href: '#', color: 'var(--color-emerald-light)' },
  ]

  return (
    <section id="contact" className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #e8ede5 0%, #f4f6f2 100%)' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(61,189,111,0.5), transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-lime)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>Contact</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>
            Ready To Transform Waste?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg max-w-md mx-auto" style={{ color: 'rgba(5,65,42,0.6)' }}>
            Whether you want to order, partner, or just learn more — we'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="space-y-4 mb-10">
              {contactItems.map((item, i) => (
                <motion.a key={item.label} href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-shadow duration-300 hover:shadow-md"
                  style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-xs" style={{ color: 'rgba(5,65,42,0.45)', fontFamily: 'Space Mono, monospace' }}>{item.label}</div>
                    <div className="font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>{item.value}</div>
                  </div>
                  <ArrowRight size={16} className="ml-auto" style={{ color: 'rgba(5,65,42,0.3)' }} />
                </motion.a>
              ))}
            </div>
            <div className="rounded-2xl p-5"
              style={{ background: 'linear-gradient(135deg, rgba(5,65,42,0.06), rgba(12,98,71,0.06))', border: '1px solid rgba(12,98,71,0.15)' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-lime)' }} />
                <span className="text-xs font-semibold" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>RESPONSE TIME</span>
              </div>
              <p className="text-sm" style={{ color: 'rgba(5,65,42,0.7)' }}>
                We typically respond within <strong style={{ color: 'var(--color-forest)' }}>24 hours</strong>. For urgent inquiries, reach us on Instagram.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-8"
            style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 40px rgba(5,65,42,0.08)', backdropFilter: 'blur(20px)' }}>
            {state === 'sent' ? (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'rgba(61,189,111,0.15)' }}>
                  <CheckCircle size={28} style={{ color: 'var(--color-emerald-light)' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>Message sent!</h3>
                <p className="text-sm" style={{ color: 'rgba(5,65,42,0.6)' }}>We'll be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>Send a message</h3>
                <div className="space-y-4">
                  {[
                    { key: 'name', label: 'YOUR NAME', placeholder: 'e.g. John Doe', type: 'text' },
                    { key: 'email', label: 'EMAIL ADDRESS', placeholder: 'you@example.com', type: 'email' },
                  ].map(field => (
                    <div key={field.key}>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(5,65,42,0.5)', fontFamily: 'Space Mono, monospace' }}>{field.label}</label>
                      <input type={field.type} value={form[field.key as 'name'|'email']}
                        onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: 'rgba(5,65,42,0.04)', border: '1px solid rgba(5,65,42,0.12)', color: 'var(--color-forest)' }}
                        onFocus={e => e.target.style.borderColor = 'var(--color-emerald-light)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(5,65,42,0.12)'}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(5,65,42,0.5)', fontFamily: 'Space Mono, monospace' }}>MESSAGE</label>
                    <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us about your interest in MagoGo..." rows={4}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{ background: 'rgba(5,65,42,0.04)', border: '1px solid rgba(5,65,42,0.12)', color: 'var(--color-forest)' }}
                      onFocus={e => e.target.style.borderColor = 'var(--color-emerald-light)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(5,65,42,0.12)'}
                    />
                  </div>
                  <button onClick={handleSubmit} disabled={state === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] disabled:scale-100 disabled:opacity-70"
                    style={{ background: 'var(--color-forest)', color: 'var(--color-lime)', fontFamily: 'Space Grotesk, sans-serif', boxShadow: '0 4px 20px rgba(5,65,42,0.2)' }}>
                    {state === 'sending' ? (
                      <><div className="w-4 h-4 rounded-full border-2 border-lime-400/40 border-t-lime-400 animate-spin" />Sending...</>
                    ) : (
                      <><Send size={15} />Send Message</>
                    )}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

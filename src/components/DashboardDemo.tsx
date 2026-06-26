'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Thermometer, Droplets, Scale, Wifi, Bell, Settings,
  TrendingUp, Calendar, Zap, BarChart2, Play, RefreshCcw,
  CheckCircle, AlertCircle, ChevronUp, ChevronDown
} from 'lucide-react'

const SENSOR_DATA = {
  temperature: { value: 28, unit: '°C', min: 24, max: 32, ideal: 28, label: 'Temperature', icon: Thermometer, color: '#f97316' },
  humidity: { value: 70, unit: '%', min: 60, max: 85, ideal: 72, label: 'Humidity', icon: Droplets, color: '#3b82f6' },
  ph: { value: 6.2, unit: 'pH', min: 5.5, max: 7.5, ideal: 6.5, label: 'pH Level', icon: BarChart2, color: '#a855f7' },
  biomass: { value: 850, unit: 'g', min: 0, max: 2000, ideal: 1500, label: 'Biomass', icon: Scale, color: '#a8ff3e' },
}

type ActionState = 'idle' | 'running' | 'done'

export default function DashboardDemo() {
  const [data, setData] = useState(SENSOR_DATA)
  const [optimizeState, setOptimizeState] = useState<ActionState>('idle')
  const [analyzeState, setAnalyzeState] = useState<ActionState>('idle')
  const [analysisText, setAnalysisText] = useState('')
  const [activeTab, setActiveTab] = useState<'overview' | 'growth'>('overview')

  const handleOptimize = async () => {
    setOptimizeState('running')
    await new Promise(r => setTimeout(r, 1800))
    setData(prev => ({
      ...prev,
      temperature: { ...prev.temperature, value: 28 },
      humidity: { ...prev.humidity, value: 72 },
    }))
    setOptimizeState('done')
    setTimeout(() => setOptimizeState('idle'), 3000)
  }

  const handleAnalyze = async () => {
    setAnalyzeState('running')
    setAnalysisText('')
    const messages = [
      '▸ Scanning sensor array...',
      '▸ Evaluating growth trajectory...',
      '▸ Comparing historical cycles...',
      '▸ Running harvest model...',
      '✓ Analysis complete. Harvest optimal in 5 days.',
    ]
    for (const msg of messages) {
      await new Promise(r => setTimeout(r, 600))
      setAnalysisText(msg)
    }
    setAnalyzeState('done')
    setTimeout(() => { setAnalyzeState('idle'); setAnalysisText('') }, 5000)
  }

  const getBarWidth = (s: typeof SENSOR_DATA[keyof typeof SENSOR_DATA]) => {
    const pct = ((s.value - s.min) / (s.max - s.min)) * 100
    return Math.min(100, Math.max(0, pct))
  }

  return (
    <section
      id="dashboard"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f4f6f2 0%, #e8ede5 100%)' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-lime)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-emerald)', fontFamily: 'Space Mono, monospace' }}>
              Live Demo
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
          >
            The MagoGo Dashboard
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-lg mx-auto"
            style={{ color: 'rgba(26,58,42,0.6)' }}
          >
            Monitor, control, and predict — from anywhere in the world.
          </motion.p>
        </div>

        {/* Dashboard UI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(255,255,255,0.8)',
            boxShadow: '0 20px 80px rgba(26,58,42,0.12)',
            backdropFilter: 'blur(30px)',
          }}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{
              background: 'var(--color-forest)',
              borderBottom: '1px solid rgba(168,255,62,0.15)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {['#ef4444', '#f59e0b', '#22c55e'].map(c => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <span className="text-white/60 text-xs ml-2" style={{ fontFamily: 'Space Mono, monospace' }}>
                magogo.io/dashboard
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Wifi size={13} style={{ color: 'var(--color-lime)' }} />
                <span className="text-xs" style={{ color: 'var(--color-lime)', fontFamily: 'Space Mono, monospace' }}>
                  ONLINE
                </span>
              </div>
              <Bell size={16} className="text-white/40" />
              <Settings size={16} className="text-white/40" />
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* Device header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <div className="text-xs text-forest/40 uppercase tracking-widest font-mono mb-1">Device</div>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
                >
                  Smart Chamber #01
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--color-lime)' }} />
                  <span className="text-xs" style={{ color: 'var(--color-emerald-light)' }}>Operational · Last sync 2s ago</span>
                </div>
              </div>

              {/* AI prediction card */}
              <div
                className="rounded-2xl px-6 py-4 animate-pulse-glow"
                style={{
                  background: 'linear-gradient(135deg, rgba(26,58,42,0.9), rgba(45,122,79,0.8))',
                  border: '1px solid rgba(168,255,62,0.3)',
                }}
              >
                <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Mono, monospace' }}>
                  AI PREDICTION
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} style={{ color: 'var(--color-lime)' }} />
                  <span className="font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Harvest in <span style={{ color: 'var(--color-lime)' }}>5 days</span>
                  </span>
                </div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Est. biomass: ~1,400g
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {[{ id: 'overview', label: 'Overview' }, { id: 'growth', label: 'Growth Data' }].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'overview' | 'growth')}
                  className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                  style={{
                    background: activeTab === tab.id ? 'var(--color-forest)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--color-lime)' : 'rgba(26,58,42,0.5)',
                    border: activeTab === tab.id ? 'none' : '1px solid rgba(26,58,42,0.15)',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8"
                >
                  {Object.values(data).map((sensor) => (
                    <div
                      key={sensor.label}
                      className="rounded-2xl p-5"
                      style={{
                        background: 'rgba(255,255,255,0.8)',
                        border: '1px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 2px 12px rgba(26,58,42,0.05)',
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <sensor.icon size={16} style={{ color: sensor.color }} />
                          <span className="text-sm font-medium" style={{ color: 'rgba(26,58,42,0.6)' }}>
                            {sensor.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs" style={{ color: 'rgba(26,58,42,0.4)', fontFamily: 'Space Mono, monospace' }}>
                          <span>{sensor.min}{sensor.unit}</span>
                          <span className="mx-1">—</span>
                          <span>{sensor.max}{sensor.unit}</span>
                        </div>
                      </div>

                      <div
                        className="text-3xl font-bold mb-3"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}
                      >
                        {sensor.value}
                        <span className="text-lg ml-1" style={{ color: sensor.color }}>{sensor.unit}</span>
                      </div>

                      {/* Progress bar */}
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(26,58,42,0.08)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${getBarWidth(sensor)}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${sensor.color}80, ${sensor.color})` }}
                        />
                      </div>

                      <div className="flex items-center gap-1.5 mt-2.5">
                        {Math.abs(sensor.value - sensor.ideal) <= (sensor.max - sensor.min) * 0.1 ? (
                          <>
                            <CheckCircle size={12} style={{ color: 'var(--color-emerald-light)' }} />
                            <span className="text-xs" style={{ color: 'var(--color-emerald-light)' }}>Within ideal range</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle size={12} style={{ color: '#f97316' }} />
                            <span className="text-xs" style={{ color: '#f97316' }}>Adjusting...</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'growth' && (
                <motion.div
                  key="growth"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-8"
                >
                  {/* Fake chart */}
                  <div
                    className="rounded-2xl p-6"
                    style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.9)' }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-forest)' }}>
                          Biomass Growth Trajectory
                        </div>
                        <div className="text-sm" style={{ color: 'rgba(26,58,42,0.5)' }}>Day 1 → Day 10 projection</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} style={{ color: 'var(--color-emerald-light)' }} />
                        <span className="text-sm font-semibold" style={{ color: 'var(--color-emerald-light)' }}>+12% / day</span>
                      </div>
                    </div>

                    {/* SVG Chart */}
                    <svg viewBox="0 0 500 160" className="w-full" style={{ overflow: 'visible' }}>
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#a8ff3e" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#a8ff3e" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      {[0, 40, 80, 120, 160].map(y => (
                        <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="rgba(26,58,42,0.06)" strokeWidth="1" />
                      ))}
                      {/* Area fill */}
                      <path
                        d="M 0 155 L 50 145 L 100 132 L 150 115 L 200 95 L 250 75 L 300 55 L 350 40 L 400 30 L 450 25 L 500 20 L 500 160 L 0 160 Z"
                        fill="url(#chartGrad)"
                      />
                      {/* Line */}
                      <motion.path
                        d="M 0 155 L 50 145 L 100 132 L 150 115 L 200 95 L 250 75 L 300 55 L 350 40 L 400 30 L 450 25 L 500 20"
                        fill="none"
                        stroke="#a8ff3e"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                      />
                      {/* Current day dot */}
                      <circle cx="300" cy="55" r="5" fill="#a8ff3e" />
                      <circle cx="300" cy="55" r="10" fill="rgba(168,255,62,0.2)" />
                      {/* Day labels */}
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, i) => (
                        <text key={d} x={i * 55.5} y="175" fontSize="11" fill="rgba(26,58,42,0.4)" fontFamily="Space Mono, monospace">
                          D{d}
                        </text>
                      ))}
                    </svg>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleOptimize}
                disabled={optimizeState === 'running'}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:opacity-70"
                style={{
                  background: optimizeState === 'done'
                    ? 'rgba(61,189,111,0.2)'
                    : 'var(--color-forest)',
                  color: optimizeState === 'done' ? 'var(--color-emerald-light)' : 'var(--color-lime)',
                  fontFamily: 'Space Grotesk, sans-serif',
                  boxShadow: '0 4px 16px rgba(26,58,42,0.2)',
                }}
              >
                {optimizeState === 'running' ? (
                  <><RefreshCcw size={15} className="animate-spin" /> Optimizing...</>
                ) : optimizeState === 'done' ? (
                  <><CheckCircle size={15} /> Optimized</>
                ) : (
                  <><Zap size={15} /> Optimize Environment</>
                )}
              </button>

              <button
                onClick={handleAnalyze}
                disabled={analyzeState === 'running'}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:opacity-70"
                style={{
                  background: 'transparent',
                  color: 'var(--color-forest)',
                  border: '1.5px solid rgba(45,122,79,0.3)',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {analyzeState === 'running' ? (
                  <><RefreshCcw size={15} className="animate-spin" /> Analyzing...</>
                ) : (
                  <><Play size={15} /> Run Analysis</>
                )}
              </button>

              <button
                onClick={() => setActiveTab('growth')}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'transparent',
                  color: 'var(--color-forest)',
                  border: '1.5px solid rgba(45,122,79,0.3)',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                <BarChart2 size={15} /> View Growth Data
              </button>
            </div>

            {/* Analysis output */}
            <AnimatePresence>
              {analysisText && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 rounded-xl px-5 py-4"
                  style={{
                    background: 'rgba(26,58,42,0.06)',
                    border: '1px solid rgba(45,122,79,0.2)',
                    fontFamily: 'Space Mono, monospace',
                  }}
                >
                  <span className="text-sm" style={{ color: 'var(--color-emerald)' }}>
                    {analysisText}
                  </span>
                  <span className="animate-blink" style={{ color: 'var(--color-lime)' }}>_</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

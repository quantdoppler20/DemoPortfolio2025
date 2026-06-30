import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TICKER_TEXT = [
  '// QUANTDOPPLER SYSTEMS ONLINE',
  '// SOVEREIGN STACK INITIALIZED',
  '// ENTERPRISE-GRADE ENGINEERING ACTIVE',
  '// EST. ORBIT — ZERO HANDOFFS',
  '// ALL SYSTEMS OPERATIONAL',
  '// DEEP-TECH BUREAU ENGAGED',
  '// MISSION PARAMETERS LOADED',
  '// SINGLE TRAJECTORY. ZERO COMPROMISE.',
  '// INITIATE ENGAGEMENT',
].join('   ·   ')

const SoundSystem = () => {
  const [showTicker, setShowTicker] = useState(true)
  const ctxRef = useRef(null)

  const getCtx = () => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
    if (ctxRef.current.state === 'suspended') ctxRef.current.resume()
    return ctxRef.current
  }

  const playSamurai = () => {
    try {
      const ctx = getCtx()
      const t = ctx.currentTime

      // Layer 1 — sharp metallic CHING (the blade edge)
      const osc1 = ctx.createOscillator()
      const gain1 = ctx.createGain()
      const filter1 = ctx.createBiquadFilter()
      filter1.type = 'bandpass'
      filter1.frequency.value = 3800
      filter1.Q.value = 10
      osc1.connect(filter1)
      filter1.connect(gain1)
      gain1.connect(ctx.destination)
      osc1.type = 'sawtooth'
      osc1.frequency.setValueAtTime(4200, t)
      osc1.frequency.exponentialRampToValueAtTime(1000, t + 0.12)
      gain1.gain.setValueAtTime(0, t)
      gain1.gain.linearRampToValueAtTime(0.14, t + 0.003)
      gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.22)
      osc1.start(t)
      osc1.stop(t + 0.28)

      // Layer 2 — high shimmer ring (metallic resonance)
      const osc2 = ctx.createOscillator()
      const gain2 = ctx.createGain()
      osc2.connect(gain2)
      gain2.connect(ctx.destination)
      osc2.type = 'sine'
      osc2.frequency.setValueAtTime(6500, t + 0.002)
      osc2.frequency.exponentialRampToValueAtTime(2800, t + 0.1)
      gain2.gain.setValueAtTime(0.08, t + 0.002)
      gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.2)
      osc2.start(t + 0.002)
      osc2.stop(t + 0.25)

      // Layer 3 — body resonance (low metallic body of blade)
      const osc3 = ctx.createOscillator()
      const gain3 = ctx.createGain()
      osc3.connect(gain3)
      gain3.connect(ctx.destination)
      osc3.type = 'triangle'
      osc3.frequency.setValueAtTime(900, t + 0.004)
      osc3.frequency.exponentialRampToValueAtTime(280, t + 0.18)
      gain3.gain.setValueAtTime(0.05, t + 0.004)
      gain3.gain.exponentialRampToValueAtTime(0.001, t + 0.22)
      osc3.start(t + 0.004)
      osc3.stop(t + 0.28)
    } catch (e) {}
  }

  const playHover = () => {
    try {
      const ctx = getCtx()
      const t = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.type = 'sine'
      osc.frequency.setValueAtTime(2200, t)
      osc.frequency.exponentialRampToValueAtTime(1400, t + 0.04)
      gain.gain.setValueAtTime(0.018, t)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06)
      osc.start(t)
      osc.stop(t + 0.07)
    } catch (e) {}
  }

  useEffect(() => {
    const handleClick = (e) => {
      const isInteractive =
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a')
      if (isInteractive) playSamurai()
    }

    const handleHover = (e) => {
      const isInteractive =
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a')
      if (isInteractive) playHover()
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('touchend', handleClick)
    document.addEventListener('mouseover', handleHover)

    const t = setTimeout(() => setShowTicker(false), 10000)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('touchend', handleClick)
      document.removeEventListener('mouseover', handleHover)
      clearTimeout(t)
    }
  }, [])

  const doubled = TICKER_TEXT + '   ·   ' + TICKER_TEXT

  return (
    <AnimatePresence>
      {showTicker && (
        <motion.div
          key="ticker"
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -32 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-[90] overflow-hidden pointer-events-none"
        >
          <div
            className="relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(4,18,28,0.9) 100%)',
              borderBottom: '1px solid rgba(34,211,238,0.25)',
              boxShadow: '0 2px 20px rgba(34,211,238,0.08)'
            }}
          >
            <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)' }} />
            <div className="py-1.5 overflow-hidden flex">
              <motion.span
                className="whitespace-nowrap font-mono text-[10px] tracking-widest shrink-0"
                style={{ color: 'rgba(34,211,238,0.85)' }}
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
              >
                {doubled}
              </motion.span>
            </div>
            <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-cyan-400/50" />
            <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-cyan-400/50" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-cyan-400/30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-cyan-400/30" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SoundSystem

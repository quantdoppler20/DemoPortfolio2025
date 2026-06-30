import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TICKER_TEXT = [
  '// QUANTDOPPLER SYSTEMS ONLINE',
  '// SOVEREIGN STACK INITIALIZED',
  '// FULL-STACK ENGINEER & AI INTEGRATOR',
  '// EST. ORBIT — ENTERPRISE GRADE',
  '// ALL SYSTEMS OPERATIONAL',
  '// DEEP-TECH ENGINEERING ACTIVE',
  '// WELCOME, COMMANDER',
  '// MISSION PARAMETERS LOADED',
  '// ZERO HANDOFFS. ZERO COMPROMISE.',
].join('   ·   ')

const SoundSystem = () => {
  const [showTicker, setShowTicker] = useState(true)
  const ctxRef = useRef(null)
  const tickerShownRef = useRef(false)

  const getCtx = () => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
    if (ctxRef.current.state === 'suspended') ctxRef.current.resume()
    return ctxRef.current
  }

  const playClick = () => {
    try {
      const ctx = getCtx()
      const t = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.type = 'sine'
      osc.frequency.setValueAtTime(1400, t)
      osc.frequency.exponentialRampToValueAtTime(700, t + 0.05)
      gain.gain.setValueAtTime(0.04, t)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08)
      osc.start(t)
      osc.stop(t + 0.1)
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
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(900, t)
      gain.gain.setValueAtTime(0.015, t)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06)
      osc.start(t)
      osc.stop(t + 0.07)
    } catch (e) {}
  }

  useEffect(() => {
    // Click / touch sound on every interactive element
    const handleClick = (e) => {
      const tag = e.target.tagName
      const isInteractive =
        tag === 'BUTTON' ||
        tag === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a')
      if (isInteractive) playClick()
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

    // Ticker visible for 10 seconds
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
          {/* Top accent glow */}
          <div
            className="relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(4,18,28,0.9) 100%)',
              borderBottom: '1px solid rgba(34,211,238,0.25)',
              boxShadow: '0 2px 20px rgba(34,211,238,0.08)'
            }}
          >
            {/* Shimmer line */}
            <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)' }} />

            {/* Scrolling text */}
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

            {/* Corner brackets - futuristic HUD */}
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

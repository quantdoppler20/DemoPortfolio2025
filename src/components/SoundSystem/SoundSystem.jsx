import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const t = setTimeout(() => setShowTicker(false), 10000)
    return () => clearTimeout(t)
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

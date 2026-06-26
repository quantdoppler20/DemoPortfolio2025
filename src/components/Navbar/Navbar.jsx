import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { id: '01', label: 'Home', href: '#home', code: 'SYS.HOME' },
  { id: '02', label: 'Arsenal', href: '#arsenal', code: 'SYS.SKILLS' },
  { id: '03', label: 'Roadmap', href: '#roadmap', code: 'SYS.TIMELINE' },
  { id: '04', label: 'Projects', href: '#projects', code: 'SYS.MISSIONS' },
  { id: '05', label: 'Involvements', href: '#professional', code: 'SYS.NETWORK' },
  { id: '06', label: 'Contact', href: '#contact', code: 'SYS.UPLINK' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/ehiane' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ehiane-oigiagbe/' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = (href) => {
    setIsOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <div className="fixed top-16 left-0 w-full z-40 flex items-center justify-between px-6 py-4 pointer-events-none">

        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="pointer-events-auto group relative ml-auto flex items-center gap-3 px-4 py-2 rounded-md border border-cosmic-glow/30 bg-cosmic-black/60 backdrop-blur-sm hover:border-cosmic-glow/70 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-glow"
        >
          <span className="font-mono text-xs text-cosmic-glow tracking-[0.2em]">MENU</span>
          <span className="flex flex-col gap-[3px] w-5">
            <span className="h-[1.5px] w-full bg-cosmic-glow transition-transform duration-300 group-hover:translate-x-1" />
            <span className="h-[1.5px] w-3/4 bg-cosmic-glow/70 transition-transform duration-300 group-hover:translate-x-1.5" />
            <span className="h-[1.5px] w-1/2 bg-cosmic-glow/50 transition-transform duration-300 group-hover:translate-x-2" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-cosmic-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="fixed top-0 left-0 z-50 h-full w-full sm:w-[420px] bg-cosmic-black border-r border-cosmic-glow/20 flex flex-col overflow-y-auto custom-scrollbar"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(180deg, rgba(100,255,218,0.04) 0px, transparent 2px, transparent 4px)',
                }}
              />

              <div className="relative flex items-center justify-between px-6 py-5 border-b border-cosmic-glow/15">
                <div className="font-mono text-xs text-cosmic-glow/80 tracking-widest">
                  NAV.SYSTEM <span className="terminal-cursor w-2 h-3 ml-1 align-middle" />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="font-mono text-xs text-white/60 hover:text-cosmic-glow border border-white/10 hover:border-cosmic-glow/50 rounded-md px-3 py-1.5 transition-colors"
                >
                  ESC ✕
                </button>
              </div>

              <nav className="relative flex-1 px-6 py-8">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="group w-full flex items-baseline justify-between py-4 border-b border-white/5 text-left"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono text-xs text-cosmic-glow/50 group-hover:text-cosmic-glow transition-colors">
                            {link.id}
                          </span>
                          <span className="text-2xl sm:text-3xl font-sans font-medium text-white/80 group-hover:text-cosmic-glow group-hover:translate-x-2 inline-block transition-all duration-300">
                            {link.label}
                          </span>
                        </span>
                        <span className="font-mono text-[10px] text-white/30 group-hover:text-cosmic-accent transition-colors hidden sm:inline">
                          {link.code}
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="relative px-6 py-6 border-t border-cosmic-glow/15 font-mono text-[11px] text-white/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span>STATUS</span>
                  <span className="text-cosmic-glow flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cosmic-glow animate-pulse-slow" />
                    ONLINE
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>LOCATION</span>
                  <span>SECTOR // PORTFOLIO-7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>BUILD</span>
                  <span>v1.0.0-cosmic</span>
                </div>

                <div className="pt-3 flex flex-wrap gap-x-4 gap-y-2 text-white/50">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cosmic-glow transition-colors underline-offset-4 hover:underline"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

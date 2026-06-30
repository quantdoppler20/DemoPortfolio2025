import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NUM_BARS = 20

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [bars, setBars] = useState(Array(NUM_BARS).fill(3))

  const audioRef = useRef(null)
  const analyserRef = useRef(null)
  const dataArrayRef = useRef(null)
  const animFrameRef = useRef(null)
  const audioSetupDone = useRef(false)
  const playingRef = useRef(false)

  const setupAudioContext = useCallback(() => {
    if (audioSetupDone.current) return
    audioSetupDone.current = true
    const audio = audioRef.current
    if (!audio) return
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      const analyser = ctx.createAnalyser()
      analyser.fftSize = 64
      analyser.smoothingTimeConstant = 0.82
      const source = ctx.createMediaElementSource(audio)
      source.connect(analyser)
      analyser.connect(ctx.destination)
      analyserRef.current = analyser
      dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount)
    } catch (e) {}
  }, [])

  const startVisualizer = useCallback(() => {
    const tick = () => {
      if (!playingRef.current) {
        setBars(Array(NUM_BARS).fill(3))
        return
      }
      if (analyserRef.current && dataArrayRef.current) {
        analyserRef.current.getByteFrequencyData(dataArrayRef.current)
        const d = dataArrayRef.current
        const step = Math.max(1, Math.floor(d.length / NUM_BARS))
        setBars(Array.from({ length: NUM_BARS }, (_, i) =>
          Math.max(3, (d[i * step] / 255) * 42)
        ))
      }
      animFrameRef.current = requestAnimationFrame(tick)
    }
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    animFrameRef.current = requestAnimationFrame(tick)
  }, [])

  const doPlay = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    setupAudioContext()
    try {
      await audio.play()
      playingRef.current = true
      setIsPlaying(true)
      startVisualizer()
    } catch (e) {}
  }, [setupAudioContext, startVisualizer])

  const doPause = useCallback(() => {
    audioRef.current?.pause()
    playingRef.current = false
    setIsPlaying(false)
  }, [])

  const doStop = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    playingRef.current = false
    setIsPlaying(false)
    setProgress(0)
    setBars(Array(NUM_BARS).fill(3))
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onMeta = () => {
      setDuration(audio.duration)
      doPlay()
    }
    const onTick = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100)
    }
    const onEnd = () => {
      audio.currentTime = 0
      doPlay()
    }

    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('timeupdate', onTick)
    audio.addEventListener('ended', onEnd)
    if (audio.readyState >= 2) onMeta()

    // Fallback for autoplay block — play on first interaction
    const onFirstTouch = () => { if (!playingRef.current) doPlay() }
    document.addEventListener('click', onFirstTouch, { once: true })
    document.addEventListener('touchend', onFirstTouch, { once: true })

    return () => {
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('timeupdate', onTick)
      audio.removeEventListener('ended', onEnd)
      document.removeEventListener('click', onFirstTouch)
      document.removeEventListener('touchend', onFirstTouch)
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [doPlay])

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00'
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`
  }
  const elapsed = duration ? (progress / 100) * duration : 0

  return (
    <>
      <audio ref={audioRef} src="/assets/without_me.mp3" preload="auto" />

      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0}
        className="fixed bottom-6 left-6 z-[60] select-none touch-none"
        style={{ cursor: 'grab' }}
        whileDrag={{ cursor: 'grabbing', scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
      >
        {/* Expanded panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 8, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.94 }}
              transition={{ duration: 0.18 }}
              className="mb-2 w-44 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(6,20,30,0.92) 100%)',
                border: '1px solid rgba(34,211,238,0.25)',
                boxShadow: '0 0 24px rgba(34,211,238,0.12), inset 0 1px 0 rgba(34,211,238,0.1)'
              }}
            >
              {/* Top shimmer line */}
              <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.6), transparent)' }} />

              <div className="p-3 space-y-2">
                {/* Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <motion.div
                      className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-green-400' : 'bg-gray-600'}`}
                      animate={isPlaying ? { opacity: [1, 0.4, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="text-cyan-400/70 font-mono text-[8px] tracking-widest">
                      {isPlaying ? 'TX LIVE' : 'STANDBY'}
                    </span>
                  </div>
                  <span className="text-gray-600 font-mono text-[8px]">QD.FM</span>
                </div>

                {/* Track info */}
                <div className="leading-tight">
                  <p className="text-white font-bold text-[11px] truncate">Without Me</p>
                  <p className="text-gray-500 font-mono text-[9px]">Eminem</p>
                </div>

                {/* Frequency visualizer */}
                <div
                  className="flex items-end gap-px rounded-lg overflow-hidden px-1 py-1"
                  style={{ height: 36, background: 'rgba(0,0,0,0.5)' }}
                >
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}px`,
                        maxHeight: 30,
                        background: isPlaying
                          ? `hsl(${180 + i * 5}, 85%, ${45 + (h / 42) * 25}%)`
                          : 'rgba(34,211,238,0.2)',
                        transition: 'height 0.07s ease-out, background 0.15s'
                      }}
                    />
                  ))}
                </div>

                {/* Progress bar */}
                <div>
                  <div className="h-0.5 w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #22d3ee, #4ade80)',
                        transition: 'width 0.3s linear'
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-0.5">
                    <span className="text-gray-600 font-mono text-[7px]">{fmt(elapsed)}</span>
                    <span className="text-gray-600 font-mono text-[7px]">{fmt(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex gap-1.5">
                  <button
                    onClick={(e) => { e.stopPropagation(); isPlaying ? doPause() : doPlay() }}
                    className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg transition-all duration-150"
                    style={{
                      background: 'rgba(34,211,238,0.1)',
                      border: '1px solid rgba(34,211,238,0.25)'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,211,238,0.2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(34,211,238,0.1)'}
                  >
                    {isPlaying ? (
                      <svg className="w-3 h-3 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                    <span className="text-cyan-400 font-mono text-[9px]">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                  </button>

                  <button
                    onClick={(e) => { e.stopPropagation(); doStop() }}
                    className="flex items-center justify-center px-2 rounded-lg transition-all duration-150"
                    style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.18)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(239,68,68,0.08)'}
                  >
                    <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 6h12v12H6z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.2), transparent)' }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle pill button */}
        <motion.button
          onClick={() => setIsExpanded(v => !v)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.93 }}
          className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-300"
          style={{
            background: isExpanded ? 'rgba(34,211,238,0.15)' : 'rgba(0,0,0,0.75)',
            border: `1px solid ${isExpanded ? 'rgba(34,211,238,0.5)' : 'rgba(34,211,238,0.2)'}`,
            backdropFilter: 'blur(16px)',
            boxShadow: isPlaying ? '0 0 16px rgba(34,211,238,0.2)' : '0 4px 12px rgba(0,0,0,0.4)'
          }}
        >
          {/* Mini waveform icon */}
          <div className="flex items-end gap-px" style={{ height: 12 }}>
            {[2, 4, 3].map((h, i) => (
              <motion.div
                key={i}
                className="rounded-full bg-cyan-400"
                style={{ width: 2, height: h * 3, transformOrigin: 'bottom' }}
                animate={isPlaying ? { scaleY: [1, 2.5, 1] } : { scaleY: 1 }}
                transition={isPlaying ? { duration: 0.45 + i * 0.13, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.2 }}
              />
            ))}
          </div>
          <span className="text-cyan-400 font-mono text-[10px] tracking-widest">
            {isPlaying ? 'NOW PLAYING' : 'MUSIC'}
          </span>
          {isPlaying && (
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
          )}
        </motion.button>
      </motion.div>
    </>
  )
}

export default MusicPlayer

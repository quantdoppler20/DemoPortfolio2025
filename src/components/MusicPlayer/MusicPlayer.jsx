import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    const onLoaded = () => setDuration(audio.duration)

    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('loadedmetadata', onLoaded)
    audio.addEventListener('ended', () => {
      audio.currentTime = 0
      audio.play()
    })

    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('loadedmetadata', onLoaded)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const stop = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    setIsPlaying(false)
    setProgress(0)
  }

  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return '0:00'
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  const currentTime = duration ? (progress / 100) * duration : 0

  const bars = [3, 5, 4, 7, 6, 4, 5, 3, 6, 4]

  return (
    <>
      <audio ref={audioRef} src="/assets/without_me.mp3" preload="metadata" />

      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-black/90 backdrop-blur-md border border-cyan-500/40 rounded-xl p-4 w-64 shadow-2xl shadow-cyan-500/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`} />
                  <span className="text-cyan-400 font-mono text-xs tracking-widest">
                    {isPlaying ? 'BROADCASTING' : 'STANDBY'}
                  </span>
                </div>
                <span className="text-gray-500 font-mono text-xs">AUX.01</span>
              </div>

              {/* Track info */}
              <div className="mb-3">
                <p className="text-white font-semibold text-sm truncate">Without Me</p>
                <p className="text-gray-400 font-mono text-xs">Eminem</p>
              </div>

              {/* Waveform visualizer */}
              <div className="flex items-end gap-0.5 h-8 mb-3 px-1">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-cyan-400/70"
                    animate={isPlaying ? {
                      scaleY: [1, (h / 4), 1, (h / 6), 1],
                    } : { scaleY: 0.3 }}
                    transition={isPlaying ? {
                      duration: 0.6 + i * 0.07,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    } : { duration: 0.3 }}
                    style={{ height: `${h * 4}px`, transformOrigin: 'bottom' }}
                  />
                ))}
              </div>

              {/* Progress bar */}
              <div className="mb-3">
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-green-400 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-gray-500 font-mono text-xs">{formatTime(currentTime)}</span>
                  <span className="text-gray-500 font-mono text-xs">{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                {/* Play/Pause */}
                <motion.button
                  onClick={togglePlay}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 hover:from-cyan-500/30 hover:to-green-500/30 border border-cyan-400/40 hover:border-cyan-400/70 rounded-lg transition-all duration-200"
                >
                  {isPlaying ? (
                    <>
                      <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                      <span className="text-cyan-400 font-mono text-xs">PAUSE</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span className="text-cyan-400 font-mono text-xs">PLAY</span>
                    </>
                  )}
                </motion.button>

                {/* Stop */}
                <motion.button
                  onClick={stop}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center p-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-400/60 rounded-lg transition-all duration-200"
                  title="Stop"
                >
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h12v12H6z" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating toggle button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl border backdrop-blur-md shadow-lg transition-all duration-300 ${
            isExpanded
              ? 'bg-cyan-500/20 border-cyan-400/60 shadow-cyan-400/20'
              : 'bg-black/80 border-cyan-500/30 hover:border-cyan-400/50 shadow-cyan-500/10'
          }`}
        >
          {/* Animated music icon */}
          <div className="flex items-end gap-0.5 h-4">
            {[2, 4, 3].map((h, i) => (
              <motion.div
                key={i}
                className="w-0.5 bg-cyan-400 rounded-full"
                animate={isPlaying ? {
                  scaleY: [1, 2.5, 1],
                } : { scaleY: 1 }}
                transition={isPlaying ? {
                  duration: 0.5 + i * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                } : {}}
                style={{ height: `${h * 4}px`, transformOrigin: 'bottom' }}
              />
            ))}
          </div>
          <span className="text-cyan-400 font-mono text-xs tracking-wider">
            {isPlaying ? 'NOW PLAYING' : 'MUSIC'}
          </span>
          {isPlaying && (
            <motion.div
              className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.button>
      </div>
    </>
  )
}

export default MusicPlayer

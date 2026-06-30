import { motion } from 'framer-motion'

const ContactSection = () => {
  return (
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden bg-black flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Discourse Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            style={{ filter: 'hue-rotate(240deg) brightness(0.6) contrast(1.2)' }}
            initial={{ scale: 1.05 }}
            animate={{ 
              scale: [1.05, 1.02, 1.05],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <source src="/assets/discourse.mp4" type="video/mp4" />
          </motion.video>
          
          {/* Video overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-blue-900/20" />
        </div>

        {/* Animated starfield */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Cosmic background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(64, 255, 218, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(64, 255, 218, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-block mb-8"
        >
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 border border-cyan-400/30 rounded-full px-6 py-2">
            <span className="text-cyan-400 font-mono text-sm">CONTACT.PROTOCOL</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Let&apos;s Connect
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Ready to initiate engagement? Transmit your mission briefing and
          we&apos;ll synchronize across the sovereign stack.
        </motion.p>

        {/* Status Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-black/80 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-xs font-mono">contact_terminal.exe</span>
            </div>
            
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">$</span>
                <span className="text-white">status --check-availability</span>
              </div>
              <div className="text-cyan-400">
                ► SYSTEM_STATUS: OPERATIONAL
              </div>
              <div className="text-cyan-400">
                ► RESPONSE_TIME: &lt; 24 hours
              </div>
              <div className="text-cyan-400">
                ► COLLABORATION_MODE: ACTIVE
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <span className="text-green-400">$</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-green-400"
                >
                  _
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating HUD Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner brackets */}
        <div className="absolute top-10 left-10 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50" />
        <div className="absolute top-10 right-10 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50" />
        <div className="absolute bottom-10 left-10 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50" />
        <div className="absolute bottom-10 right-10 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50" />
      </div>
    </section>
  )
}

export default ContactSection

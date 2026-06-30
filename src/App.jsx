import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IntroVideo from './components/IntroVideo/IntroVideo'
import NameReveal from './components/NameReveal/NameReveal'
import BootingScreen from './components/BootingScreen/BootingScreen'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import BentoGrid from './components/ProjectSection/BentoGrid'
import TechnicalArsenal from './components/TechnicalArsenal/TechnicalArsenal'
import GalacticRoadmap from './components/GalacticRoadmap/GalacticRoadmap'
import ProfessionalInvolvements from './components/ProfessionalInvolvements/ProfessionalInvolvements'
import ContactSection from './components/ContactSection/ContactSection'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import SoundSystem from './components/SoundSystem/SoundSystem'
import { userData } from './data/userData'

function App() {
  const [currentSection, setCurrentSection] = useState('video') // Start with video
  const [showSkipButton, setShowSkipButton] = useState(true)

  // Handle section transitions
  const handleSectionComplete = (nextSection) => {
    setCurrentSection(nextSection)
  }

  const skipToHome = () => {
    setCurrentSection('home')
    setShowSkipButton(false)
  }

  useEffect(() => {
    // Hide skip button after intro sequence
    if (currentSection === 'home') {
      setShowSkipButton(false)
    }
  }, [currentSection])

  return (
    <div className="min-h-screen bg-cosmic-black text-white overflow-x-hidden">
      {/* Persistent systems — visible on all pages */}
      <SoundSystem />
      <MusicPlayer />

      {/* Skip Button - Only show during intro sequence */}
      <AnimatePresence>
        {showSkipButton && currentSection !== 'home' && (
          <motion.button
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            onClick={skipToHome}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.93 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-2 px-3 py-2 rounded-xl font-mono text-[10px] tracking-widest text-cyan-400 select-none"
            style={{
              background: 'rgba(0,0,0,0.75)',
              border: '1px solid rgba(34,211,238,0.25)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5), 0 0 12px rgba(34,211,238,0.06)'
            }}
          >
            <span className="text-cyan-400/50">//</span>
            SKIP_INTRO
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="text-cyan-400/70 text-xs"
            >
              ›
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Section Transitions */}
      <AnimatePresence mode="wait">
        {currentSection === 'video' && (
          <IntroVideo 
            key="video"
            onComplete={() => handleSectionComplete('nameReveal')}
            userData={userData}
          />
        )}

        {currentSection === 'nameReveal' && (
          <NameReveal 
            key="nameReveal"
            onComplete={() => handleSectionComplete('booting')}
            userData={userData}
          />
        )}
        
        {currentSection === 'booting' && (
          <BootingScreen 
            key="booting"
            onComplete={() => handleSectionComplete('home')}
            userData={userData}
          />
        )}
        
        {currentSection === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen"
          >
            {/* Starfield Background */}
            <div className="starfield" />

            <Navbar />

            {/* Main Content */}
            <HeroSection userData={userData} />
            <TechnicalArsenal userData={userData} />
            <GalacticRoadmap />
            <BentoGrid userData={userData} />
            <ProfessionalInvolvements userData={userData} />
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

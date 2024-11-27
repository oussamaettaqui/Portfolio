
// import './App.css'
// import React from 'react';
// import ParticlesComponent from './components/Particles';
// // import Navbar from './components/Navbar';
// import Hero from './components/Hero'



// function App() {

//   return (
   
//       <div className=''>
//         {/* <Navbar /> */}
//         <ParticlesComponent className="particles" />
//         <Hero />

//       </div>
//   )
// }

// export default App





import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import ParticlesComponent from './components/Particles';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Define sections with unique backgrounds and text colors
  const sections = [
    {
      id: 0,
      title: 'Home',
      hasParticles: true,
      textColor: 'text-black', // Black text for Hero
      component: <Hero />,
      background: 'bg-transparent'
    },
    {
      id: 1,
      title: 'About',
      hasParticles: false,
      textColor: 'text-white', // White text for About section
      component: <About />,
      background: 'bg-gradient-to-br from-indigo-900 to-purple-900'
    },
    {
      id: 2,
      title: 'Projects',
      hasParticles: false,
      textColor: 'text-white', // White text for Projects section
      component: <Projects />,
      background: 'bg-gradient-to-br from-teal-900 to-blue-900'
    },
    {
      id: 3,
      title: 'Contact',
      hasParticles: false,
      textColor: 'text-white', // White text for Contact section
      component: <Contact />,
      background: 'bg-gradient-to-br from-pink-900 to-red-900'
    }
  ];

  // Scroll handling logic (unchanged)
  const handleScroll = useCallback((direction) => {
    if (isScrolling) return;

    setIsScrolling(true);
    
    if (direction === 'right' && currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (direction === 'left' && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 600);
  }, [currentSection, isScrolling, sections.length]);

  // Mouse wheel event handler (unchanged)
  useEffect(() => {
    const handleMouseWheel = (event) => {
      event.preventDefault();
      const delta = Math.sign(event.deltaY);
      
      if (delta > 0) {
        handleScroll('right');
      } else if (delta < 0) {
        handleScroll('left');
      }
    };

    window.addEventListener('wheel', handleMouseWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleMouseWheel);
    };
  }, [handleScroll]);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Conditionally render Particles only on Hero page */}
      {sections[currentSection].hasParticles && (
        <ParticlesComponent className="particles absolute z-0" />
      )}

      {/* Horizontal Scrolling Sections */}
      <div className="relative z-10 w-full h-full">
        <AnimatePresence>
          {sections.map((section, index) => (
            <motion.div 
              key={section.id}
              initial={{ x: index < currentSection ? '-100%' : '100%' }}
              animate={{ x: index === currentSection ? '0%' : 
                         index < currentSection ? '-100%' : '100%' }}
              exit={{ x: index < currentSection ? '-100%' : '100%' }}
              transition={{ type: 'tween', duration: 0.5 }}
              className={`absolute top-0 left-0 w-full h-full ${section.background} ${section.textColor}`}
            >
              {section.component}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {currentSection > 0 && (
            <button 
              onClick={() => handleScroll('left')} 
              className="bg-white/20 text-white p-3 rounded-full shadow-lg backdrop-blur-sm"
            >
              ← Previous
            </button>
          )}
          {currentSection < sections.length - 1 && (
            <button 
              onClick={() => handleScroll('right')} 
              className={`bg-white/20 
                 ${currentSection === 0 ? 'text-black' : 'text-white'}  
                p-3 rounded-full shadow-lg backdrop-blur-sm`}
            >
              Next →
            </button>
          )}
        </div>

        {/* Section Indicator */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className={`w-3 h-3 rounded-full ${
                currentSection === index 
                  ? 'bg-white' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
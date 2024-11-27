
import './App.css'
import React from 'react';
import ParticlesComponent from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero'



function App() {

  return (
   
      <div className=''>
        <Navbar />
        <ParticlesComponent className="particles" />
        <Hero />

      </div>
  )
}

export default App

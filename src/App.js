import React from 'react'
import Nav from './components/pages/Nav.jsx'
import Hero from './components/pages/Hero.jsx'
import Shoter from './components/pages/Shoter.jsx'
import Body from './components/pages/Body.jsx'
import Footer from './components/pages/Footer.jsx'
import BodyBottom from './components/pages/BodyBotton.jsx'

import './App.css'


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Shoter />
      <Body />
      <BodyBottom />
      <Footer />
    </div>
  )
}

export default App
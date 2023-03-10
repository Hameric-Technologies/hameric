import React from 'react'
import heroimg from '../../../assets/heroimg.png'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'
import Services from './Components/Services'
import About from './Components/About'
import Corevalues from './Components/Corevalues'
import Feature from './Components/Feature'
import CTA from './Components/CTA'
import Footer from './Components/Footer'

const Homepage = () => {
  return (
    <div className='relative'>
      <div className="fixed z-20">
          <Navbar />
      </div>
      <Hero />
      <TrustedBy />
      <Services />
      <About />
      <Corevalues />
      <Feature />
      <CTA />
      <Footer />
    </div>
  )
}

export default Homepage
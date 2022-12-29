import React from 'react'
import heroimg from '../../../assets/heroimg.png'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'

const Homepage = () => {
  return (
    <div className='relative'>
      <div className="fixed z-20">
          <Navbar />
      </div>
      <Hero />
      <TrustedBy />
    </div>
  )
}

export default Homepage
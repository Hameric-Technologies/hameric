import React from 'react'
import heroimg from '../../../assets/heroimg.png'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

const Homepage = () => {
  return (
    <div className='h-[1500px] relative'>
      <div className="fixed z-20">
          <Navbar />
      </div>
      <Hero />
    </div>
  )
}

export default Homepage
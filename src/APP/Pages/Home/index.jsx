import React from 'react'
import heroimg from '../../../assets/heroimg.png'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

const Homepage = () => {
  return (
    <div className='h-[1500px]'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Homepage
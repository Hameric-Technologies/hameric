import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import ContactForm from './Components/ContactForm'

const Contact = () => {
  return (
    <div className='relative'>
       <div className="fixed z-20">
          <Navbar />
      </div>
        <ContactForm />
      <div className=''>
      <Footer />
      </div>
    </div>
  )
}

export default Contact
import React from 'react'
import heroimg from '../../../../assets/heroimg.png'
import { Fade } from "react-awesome-reveal";
import  './Hero.css'


const Hero = () => {
  return (
    <Fade cascade={true} damping={0.1}>
        <div>
          <div className="flex flex-col md:flex-row justify-around items-center max-w-screen-2xl mx-auto md:px-6">
            <div className=''>
                <h1 className='text-7xl md:text-7xl font-extrabold my-auto text-center md:text-start md:mt-0 mt-28 md:px-10 text-black'>WE TAKE PRIDE IN PROVIDING QUALITY SERVICES</h1>
                <p className='md:px-10 py-10 text-center md:text-start text-xl px-20'>Need a reliable partner for all your software development and IT needs? Our team at <span className='font-extrabold text-indigo-900'>Hameric</span> offers top-quality software development and IT services. </p>
                <div className="flex justify-center md:justify-start py-7 md:px-10">
                    <div className=" md:block py-3 px-6 mr-6 bg-black text-white font-semibold rounded-2xl my-auto cursor-pointer hover:bg-gray-700"><a href="#services">Our services</a></div>
                    <div className=" md:block py-3 px-6 mr-6 bg-none text-black border-2 border-gray-800 font-semibold rounded-2xl my-auto cursor-pointer hover:bg-indigo-800 hover:border-indigo-400 hover:text-white"><a href="#about">About Us </a></div>
                    </div>
                </div>
            <div className=' md:h-screen flex flex-col justify-center w-3/5 my-10 md:my-2'>
              <img className='w-96 md:w-[590px] py-auto' src={heroimg} alt="Animated Developers" />
            </div>
          </div>
        </div>
    </Fade>
  )
}

export default Hero
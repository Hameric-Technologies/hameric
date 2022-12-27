import React, { useState } from 'react'
import logo from '../../../../assets/logo.svg'
import { FcMenu } from "react-icons/fc";
import { FcRightUp } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
    const [positionY, setPositionY] = useState(' bg-[#fff5ec] shadow-none ')
    window.addEventListener('scroll', () => {
        window.scrollY > 100 ? setPositionY("  bg-white shadow-lg shadow-gray-200/25 ") :
       window.scrollY === 0 ? setPositionY("  bg-[#fff5ec] shadow-none ") : ""
    })
  return (
   <Fade triggerOnce>
         <div className='relative'>
        <nav className={`w-11/12 py-2 md:py-2 rounded-full md:rounded-3xl  ${positionY} transition ease-in-out delay-150  flex justify-between mx-auto mt-4 fixed left-0 right-0 z-10 `}>
            <div className="py-2 flex justify-start">
                <img className='w-28 mx-5 md:w-40 cursor-pointer' src={logo} alt="" />
                <div className="hidden md:flex justify-between">
                    <div className="text-gray-900 text-lg font-semibold my-auto hover:underline hover:underline-offset-8 mx-4 hover:text-gray-800 cursor-pointer">About us <FcAbout className='inline-block' /> </div> 
                    <h1 className="text-gray-900 text-lg font-semibold my-auto hover:underline hover:underline-offset-8 mx-6 hover:text-gray-800 cursor-pointer">Services <FcBriefcase className='inline-block'/> </h1>
                    <h1 className="text-gray-900 text-lg font-semibold my-auto hover:underline hover:underline-offset-8 mx-6 hover:text-gray-800 cursor-pointer">Articles <FcReading className='inline-block' /></h1>
                </div>
            </div>
            <div className="py-3 flex justify-end">
                <FcMenu className=' mr-9 text-3xl md:hidden' />
                
                <div className="hidden md:block py-2 mr-5 text-lg font-semibold hover:underline hover:underline-offset-8 my-auto cursor-pointer">Login <FcRightUp className='inline-block' /> </div>
                <div className="hidden md:block py-3 px-6 mr-6 bg-black text-white font-semibold rounded-2xl my-auto cursor-pointer hover:bg-gray-700">Get started</div>
                <div className="hidden md:block py-3 px-6 mr-6 bg-none text-black border-2 border-gray-800 font-semibold rounded-2xl my-auto cursor-pointer hover:bg-gray-800 hover:text-white">Book a call <FcCallback className='inline-block' /></div>
            </div>
        </nav>
    </div>
   </Fade>
  )
}

export default Navbar
import React from 'react'
import { FcCallback, FcRightUp } from 'react-icons/fc'

const CTA = () => {
  return (
    <div className='w-full'>
        <div className="w-11/12 my-28 rounded-2xl mx-auto h-[500px] bg-white flex flex-col text-center justify-center">
            <h2 className="text-3xl md:text-6xl font-bold py-6">Let us be your Growth Partners.</h2>
            <p className="text-xl md:text-2xl py-4">Ready to get started?</p>
            <div className="py-3 flex justify-center">
                <div className="block py-3 px-8 mr-6 bg-black text-white font-semibold rounded-xl my-auto cursor-pointer hover:bg-gray-700">Get started</div>
                <div className="block py-3 px-6 mr-6 bg-none text-black border-2 border-gray-800 font-semibold rounded-xl my-auto cursor-pointer hover:bg-gray-800 hover:text-white">Book a call <FcCallback className='inline-block' /></div>
            </div>
        </div>
    </div>
  )
}

export default CTA
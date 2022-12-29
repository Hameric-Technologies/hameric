import React from 'react'
import Cba from '../../../../assets/CBA.svg'
import Gevic from '../../../../assets/GevicMundare.svg'
import Naacas from '../../../../assets/Naacas7S.svg'
import Maureen from '../../../../assets/MaureenBett.svg'

const TrustedBy = () => {
  return (
    <div className='max-w-screen-lg md:mt-10 mt-14 mx-auto'>
        <h2 className="text-center text-3xl font-extrabold">Trusted By</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 mb-14">
            <img src={Gevic} className='w-52 mt-4 px-4 opacity-60' alt="gevicmundare.com" />
            <img src={Cba} className='w-28 mt-4 px-4 opacity-60' alt="calvarybaptistacademy.ac.ke" />
            <img src={Naacas} className='w-52 mt-4 px-4 opacity-60' alt="naacas7s.com" />
            <img src={Maureen} className='w-52 mt-4 px-4 opacity-60' alt="maureenbett.com" />
            <h2 className="text-xl ml-4 mt-6 opacity-60">and more...</h2>
        </div>
    </div>
  )
}

export default TrustedBy
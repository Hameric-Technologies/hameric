import React from 'react'
import ManWoman from '../../../../assets/manwom.png'
import { Fade } from 'react-awesome-reveal'

const About = () => {
  return (
    <div className='w-full' id='about'>
        <Fade cascade={true} triggerOnce={true}>
            <div className=" mt-28 max-w-md md:max-w-screen-lg mx-auto">
                <h2 className="text-center text-3xl px-14 underline underline-offset-8  font-bold mb-20"></h2>
                <div className="flex flex-col md:flex-row justify-between my-20">
                    <div className=''>
                        <img src={ManWoman} alt="Man and woman discussing" className='mx-auto' />
                    </div>
                    <div className='md:w-6/12'>
                        <h2 className="text-3xl mt-10 md:mt-0 font-bold  mx-5 md:mx-1 underline underline-offset-8 my-7">Why Hameric?</h2>
                        <p className='my-4 text-lg text-start mx-5 md:mx-1 md:text-start'>Hameric is a talented, passionate team of developers, designers and IT professionals. However, we don’t associate ourselves with your typical web agency. We don’t force large, annual contracts. We adhere to extremely high quality standards that often results to more trust with clients. We don’t run from communication with clients – we run towards it.</p>

                        <p className='my-6 text-lg text-start mx-5 md:mx-1 md:text-start'>Clients are often amazed with the level of personalization and customization we provide to each and every work or product deliveries we do, and one of the key metrics we pride ourselves on is not having a single refund for any of the work we provided or supplies we make!</p>
                    </div>
                </div>
            </div>
        </Fade>
    </div>
  )
}

export default About
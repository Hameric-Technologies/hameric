import React from 'react'
import apps from '../../../../assets/apps.png'
import delivery from '../../../../assets/delivery.png'
import support from '../../../../assets/support.png'
import websites from '../../../../assets/websites.png'
import { Slide } from 'react-awesome-reveal'

const Services = () => {
  return (
    <div className='my-14' id='services'> 
    <h2 className="text-3xl font-bold text-center mt-40 md:mt-40 mb-28 underline underline-offset-8">Services</h2>
    <div className='flex flex-col md:flex-row justify-center items-center max-w-screen-2xl mx-auto md:px-6'>
        <Slide cascade={true} damping={0.2} triggerOnce>
            <div className='h-72 w-96 md:h-72 p-10 m-6 rounded-3xl bg-white hover:bg-gray-100 flex flex-col justify-center transition duration-150 ease-out hover:ease-in text-center relative'>
                <img src={apps} className='w-40 left-10 self-center absolute -top-14' alt="Mobile and Web apps" />
                <h2 className="font-bold text-2xl my-5">Mobile and Web Apps</h2>
                <p>Creating custom Web and Mobile applications tailored to your specific needs and requirements</p>
            </div>

            <div className='h-72 w-96 md:h-72 p-7 m-6 rounded-3xl bg-white hover:bg-gray-100 flex flex-col justify-center transition duration-150 ease-out hover:ease-in text-center relative'>
                <img src={websites} className='w-60 self-center absolute -top-14 ' alt="Mobile and Web apps" />
                <h2 className="font-bold text-2xl my-4">Website development</h2>
                <p>Maintaining, designing and building stunning websites you will love with fully managed hosting to help you boost your business or brand. </p>
            </div>

            <div className='h-72 w-96 md:h-72 p-7 m-6 rounded-3xl bg-white hover:bg-gray-100 flex flex-col justify-center transition duration-150 ease-out hover:ease-in text-center relative'>
                <img src={support} className='w-32 md:w-32 self-center absolute -top-14' alt="Mobile and Web apps" />
                <h2 className="font-bold text-2xl my-6">Technical Support</h2>
                <p>Providing assistance to technical issues or problems with software or IT systems both on-site and remotely. </p>
            </div>
            <div className='h-72 w-96 md:h-72 p-7 m-6 rounded-3xl bg-white hover:bg-gray-100 flex flex-col justify-center transition duration-150 ease-out hover:ease-in text-center relative'>
                <img src={delivery} className='w-52 md:w-52 self-center absolute left-10 -top-10' alt="Mobile and Web apps" />
                <h2 className="font-bold text-2xl my-4">Bulk IT Supplies</h2>
                <p>High quality supplies with competitive prices on a wide range of hardware and accessories. </p>
            </div>
        </Slide>
    </div>
    </div>
  )
}

export default Services
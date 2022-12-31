import React from 'react'
import pass from '../../../../assets/pass.png'
import { Fade } from 'react-awesome-reveal'

const Feature = () => {
  return (
    <div className='w-full'>
    <Fade cascade triggerOnce={true} damping={1}>
        <div className='mt-28 max-w-md md:max-w-screen-lg mx-auto'>
            <div className="flex flex-col md:flex-row justify-between items-center my-10">
            <div className='md:w-7/12'>
                    <h2 className="text-3xl mt-10 md:mt-0 font-bold text-start px-8 my-10 ml-3">All things in one dashboard</h2>
                    <h4 className="text-bold px-8 text-xl font-semibold ml-3">View and track progress of all active tasks and projects on one dashboard</h4>
                    <ul>
                    <li className='my-4 text-lg text-start px-8 ml-3'>All projects are organized to boards that help you keep track of the progress.</li>
                    <li className='my-4 text-lg text-start px-8 ml-3'>View delivery details of hardware products and manage your invoices easily from one dashboard.</li>
                    </ul>
                    <div className="py-3 bg-black text-white font-bold cursor-pointer text-center  mx-10 rounded hover:font-bold hover:bg-gray-700 hover:text-white">Go to dashboard</div>
                </div>
                <div className='w-[400px] h-96 md:w-[550px] features mx-auto rounded-3xl relative mt-28 md:ml-10'>
                    <div className="flex flex-col w-80 h-48 bg-white  -right-4 md:-right-16 self-center absolute -top-20 rounded-3xl shadow-2xl shadow-pink-900/25">
                        <h3 className="font-bold text-sm p-3  underline-offset-4">Your Active Projects</h3>
                        <div className="flex justify-between px-3 py-2">
                            <h2 className="font-light my-auto">E-Shop</h2>
                            <h2 className="font-semibold text-sm text-green-600 px-5 py-1 bg-green-100 rounded">in-progress</h2>
                        </div>
                        <div className="flex justify-between px-3 py-2">
                            <h2 className="font-light my-auto">Delivery app</h2>
                            <h2 className="font-semibold text-rose-600 text-sm px-2 py-1 bg-rose-100 rounded">Needs feedback</h2>
                        </div>
                        <div className="flex justify-between px-3 py-2">
                            <h2 className="font-light my-auto">Naacas7s.com</h2>
                            <h2 className="font-bold text-sm text-white px-5 py-1 bg-green-900 rounded">Complete</h2>
                        </div>
                    </div>
                    <img src={pass} className='w-48 left-0 md:-left-20 self-center absolute -bottom-14' alt="Mobile and Web apps" />
                </div>
            </div>
        </div>
    </Fade>
</div>
  )
}

export default Feature
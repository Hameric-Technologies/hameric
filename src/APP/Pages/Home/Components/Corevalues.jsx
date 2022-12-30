import React from 'react'
import val1 from '../../../../assets/val1.png'
import val2 from '../../../../assets/val2.png'
import { Fade } from 'react-awesome-reveal'

const Corevalues = () => {
  return (
    <div className='w-full'>
        <Fade cascade triggerOnce={true} damping={1}>
            <div className='mt-28 max-w-md md:max-w-screen-lg mx-auto'>
                <div className="flex flex-col md:flex-row justify-between my-10">
                <div className='md:w-7/12'>
                        <h2 className="text-4xl mt-10 md:mt-0 font-bold text-start px-8 my-16 underline underline-offset-8">Our core values</h2>
                        <h4 className="text-bold px-8 text-xl font-bold">Transparency</h4>
                        <p className='my-4 text-lg text-start px-8'>We believe in setting realistic expectations for our services, while always providing an honest assessment of our progress and results. We strive to be transparent with our customers and with each other within the organization.</p>

                        <h4 className="text-bold px-8 text-xl font-bold">High Performance</h4>
                        <p className='my-4 text-lg text-start px-8'>We are the antithesis of bottlenecks. Our goal is to deliver the customer a quality service in a manner that aligns with their expectations and business goals without compromising quality.</p>

                        <h4 className="text-bold px-8 text-xl font-bold">Synergy</h4>
                        <p className='my-4 text-lg text-start px-8'>We are a service run and operated by people and are only as strong as our weakest link. Our commitment to teamwork and reliance on each other to get the job done is paramount to ensuring a quality end result.</p>
                    </div>
                    <div className='w-[400px] h-96 md:w-[550px] values mx-auto rounded-3xl relative mt-28 md:ml-10'>
                        <img src={val1} className='w-52 -left-4 md:-left-16 self-center absolute -top-28' alt="Mobile and Web apps" />
                        <img src={val2} className='w-28 right-10 self-center absolute -bottom-14' alt="Mobile and Web apps" />
                    </div>
                </div>
            </div>
        </Fade>
    </div>
  )
}

export default Corevalues
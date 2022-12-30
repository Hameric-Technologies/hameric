import React from 'react'
import email from '../../../../assets/email.png'
import { Fade } from 'react-awesome-reveal'

const ContactForm = () => {
  return (
    <Fade cascade={true} damping={0.1}>
        <div>
          <div className="flex flex-col-reverse justify-around items-center max-w-screen-2xl mx-auto md:px-6">
            <div className=''>
                
                <form className='mb-40'>
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-xl font-medium text-gray-900">Name</label>
                    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 px-20 md:px-40  placeholder:text-xl" placeholder="Your Name" required />
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-xl font-medium text-gray-900">Email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 px-20 md:px-40  placeholder:text-xl placeholder:text-start" placeholder="Email Address" required />
                </div>
                <div className="mb-6">
                    <label for="message" class="block mb-2 text-xl font-medium text-gray-900">Your message</label>
                    <textarea id="message" rows="4" class="block p-8 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-xl placeholder:text-start" placeholder="Message"></textarea>   </div>
                <button type="submit" class="text-white bg-gray-900 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full  px-5 py-2.5 text-center ">Submit</button>
                </form>

                </div>
            <div className=' md:h-screen flex flex-col justify-center w-3/5 my-10 md:my-2'>
              <img className='w-96 mx-auto mt-20 md:w-80 py-auto' src={email} alt="Animated Developers" />
              <h2 className="font-bold text-5xl text-center">Get in touch</h2>
              <p className="md:text-xl text-lg my-4 font-light text-center">Leave a message below and we'll be in touch</p>
              <p className="md:text-lg text-md my-4 font-light text-center">Or mail us directly at <a href='mailto:support@hameric.co.ke' className="font-bold">support@hameric.co.ke</a></p>
            </div>
          </div>
        </div>
    </Fade>
  )
}

export default ContactForm
import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {




  return (
    <div>

      <div className='text-center text-2xl pt:10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img  className="w-full md:max-w-[360px] " src={assets.contact_image} alt="contact_image"></img>
        <div className='flex flex-col justify-center items-start gap-6 ' >
          <p className='font-semibold text-lg text-gray-600 '>OUR OFFICE</p>
          <p className='text-gray-500' >11-5-321  Saroornagar SRR Residency <br></br>Vivek Nagar Hyderabad <br></br>Telangana India</p>
          <p className='text-gray-500'>Tel: +916303789759<br></br>vignaymuduganti2006@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at MediMate</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border rounded-full bg-blue-400 cursor-pointer  text-amber-50 px-8 py-4 text-sm  hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact

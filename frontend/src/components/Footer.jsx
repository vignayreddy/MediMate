import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate =  useNavigate();
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] pl-5 gap-14 my-10 mt-40 text-sm'>
            {/* Left  */}
            <div>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => {navigate("/");scrollTo(0,0)}}>
          <img className="bg-amber-50 w-12 rounded-2xl" src={assets.logo} alt="Logo" />
          <span className="text-4xl font-bold text-blue-600">MediMate</span>
        </div>
        <br></br><br></br>
           <p className='w-full  md:w-2/3 text-black leading-6'>MediMate is your trusted partner for hassle-free medical appointments. Connect with 100+ certified doctors across various specialties. Book consultations anytime, anywhere with just a few clicks. Secure, reliable, and patient-first experience every time. Your health journey starts here — with MediMate.</p>
        </div>

       
        <div>
            {/* Center */}
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-800'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>

            </ul>
        </div>
        <div>
            {/* Right */}
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul  className='flex flex-col gap-2 text-gray-800'>
                <li>+916303789759</li>
                <li>vignaymuduganti2006@gmail.com</li>
            </ul>
        </div>
        </div>
        <div>
            {/* Bottom Copy right text */}
            <hr></hr>
            <p className='py-5 text-sm text-center '>Copyright 2025@ MediMate - All Rights Reserved</p>
        </div>
         
    </div>
  )
}

export default Footer

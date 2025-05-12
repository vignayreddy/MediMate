import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-blue-500 m-10 rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left and right side of the header */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        {/* Left side of the header */}

            <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">Schedule with Trusted<br></br> Medical Professionals
            </p>
            <div className="flex text-white font-light flex-col md:flex-row md:items-center md:justify-center gap-4">
                <img className='w-28'  src={assets.group_profiles} />
                <p>Easily browse our list of trusted medical professionals<br className="hidden sm:block"/>and schedule your visit today.</p>
            </div>
            <a className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300" href="#speciality">Book Appointment <img className ="w-3"src= {assets.arrow_icon}alt="arrow button"/></a>
     

      </div>

      <div className="md:w-1/2 relative">
        {/* Right side of the header */}
        <img  className="w-full md:absolute bottom-0 h-auto rounded-lg"src={assets.header_img} alt="right image"></img>
      </div>
    </div>
  )
}

export default Header

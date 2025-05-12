import { NavLink,useNavigate } from "react-router-dom";
import {assets} from "../assets/assets_frontend/assets";
import { useState } from "react";

const Navbar = () => {

  const navigate = useNavigate();


  const [showMenu,setShowMenu] = useState(false);
  const [token,setToken] = useState(true);

  return (
    //hidden from phone view --hidden 
     <div className=" mx-10 flex items-center justify-between text-sm  px-8 py-4 mb-5 border-b border-b-gray-400" >
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img className="bg-amber-50 w-12 rounded-2xl" src={assets.logo} alt="Logo" />
          <span className="text-xl font-bold text-blue-600">MediMate</span>
        </div>
        <ul className="hidden  md:flex items-start gap-5 font-medium">

            <NavLink to="/">
                <li className="py-1">HOME</li>
                <hr className="border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto"/>
            </NavLink>
             <NavLink to="/doctors">
                <li className="py-1">OUR DOCTORS</li>
                 <hr className="border-none outline-none h-0.5  bg-blue-600 w-3/5 m-auto"/>
            </NavLink>
             <NavLink to="/about">
                <li className="py-1" >ABOUT</li>
                 <hr className="border-none outline-none h-0.5  bg-blue-600  w-3/5 m-auto"/>
            </NavLink>
            {/* When this was clicked it renders to that page and shoes the content matching in app.jsx for that element  */}
            <NavLink to="/contact"> 
                <li className="py-1" >CONTACT</li>
                 <hr className="border-none outline-none h-0.5  bg-blue-600  w-3/5 m-auto"/>
            </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          {
            token
            ? 
            <div className="flex items-center gap-2 cursor-pointer group relative " >
             
            
              <img className="w-8  rounded-full" src={assets.profile_pic} alt="Profile Pic"/>
              <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown_icon"/>
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
                <div className="min-w-48 bg-stone-100 rounde d flex flex-col gap-4 p-4"> 
                  <p onClick={()=>navigate("/my-profile")}className="hover:text-black cursor-pointer" >Profile</p>
                  <p onClick={()=>navigate("/my-appointments")}  className="hover:text-black cursor-pointer" >My Appointments</p>
                  <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer" >Logout</p>
                </div>
              </div>
              
            </div>
            :
            <button  onClick= {()=>navigate("/login")}className="bg-blue-600 text-white px-8 py-3 cursor-pointer rounded-full font-bold hidden md:block ">Create Account</button>
          }
        
       </div>
       <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden sm:hidden" src={assets.menu_icon} alt="menuicon"></img>
        {/* Mobile Menu */}
         <div className={`${showMenu ? "fixed-w-full": "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-5">
            {/* <img className="w-10" src={assets.logo} alt="logo" /> */}
            <img className="w-7"  onClick={()=>setShowMenu(false)}src={assets.cross_icon} alt="cross_icon" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium " >
            <NavLink onClick={()=>setShowMenu(false)} to="/"><p  className="px-4 py-2 rounded inline-block" >Home</p> </NavLink>
            <NavLink onClick={()=>setShowMenu(false)}  to="/doctors"><p  className="px-4 py-2 rounded inline-block">All Doctors</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)}  to="/about"><p  className="px-4 py-2 rounded inline-block">About</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)}   to="/contact"><p  className="px-4 py-2 rounded inline-block">Contact</p></NavLink>
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar;

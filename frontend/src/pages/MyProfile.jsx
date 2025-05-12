import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useState } from 'react'

const MyProfile = () => {

  const [userData,setUserData] = useState({
    name:"Vignay reddy",
    image:assets.profile_pic,
    email:"vignayreddymuduganti@gmail.com",
    phone:"+91 8106398106",
    address:{
      line1:"3-97,Myadampally",
      line2:"Mallial Jagityal Telangana ",
    },
    gender:"Male",
    dob:"2006-08-27",

  })

    const [isEdit,setIsEdit] = useState(true);


  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded-full' src={userData.image} alt=""></img>
      {
       
        isEdit  ?
         (<input className='bg-gray-50 text-3xl font-medium mt-4'  value= {userData.name} onChange={e=> setUserData(prev =>({...prev,name:e.target.value}))}  type="text"/> )
        :
        (<p className='font-medium text-3xl text-neutral-800 mt-4'> {userData.name} </p>)
      }

      <hr className='bg-zinc-400  h-[1px] border-none'>
      </hr>

      <div>
        <p className='text-neutral-400 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_2fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email Id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
           {
       
        isEdit  ?
         (<input className='bg-gray-100 w-30  rounded-full max-w-52' value= {userData.phone} onChange={e=> setUserData(prev =>({...prev,phone:e.target.value}))}  type="text"/> )
        :
        (<p className='text-blue-400'> {userData.phone} </p>)
      }
      <p className='font-medium'>Address:</p>
      {
        isEdit?
        <p>
          <input  className="bg-gray-50" value={userData.address.line1} onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} type="text" />
          <br></br>
           <input className="bg-gray-50" value={userData.address.line2} onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} type="text" />
  
        </p>
        :
        <p className='text-gray-500'>
          {userData.address.line1}
          <br></br>
          {userData.address.line2}
        </p>
      }
        </div>
      </div>
      <div>
      <p className='text-neutral-400 underline mt-3'>BASIC INFORMATION</p>
      <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
        <p className='font-medium '>Gender:</p>
           {
       
        isEdit  ?
         <select className=' max-w-20 rounded-xl bg-gray-100' value={userData.gender} onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer not to say">Prefer not to say</option>
         </select>
         :

        (<p className='text-gray-400' > {userData.gender} </p>)
      }
      <p className='font-medium'>Birthday:</p>
      {
        isEdit 
        ?  <input className='max-w-28 bg-gray-100' value={userData.dob} onChange={(e)=>setUserData(prev=>({...prev,dob:e.target.value}))} type="date"/> : <p className='text-gray-400'>{userData.dob}</p>
      }
      </div>
      </div>
      <div className='mt-10 '>
        {
          isEdit
          ?
          <button className='border border-b-blue-400 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white transition-all ' onClick = {()=>setIsEdit(false)}>Save Information</button>
          :
          <button className='border border-b-blue-400 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
      
    </div>
  )
}

export default MyProfile

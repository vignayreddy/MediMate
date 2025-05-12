import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import RelatedDoctors from '../components/RelatedDoctors';

function Appointment() {
  const {docId} = useParams();
  const {doctors} = useContext(AppContext);
  const daysOfWeek = ["SUN","MON","TUE","WED","THU","FRI","SAT"]

  const [docInfo,setDocInfo] =useState(null);
  const [docSlots,setDocSlots] = useState([]);
  const [slotIndex,setSlotIndex]= useState(1);
  const [slotTime,setSlotTime] = useState("");


  const  fetchDocInfo = async () =>
  {
    const docInfo = doctors.find(doc => doc._id ===docId)
    setDocInfo(docInfo);
    // console.log(docInfo);
  }

  const getAvailableSlots = async ()=>
  {
    setDocSlots([]);
    // Getting current Date
    let today = new Date();
    let allSlots=[];
    for(let i=0;i<7;i++)
    {
      //  getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate()+i);

      //Setting end time of the date with index

      let endTime = new Date(today);
      endTime.setDate(today.getDate()+i);
      endTime.setHours(21,0,0,0);


      //Setting hours
      if(today.getDate()==currentDate.getDate())
      {
        currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1 : 10 )
        currentDate.setMinutes(currentDate.getMinutes()>30 ?30 : 0);

      }
      else
      {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots=[];

      while(currentDate<endTime)
      {

        let formattedTime = currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        
        // add slot to array
        timeSlots.push(
          {
            datetime: new Date(currentDate),
            time:formattedTime,
          }
        )
        // incrementing time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes()+30);
      }
        allSlots.push(timeSlots);
    }
    setDocSlots(allSlots);
  

  }

  useEffect(()=>
  {
    getAvailableSlots()
  },[docInfo])

  //Used to run when a page gets load

  useEffect(()=>{
    fetchDocInfo();
  },[doctors,docId])

  useEffect(()=>
  {
    console.log(docSlots);
  },[docSlots])



  
  return docInfo && (
    <div>
      {/* Representing Doctor's Details */}
      <div className=' px-10 flex flex-col  sm:flex-row gap-4'>
        <div>
          <img className='bg-blue-300 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt=""></img>
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-7 py-7 bg-gray-300  mt-[-80px] mx-2 sm:mx-0 sm:mt-0  '>
          {/* Right side details */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-950'>{docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt=""></img>
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-900'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-2xs rounded-full bg-fuchsia-100'>{docInfo.experience}</button>
          </div>

          {/* Doctor About */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 mb-4'>About <img className='cursor-pointer'src={assets.info_icon} alt=""></img></p>
            <p className='text-md text-black-300 font-light    max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className="mt-4"> Appointment Fee: <span className='text-gray-950'>&#8377; {docInfo.fees*10}</span></p>
         
        </div>
      </div>

      {/* Booking Slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {
            docSlots.length && docSlots.map((item,index)=>(
              <div onClick={()=>{setSlotIndex(index)}} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index? "bg-blue-500 text-white ":"border border-gray"}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()] }</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>

              </div>
            )
            )
          }
        </div>
        <div className='flex item-center gap-3 w-full overflow-x-scroll mt-4' >
          {docSlots.length && docSlots[slotIndex].map((item,index)=>(

            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime?"bg-blue-500 text-white":"text-gray-400 border border-gray-300"}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}

        </div>
        
          <button className='bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full cursor-pointer my-6'>Book an appointment</button>
      </div>
      {/* Listing Related Doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
      
    </div>
  )
}

export default Appointment

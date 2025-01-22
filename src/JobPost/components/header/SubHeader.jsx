import React from 'react'
import { PiBellRinging } from "react-icons/pi";

const SubHeader = () => {
  return (
    <div className='flex justify-between items-center md:ml-[100px] md:mr-[620px]'>
      <div> 
        <img src="src/assets/logo.png" alt="Logo" 
         className="h-24 cursor-pointer mr-4" />
        </div>
        
      <div className='flex items-center space-x-6'>
      <PiBellRinging className='text-3xl' />
      <button className='border-2 font-bold border-violet-700 border-solid rounded md:p-2 hover:bg-violet-700 hover:text-white
       text-violet-700'>Post A Jobs</button>      
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png" alt="Logo" 
         className="md:h-12 rounded-full cursor-pointer mr-4" />
      </div>
    </div>
  )
}

export default SubHeader

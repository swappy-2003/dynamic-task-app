import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

function Cards() {
  return (
    <div className='w-60 h-72 bg-zinc-800/90  rounded-[50px] text-white px-5 py-10 relative overflow-hidden'>
        <FaRegFileAlt />
       
        <p className='text-l mt-5 font-semibold leading-tight '>Lorem ipsum dolor sit amet.</p>
       <div className="footer absolute bottom-0   px-8  mb-5  w-full py-3 left-0">
        <div className='flex items-center  justify-between'>
            <h5>.4 mb</h5>
            <span className='w-7 h-7 bg-zinc-300 rounded-full flex items-center justify-center'>
            <FaDownload size=".7em"color='#000'/>
            </span>
            
        </div>
       </div>
            data 
            tag
    </div>
  )
}

export default Cards
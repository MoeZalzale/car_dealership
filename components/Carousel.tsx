"use client";
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import {RxDotFilled} from "react-icons/rx"
import {motion, AnimatePresence} from "framer-motion"



function Carousel() {
    const slides = [
        "/c63.jpg",
        "/porche.jpg",
        "/m4.jpg"
        
        ]
    const [index,updateIndex] = useState(0)
    const [hover,setHover] = useState(false)

function slideForward () {
  updateIndex(prev => prev===slides.length-1 ? 0: prev+1)
}
function slideBack () {
  updateIndex(prev => prev===0 ? slides.length-1: prev-1)

}

    // useEffect(()=> {
    //   const interval = setInterval(()=>slideForward(),5000);
    //   return () => {
    //     clearInterval(interval);
    //   };
    // },[])

    const variants = {
      rest: {
        x: -100
      },

      hover: {
        x:0
      }
    }

  return (
    
   <div className='w-full flex items-center justify-around pt-40 '>

<div className='flex flex-col items-center space-y-5'>

<div className='relative w-[50rem] h-[30rem] duration-500 bg-cover bg-center rounded-2xl shadow-black shadow-2xl overflow-hidden' style={{backgroundImage: `url(${slides[index]})`}} onMouseOver={() => setHover(prev => true)} onMouseLeave={()=> setHover(prev=> false)}>
 <button  className = "bg-slate-500 rounded-full absolute right-0 top-[50%] z-10 animate-pulse bg-opacity-25 mr-3 translate-y-[-50%]"  onClick={()=> slideForward() }><ArrowRightIcon className=' w-20 h-10' /></button>
<button  className='bg-slate-500 rounded-full absolute left-0 top-[50%] z-10 animate-pulse bg-opacity-25 ml-3 translate-y-[-50%]' onClick={()=> slideBack() }><ArrowLeftIcon className='w-20 h-10 '/></button>
</div>

<div className='flex space-x-3'>
{slides.map((_,slideIndex)=> <RxDotFilled key={slideIndex} style ={{color: index==slideIndex? "#0284c7":"black"}}className='text-2xl cursor-pointer' onClick={()=> updateIndex(slideIndex)}/> )}
</div>
</div>

<div className='max-w-md text-7xl flex flex-col space-y-5'>
<h1 >
  THE BIGGEST INVENTORY FOR <span className='text-main'>EXOTIC </span> CARS
</h1>
<button className="bg-main py-3 w-[60%] text-white px-6 text-lg rounded flex  items-center justify-around shadow-black/50 shadow-md hover:shadow-lg hover:shadow-black transition-shadow ease-out duration-150"> VIEW OUR LOT NOW  <ArrowRightIcon className='w-5 h-5'/></button>

</div>


   </div>
  )
}

export default Carousel
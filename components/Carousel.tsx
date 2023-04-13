"use client";
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import {RxDotFilled} from "react-icons/rx"
import {motion, AnimatePresence} from "framer-motion"
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query } from 'firebase/firestore';
import { db } from '@/firebase';
import useCars from '@/hooks/useCars';


type Props = {
  images: string[] | undefined
  version: string

}


function Carousel({images,version}: Props) {


    const [index,updateIndex] = useState(0)

function slideForward (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.stopPropagation()
  updateIndex(prev => prev===images!.length-1 ? 0: prev+1)
}
function slideBack (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.stopPropagation()
  updateIndex(prev => prev===0 ? images!.length-1: prev-1)

}


  return (
    
   

<div className='flex flex-col items-center space-y-5 w-full h-full'>

<div className={`relative duration-300 bg-cover bg-no-repeat flex-1 w-full md:bg-cover bg-center rounded-2xl shadow-${version === 'main' ? 'black' : 'none'} shadow-${version === 'main' ? '2xl' : 'none'}  overflow-hidden`} style={{backgroundImage: `url(${images?.[index]})`}}>
 <button  className = " absolute right-0 top-[50%] z-10 animate-pulse bg-opacity-25 mr-3 translate-y-[-50%]"  onClick={(e)=> slideForward(e) }><ArrowRightIcon className=' w-20 h-10' /></button>
<button  className=' absolute left-0 top-[50%] z-10 animate-pulse bg-opacity-25 ml-3 translate-y-[-50%]' onClick={(e)=> slideBack(e) }><ArrowLeftIcon className={`w-20 h-10 `}/></button>
</div>

{version === "main" && 
<div className='flex space-x-3'>
{images?.map((_,slideIndex)=> <RxDotFilled key={slideIndex} style ={{color: index==slideIndex? "#0284c7":"black"}}className='text-2xl cursor-pointer' onClick={()=> updateIndex(slideIndex)}/> )}
</div>
}

{version === 'details' && 
<div className='flex space-x-1'>
{images?.map((img,idx)=> 
<img  className={`w-20 h-20 cursor-pointer rounded overflow-x-auto border-red-400 border-${index===idx ? '2' : '0'} object-fill `} src={img} alt='' onClick={()=> updateIndex(idx)}/> 

  
  
  )}
</div>
}

</div>




  )
}

export default Carousel
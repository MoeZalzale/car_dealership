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
import { CarsContextProvider } from '@/context/CarsContext';



function Carousel() {

const cars = useCars() 


    const [index,updateIndex] = useState(0)

function slideForward () {
  updateIndex(prev => prev===cars!.length-1 ? 0: prev+1)
}
function slideBack () {
  updateIndex(prev => prev===0 ? cars!.length-1: prev-1)

}


  return (
    
   

<div className='flex flex-col items-center space-y-5'>

<div className={`relative w-[50rem] h-[30rem] duration-500 bg-cover bg-center rounded-2xl shadow-black shadow-2xl overflow-hidden`} style={{backgroundImage: `url(${cars?.[index]?.images[0]})`}}>
 <button  className = " absolute right-0 top-[50%] z-10 animate-pulse bg-opacity-25 mr-3 translate-y-[-50%]"  onClick={()=> slideForward() }><ArrowRightIcon className=' w-20 h-10' /></button>
<button  className=' absolute left-0 top-[50%] z-10 animate-pulse bg-opacity-25 ml-3 translate-y-[-50%]' onClick={()=> slideBack() }><ArrowLeftIcon className={`w-20 h-10 `}/></button>
</div>

<div className='flex space-x-3'>
{cars?.map((_,slideIndex)=> <RxDotFilled key={slideIndex} style ={{color: index==slideIndex? "#0284c7":"black"}}className='text-2xl cursor-pointer' onClick={()=> updateIndex(slideIndex)}/> )}
</div>

</div>




  )
}

export default Carousel
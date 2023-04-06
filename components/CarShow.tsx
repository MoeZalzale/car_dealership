'use client'
import Image from 'next/image'
import React from 'react'
import Carousel from "./Carousel"
import { ArrowRightIcon } from '@heroicons/react/24/solid'
function CarShow() {
  return (
    <div  className='flex flex-col'>
        <div className='bg-black flex items-center justify-center p-10 '>
          <div className='flex flex-col items-center space-y-5'>

        <h1 className='text-white text-6xl  font-bold'> WE ARE HERE FOR YOU</h1>
        <h1 className='text-white text-2xl '> Our <span className='text-main'> primary focus</span> is to get you into the vehicle that is right for you</h1>
          </div>

        </div>

        <div className='w-full flex items-center justify-around pt-40 '>

<Carousel/>
<div className='max-w-md text-7xl flex flex-col space-y-5'>
<h1 >
  THE BIGGEST INVENTORY FOR <span className='text-main'>EXOTIC </span> CARS
</h1>
<button className="bg-main py-3 w-[60%] text-white px-6 text-lg rounded flex  items-center justify-around shadow-black/50 shadow-md hover:shadow-lg hover:shadow-black transition-shadow ease-out duration-150"> VIEW OUR LOT NOW  <ArrowRightIcon className='w-5 h-5'/></button>

</div>
</div>



    </div>
  )
}

export default CarShow
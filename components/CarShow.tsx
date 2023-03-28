'use client'
import Image from 'next/image'
import React from 'react'
import Carousel from "./Carousel"
function CarShow() {
  return (
    <div  className='flex flex-col'>
        <div className='bg-black flex items-center justify-center p-10 '>
          <div className='flex flex-col items-center space-y-5'>

        <h1 className='text-white text-6xl  font-bold'> WE ARE HERE FOR YOU</h1>
        <h1 className='text-white text-2xl '> Our <span className='text-main'> primary focus</span> is to get you into the vehicle that is right for you</h1>
          </div>

        </div>
<Carousel/>





    </div>
  )
}

export default CarShow
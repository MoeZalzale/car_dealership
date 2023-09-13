'use client'
import Image from 'next/image'
import React from 'react'
import Carousel from "./Carousel"
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import useCars from '@/hooks/useCars'
import { useRouter } from 'next/navigation'
function CarShow() {
  const {push} = useRouter()
  const cars = useCars()
  return (
    <div  className='flex flex-col'>
        <div className='bg-black flex items-center justify-center p-10 '>
          <div className='flex flex-col items-center space-y-5'>

        <h1 className='text-white text-xl md:text-6xl  font-bold'> WE ARE HERE FOR <span className='text-main'> YOU</span></h1>
        <h1 className='text-white md:text-2xl '> Our <span className='text-main'> primary focus</span> is to get you into the vehicle that is right for you</h1>
          </div>

        </div>

        <div className='flex flex-col md:flex-row items-center justify-around pt-10 px-5'>

<div className='md:w-[50rem] md:h-[30rem] w-[calc(100dvw-40px)] h-[20rem]'>

<Carousel images={cars?.map(car => car.images[0])} version='main'/>
</div>


<div className='max-w-md text-3xl md:text-7xl flex flex-col space-y-5 md:items-start items-center justify-center'>
<h1 >
  THE <span className='text-main'> BIGGEST</span> INVENTORY IN TOWN
</h1>
<button onClick={()=> push('/inventory') }className="bg-main py-3 whitespace-nowrap w-[60%] text-white px-6 text-sm md:text-lg rounded flex  items-center justify-around shadow-black/50 shadow-md hover:shadow-lg hover:shadow-black transition-shadow ease-out duration-150"> VIEW OUR LOT NOW  <ArrowRightIcon className='w-5 h-5'/></button>

</div>
</div>



    </div>
  )
}

export default CarShow
"use client"
import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import {motion, MotionAdvancedProps} from "framer-motion"

function Testimonials() {

    const variants= {
        hidden: {opacity: 0},
        show: (i:number)  => ({
            opacity: 1,
            transition: {   
                delay: i * 0.3,
                duration: 1
            }
        })
    }



  return (
    <div>
            <div className='  h-20 bg-gradient-to-b to-slate-200 from-transparent w-full'></div>
    <div className=' relative flex flex-col items-center space-y-20 bg-slate-200'>
        <div className='absolute top-0 h-20 bg-gradient-to-b to-slate-200 z-[20]  from-transparent w-full'></div>
        <div className='flex flex-col items-center'>
                    <h1 className='text-6xl'>ENOUGH TALKING FROM US</h1>
                    <h1 className='text-2xl'>See what some of our customers have to say</h1>
        </div>

        <div className='flex max-w-7xl items-start justify-between w-full'>

        <motion.div variants={ variants} custom={1} initial="hidden" whileInView="show" viewport={{once:true}}   className='flex flex-col items-center bg-white shadow-lg rounded  py-10 px-5 '>
            <div className='max-w-xs font-bold'>
                            <p>" One of the friendliest staff smoothest experiences I have had buying a car. Would definitely recommend this place to anyone trying to find the right vehicle"</p>
                    </div>

                    <div className='flex p-5 items-center justify-between w-full flex-nowrap'>
                    <div className='flex flex-nowrap whitespace-nowrap items-center'>

                        
                    <img className= 'rounded-full w-16' src="https://api.dicebear.com/5.x/open-peeps/svg?seed=Sammy" alt="" />

                                    <p className='font-bold'>Mark</p>
                            </div>
                        <div className='flex'>

                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                        </div>

                    
                    </div>
          </motion.div>


          <motion.div variants={ variants} custom={2} initial="hidden" whileInView="show" viewport={{once:true}} className='flex flex-col items-center bg-white shadow-lg rounded  py-10 px-5 '>
                    <div className='max-w-xs font-bold'>
                            <p>" One of the friendliest staff smoothest experiences I have had buying a car. Would definitely recommend this place to anyone trying to find the right vehicle"</p>
                    </div>

                    <div className='flex p-5 items-center justify-between w-full flex-nowrap'>
                    <div className='flex flex-nowrap whitespace-nowrap items-center'>

                        
                    <img className= 'rounded-full w-16' src="https://api.dicebear.com/5.x/open-peeps/svg?seed=Jerry1" alt="" />

                                    <p className='font-bold'>Jerry</p>
                            </div>
                        <div className='flex'>

                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                        </div>

                    
                    </div>
          </motion.div>




          <motion.div variants={ variants} custom={3} initial="hidden" whileInView="show" viewport={{once:true}}  className='flex flex-col items-center bg-white shadow-lg rounded  py-10 px-5 '>
                    <div className='max-w-xs font-bold'>
                            <p>" One of the friendliest staff smoothest experiences I have had buying a car. Would definitely recommend this place to anyone trying to find the right vehicle"</p>
                    </div>

                    <div className='flex p-5 items-center justify-between w-full flex-nowrap'>
                    <div className='flex flex-nowrap whitespace-nowrap items-center'>

                        
                    <img className= 'rounded-full w-16' src="https://api.dicebear.com/5.x/open-peeps/svg?seed=Sophia5" alt="" />

                                    <p className='font-bold'>Sophia</p>
                            </div>
                        <div className='flex'>

                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                            <StarIcon className='w-7 h-7 text-yellow-400'/>
                        </div>

                    
                    </div>
          </motion.div>


        </div>
    </div>
    <div className='  h-20 bg-gradient-to-b from-slate-200 to-transparent w-full'></div>

                        </div>
  )
}

export default Testimonials
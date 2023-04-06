'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { KeyIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import Modal from "./Modal"
import { AnimatePresence, animate } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import {motion} from "framer-motion"
import { duration } from '@mui/material'



function Home() {

  const [modalOpen, updateModel] = useState(false)

  function close(){
    updateModel(false)
  }

  const variants = {
    initial: {
        height: 0
    },
    animate: (i:number) =>  ({
      height:"auto",
      transition: {
        delay: i * 0.3,
        duration: 1
      }
    })

  }

  return (
  
    <div className=" flex items-center justify-center h-[80vh]">
      <div><Toaster/></div>
      



        <div className='max-w-sm flex flex-col space-y-5 justify-center items-start m-10'> 

    <h1 className='text-7xl max-w-full'>SAVE. <span className='text-main '>BIG</span>. TODAY.</h1>
    <span>Why wait? Get you dream car<span className='text-main  text-lg'> NOW</span>.</span>
        <div className='flex space-x-3  '>
        <button onClick ={() => updateModel(true)}className="bg-main py-3 text-white px-6 text-lg rounded flex whitespace-nowrap items-center justify-between shadow-black/50 shadow-md hover:shadow-lg hover:shadow-black transition-shadow ease-out duration-150"> <KeyIcon className='h-5 w-5 mr-3'/> <span> Book a Test Drive </span></button>
        <button className="bg-black text-white py-3 text-lg px-4 rounded flex whitespace-nowrap items-center justify-between shadow-black/50 shadow-md hover:shadow-lg hover:shadow-main transition-shadow ease-out duration-150">  <span> Check Our Lot </span> <ArrowRightCircleIcon className='h-6  w-6 ml-3'/></button>



        </div>

        </div>

        <div className=' relative '>
          
    <Image src={"/home_car.png"} alt="none" width={800} height={800} style={{"objectFit": "contain"}}/>
      <motion.div className='flex space-x-3 absolute z-[-1] top-0  right-[50%] translate-x-[50%] opacity-70 h-[30rem] overflow-hidden'  animate="animate" initial="initial">
      <motion.div className=' w-[10rem] bg-[#81C4FF] rounded'  variants={variants} custom={1}/>
      <motion.div className=' w-[10rem] bg-[#16588E] rounded ' variants={variants} custom={2}/>
      <motion.div className=' w-[10rem] bg-[#E7222E] rounded' variants={variants} custom={3}/>
      </motion.div>

        </div>
        
    <AnimatePresence>
    {modalOpen && <Modal onClose= {close}/>}
    </AnimatePresence>
  </div>


  )
}

export default Home
"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { TextField, MenuItem, SelectChangeEvent, Select} from '@mui/material';
import {DatePicker,LocalizationProvider} from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { db } from '@/firebase';
import {useCollection} from "react-firebase-hooks/firestore";
import { collection, query } from 'firebase/firestore';
import {motion} from "framer-motion"
import { toast } from 'react-hot-toast';



function Modal({onClose}:{onClose:()=>void}) {
  const animate = {
    rest: { y: "-100vh", opacity:0},
  
  enter: { y:0, opacity:1},
  exit: {y: "100vh", opacity: 1}

}


  const [selectedCar,updateCar] = useState("Select a car")

const [cars] = useCollection(query(
  collection(db, 'cars')
))

 useEffect(()=> {
  console.log(selectedCar)

 },[selectedCar])

 function handleSubmit (e: FormEvent) {
  e.preventDefault();
  toast.success("A representative will be in contact with you shortly", {duration:5000})
  onClose()

 }
  
    return (
        <motion.div variants={animate} initial="rest" animate="enter" exit="exit"
     className='fixed inset-0   backdrop-blur-sm flex justify-center items-center z-[40]' onClick={()=> onClose()}>
            <div className="bg-white rounded-2xl flex flex-col shadow-md items-center justify-center p-5" onClick={(e)=> e.stopPropagation()}> 
            <div className='flex items-center text-xl p-5 w-full '>
              <h1 className='flex-1'>Book a test drive</h1>
              <XMarkIcon className='w-8 h-8 cursor-pointer' onClick={()=> onClose() }/>
            </div>

          <form className='flex flex-col items-center' onSubmit={handleSubmit}>

            <div className='grid grid-cols-2 gap-10 '>

          <TextField variant='outlined'  required label="First Name"  />
          <TextField variant='outlined' required label='Last Name' />
          <TextField variant='outlined' required label='Phone Number' />
          <TextField variant='outlined' required label='Email' />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Date available"/>
          </LocalizationProvider>
    
        
          <Select  value={ selectedCar}  onChange={(e:SelectChangeEvent) => updateCar(e.target.value as string)}>
          <MenuItem  value={selectedCar}> Select a car</MenuItem> 

          {cars?.docs.map(car => 
              <MenuItem key={car.id} value={car.id}> {car.data().year +" "+ car.data().make+ " "+ car.data().model}</MenuItem> 
              
              )}
          </Select>
          
          <TextField multiline label="Special notes" className=' col-span-2'/>

            </div>

            <button className="bg-main py-3 mt-5 text-white px-6 text-lg rounded flex whitespace-nowrap items-center justify-between shadow-black/50 shadow-sm hover:shadow-md hover:shadow-black transition-shadow ease-out duration-150"> Submit</button>
            
          </form>
          </div>


     </motion.div>
    
    
  )
}

export default Modal
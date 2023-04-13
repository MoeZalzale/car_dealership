'use client'
import Carousel from '@/components/Carousel'
import Modal from '@/components/Modal'
import { db } from '@/firebase'
import { KeyIcon } from '@heroicons/react/24/solid'
import { collection, doc, query, where } from 'firebase/firestore'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { Toaster } from 'react-hot-toast'



 function Page({params: {carId}}: {params: {carId:string}}) {

  const [modalOpen, updateModal] = useState(false)


  const closeModal = () => {
    updateModal(false)
  }

const [car] = useDocument(doc(db,'cars',carId))

  return (
    <div className='flex w-full justify-center space-x-5 mt-32'>
      <Toaster/>

    <div className='flex flex-col w-[50rem] h-[40rem]'>
      <Carousel images={car?.data()?.images} version='details'/>
    </div>

    <div className='flex flex-col '>
      <h1 className='text-5xl font-bold'> {`${car?.data()?.year} ${car?.data()?.make} ${car?.data()?.model}` }</h1>
      <h1 className='text-3xl mt-10'>$60,000</h1>
      <p className='text-emerald-600 text-xs'> 10% cheaper than the current market</p>

      <h1 className='mt-5'> Kilometers: 2000</h1>

      <button onClick = {() => updateModal(true)} className="bg-main mt-10 py-3 text-white px-6 text-lg rounded flex whitespace-nowrap items-center w-[70%] shadow-black/50 shadow-md hover:shadow-lg hover:shadow-black transition-shadow ease-out duration-150"> <KeyIcon className='h-5 w-5 mr-3'/> <span> Book a Test Drive </span></button>
    </div>

    <AnimatePresence>
    {modalOpen && <Modal def = {{name: `${car?.data()?.year} ${car?.data()?.make} ${car?.data()?.model}`, id: carId}} onClose={() => closeModal()}/>}
    </AnimatePresence>

    </div>
  )
}

export default Page
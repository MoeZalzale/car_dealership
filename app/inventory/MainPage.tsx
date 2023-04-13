"use client"
import Carbox from '@/components/Carbox'
import Sidebar from '@/components/Sidebar'
import { db } from '@/firebase'
import { collection, query } from 'firebase/firestore'
import React, {useEffect, useState} from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import {AdjustmentsHorizontalIcon, XMarkIcon} from "@heroicons/react/24/solid"
import { AnimatePresence } from 'framer-motion'
import useCars from '@/hooks/useCars'
import { FilterContextProvider, useFilterContext, } from '@/context/FilterContext'

type Car ={
  color:string,
  images: string[],
  make:string,
  model:string,
  year: number,
  id: string
  
  
  }

function MainPage() {
const cars = useCars()

const {modelFilters,makeFilters,removeMakesFilter,removeModelFilter} = useFilterContext()

 const [sidebarOpen,updateSidebar] =useState(false)

 const close = ()=> {
updateSidebar(false)
 }

 useEffect(()=> {
sidebarOpen ? document.body.style.overflowY ="hidden" : document.body.style.overflowY ="auto"

 },[sidebarOpen])

  return (

    <div className=' m-10 flex flex-col '>
      <div className='flex w-full relative pb-10'>
      <button onClick={() => updateSidebar(true)}className='flex items-center space-x-3 rounded-2xl right-10 top-0 absolute bg-white px-4 py-2 shadow-md bg-slate-200/40 hover:bg-slate-200'><AdjustmentsHorizontalIcon className='w-4 h-4'/> <span>Filter & Sort</span> </button>

      </div>
      <div className=' p-5  items-center md:flex md:space-x-3 grid grid-cols-[repeat(2,minmax(0,7rem))] justify-center md:justify-start gap-x-5 md:gap-x-0 gap-y-3'>
        {[...makeFilters, ...modelFilters].map(filter => 
        <div className='rounded-2xl bg-slate-200 py-1 px-4 flex items-center space-x-2 justify-around' >
          <span>{filter}</span>
          <XMarkIcon className='w-4 h-4 cursor-pointer' onClick={()=> {makeFilters.includes(filter)?  removeMakesFilter(filter) : removeModelFilter(filter)}}/>
        
        </div>)}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5   rounded p-5'>
        {cars?.filter(car => (makeFilters.length ===0 ||  makeFilters.some(filter => car.make===filter)) &&
                             (modelFilters.length ===0 ||  modelFilters.some(filter => car.model===filter))
                             ).map(c => <Carbox {...c as Car}/>)

        }
      </div>
      <AnimatePresence>
        {sidebarOpen&& <Sidebar onClose= {close}/>}
      </AnimatePresence>
    </div>
  )
}

export default MainPage
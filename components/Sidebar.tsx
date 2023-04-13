import React from 'react'
import { ArrowDownIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import SidebarOptions from './SidebarOptions'
import { useFilterContext } from '@/context/FilterContext';




function Sidebar({onClose}:{onClose: ()=>void}) {

  const {getModels,getMakes,addMakesFilter,removeMakesFilter,makeFilters,addModelFilter,removeModelFilter,modelFilters} = useFilterContext();
 


  const variants = {
    rest:{
        width:0,
    },
    animate:{
      width:'auto',
 
    },
  }


  return (
    <div className='fixed inset-0 backdrop-blur-sm z-10' onClick={()=> onClose()}>


  <motion.div className='absolute top-0 right-0 flex flex-col bg-white h-full md' variants={variants} initial="rest" animate="animate" exit="rest" onClick={(e)=>e.stopPropagation()}>
    <div className='flex items-center justify-between p-5'>
      <div/>
      <h1 > FILTER & SORT</h1> 
      <XMarkIcon className='w-5 h-5 cursor-pointer' onClick={()=> onClose()}/>
      </div>

 <SidebarOptions title='MAKE' content={getMakes()} funcs={[addMakesFilter,removeMakesFilter,makeFilters]}/>
  <SidebarOptions title='MODEL' content={getModels()} funcs={[addModelFilter,removeModelFilter,modelFilters]}/>


  </motion.div>
    
    </div>
  )
}

export default Sidebar
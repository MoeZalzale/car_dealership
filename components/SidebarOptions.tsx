import { useFilterContext } from '@/context/FilterContext'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import { AnimatePresence,motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import {Radio} from "@mui/material"



type SidebarProps ={

    title: string,
    content: string[] | undefined,
    funcs: [(make: string) => void,
        (make: string) => void,
        string[]
    ]

}



function SidebarOptions({title,content,funcs}:SidebarProps) {
    const [isOpen,setIsOpen] = useState(false)

    const [add,remove,list] = funcs

    const accordian = {
        rest: {
            height:0,
        },
        animate:{
            height:'auto',
            
        }
    }

    const arrow ={
        open : {rotate: isOpen ? 180 : 0}

    }

    useEffect(()=>{
    if (list.length>0) setIsOpen(true)

    },list)


  return (
    <div className='flex flex-col p-5 justify-center'>
    <div className='flex items-center justify-between cursor-pointer' onClick={()=>setIsOpen(prev=> !prev)}>
    <h1 className='font-bold'>{title}</h1>
    <motion.button variants={arrow}  animate='open'><ArrowDownIcon className={`w-5 h-5 `}/></motion.button>
</div>

<AnimatePresence initial={false}>

{isOpen &&
<motion.div key='options' className='overflow-hidden grid grid-cols-2' variants={accordian} initial='rest' exit='rest' animate='animate' transition={{ duration: 0.5}}
>
{ content?.map(c => 
<div className='flex  items-center'>
    <h1 className='flex-[0.30]'>{c}</h1>
    <Radio sx={{ '& .MuiSvgIcon-root': {fontSize: 20,},}} checked={list.includes(c)} onClick={() => list.includes(c)? remove(c): add(c) }/>
    </div>
    
    )      }

</motion.div>
}
<hr className='mt-5'/>
    </AnimatePresence>
    </div>
  )
}

export default SidebarOptions
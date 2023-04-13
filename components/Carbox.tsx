"use client"
import React, { useState } from 'react'
import Carousel from './Carousel'
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query, } from 'firebase/firestore';
import { db } from '@/firebase';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

type Car ={
color:string,
images: string[],
make:string,
model:string,
year: number,
id: string


}


function Carbox({color,images,make,model,year,id}: Car) {

  const router = useRouter()

const [index, updateIndex] = useState(0);


function slideForward () {
    updateIndex(prev => prev===images.length-1 ? 0: prev+1)
  }
  function slideBack () {
    updateIndex(prev => prev===0 ? images.length-1: prev-1)
  
  }
  
  return (
    <div className='flex flex-col bg-white rounded-2xl pb-5 shadow-black shadow-md hover:shadow-lg hover:shadow-black transition-shadow ease-out cursor-pointer overflow-hidden  h-[20rem]' onClick={()=> router.push(`/inventory/${id}`)}>
<Carousel images={images} version='inv'/>
<div className='flex items-center justify-center'>
    {`${year} ${make} ${model} (${color})`}
</div>

    </div>
  )
}

export default Carbox
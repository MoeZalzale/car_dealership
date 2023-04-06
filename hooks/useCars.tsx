import { db } from '@/firebase'
import { collection, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

type Car ={
    color:string,
    images: string[],
    make:string,
    model:string,
    year: number,
    id: string
    
    
}

function useCars() {

const [carList,updateList] = useState<Car[] | undefined>([])
const [cars] = useCollection(query
    (collection(db,"cars")))

    useEffect(()=>{
        updateList(cars?.docs.map((car) => ({id:car.id, ...car.data()} as Car )))

        },[cars])

   return carList
 


}

export default useCars
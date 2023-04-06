import useCars from '@/hooks/useCars'
import React, {ReactNode, createContext, useContext, useState} from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

type Car ={
    color:string,
    images: string[],
    make:string,
    model:string,
    year: number
    
    
    }

type FilterContext = {
    getMakes: ()=> string[] | undefined,
    getModels:() => string[] | undefined,
    addMakesFilter: (make: string) => void,
    removeMakesFilter: (make: string) => void,
    makeFilters: string[] 
    addModelFilter: (make: string) => void,
    removeModelFilter: (make: string) => void,
    modelFilters: string[]
}




   const FilterContext = createContext({} as FilterContext) 

   export const useFilterContext=()=>{
    return useContext(FilterContext)
   }



export const FilterContextProvider =({children}: {children: ReactNode}) => {

    const [makeFilters,updateMakeFilter]= useState<string[]>([])
    const [modelFilters,updateModelFilter]= useState<string[]>([])

const cars = useCars()

const addMakesFilter = (make: string) =>{
updateMakeFilter(prev => [...prev,make])
}
const removeMakesFilter = (make: string) =>{
    updateMakeFilter(prev => prev.filter(m => m !== make))
    updateModelFilter(prev => prev.filter(model => !cars?.some(car => car.make === make && car.model === model)))}

    const addModelFilter = (make: string) =>{
        updateModelFilter(prev => [...prev,make])
        }
        const removeModelFilter = (make: string) =>{
            updateModelFilter(prev => prev.filter(m => m !== make))
            }

const getMakes =() => {
    // const makes:string[] = []
    // cars?.forEach(car => 
    //     {
    //         if (!makes.includes(car.make)) makes.push(car.make)

    //     })
    //     return makes

    return Array.from(new Set(cars?.map(car => car.make)))


}

const getModels =() => {
    return cars?.filter((car:Car)=> makeFilters.includes(car.make)).map(x => x.model)
}


return (
<FilterContext.Provider value ={{getMakes,getModels, addMakesFilter,removeMakesFilter, makeFilters,addModelFilter,removeModelFilter,modelFilters}}>

{children}


</FilterContext.Provider>

)

}
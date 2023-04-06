import useCars from '@/hooks/useCars'
import React, {ReactNode, createContext, useContext, useEffect} from 'react'

type Car ={
    color:string,
    images: string[],
    make:string,
    model:string,
    year: number,
    id: string
    }

    type CarsContext = {
        cars: Car[] | undefined
    }

const CarsContext = createContext({} as CarsContext)

export const useCarContext = () => {
    return useContext(CarsContext)
}


export const CarsContextProvider = ({children}: {children: ReactNode}) => {
 
    const cars = useCars();

    useEffect(()=>{
            console.log(cars)

    },[cars])


    return (
        <CarsContext.Provider value={{cars}}>

            {children}

        </CarsContext.Provider>

    )

}


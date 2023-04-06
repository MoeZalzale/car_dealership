"use client"
import MainPage from "./MainPage"
import { FilterContextProvider } from "@/context/FilterContext"
import React from 'react'

function page() {
  return (
<FilterContextProvider>
<MainPage/>
</FilterContextProvider>
  )
}

export default page
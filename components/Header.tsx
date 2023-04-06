"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

function Header() {

    const [menuOpen,updateMenu] = useState(false)


useEffect(()=> {
if (menuOpen){
  document.body.style.overflowY ="hidden"
}

else{
  document.body.style.overflowY ="auto"

}

},[menuOpen])



  return (
      <header className='flex justify-between w-full max-w-6xl mx-auto p-5 items-center'>
        
            <Link href={"/"}> <Image className = " cursor-pointer "src={"/carLogo.png"} alt="none" height={100} width={100}></Image></Link>
       
          <div className="hidden md:flex space-x-5">

        <Link href="/" className=" header-text hover:text-main transition-all ease-out"> Home</Link>
        <Link href="/inventory" className="header-text hover:text-main transition-all ease-out"> Inventory</Link>
        <Link href="/" className="header-text hover:text-main transition-all ease-out"> Our Team</Link>
        <Link href="/" className="header-text hover:text-main transition-all ease-out"> Contact</Link>
          </div>

        <div className='hidden md:inline-block'/>
        
      <Bars3Icon onClick= {()=> updateMenu(true)}className='w-10 h-10 md:hidden cursor-pointer'/>

      {
          menuOpen && 
          <div className='h-[100dvh] inset-0 fixed  flex flex-col items-center justify-center space-y-5 z-50 bg-white'>
            <XMarkIcon className='w-10 h-10 top-5 right-10 absolute' onClick={() => updateMenu(false)}/>
        <Link href="/" className=" header-text hover:text-main transition-all ease-out" onClick={() => updateMenu(false)}> Home</Link>
        <Link href="/inventory" className="header-text hover:text-main transition-all ease-out" onClick={() => updateMenu(false)}> Inventory</Link>
        <Link href="/" className="header-text hover:text-main transition-all ease-out" onClick={() => updateMenu(false)}> Our Team</Link>
        <Link href="/" className="header-text hover:text-main transition-all ease-out" onClick={() => updateMenu(false)}> Contact</Link>



          </div>



      }
      
      </header>
      )
}

export default Header
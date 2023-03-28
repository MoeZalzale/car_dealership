import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Header() {


  return (
      <header className='flex justify-between w-full max-w-6xl mx-auto p-5 items-center'>
        
            <Link href={"/"}> <Image className = " cursor-pointer "src={"/carLogo.png"} alt="none" height={100} width={100}></Image></Link>
          <div className="flex space-x-5">

        <Link href="/" className=" header-text hover:text-main transition-all ease-out"> Home</Link>
        <Link href="/inventory" className="header-text hover:text-main transition-all ease-out"> Inventory</Link>
        <Link href="/" className="header-text hover:text-main transition-all ease-out"> Our Team</Link>
        <Link href="/" className="header-text hover:text-main transition-all ease-out"> Contact</Link>
          </div>
        
        <div>
          sign in
        
        

        </div>
      
      
      </header>
      )
}

export default Header
import "../styles/globals.css";
import Header from "../components/Header"
import {Rubik} from "next/font/google"
import Home from "@/components/Home";
 const font = Rubik({subsets: ["latin"], weight: "400",})
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
   <html>
    <head/>

    <body className={font.className + " flex flex-col bg-slate-100 min-h-screen"}>
      
    
<Header/>

<div className="flex flex-col space-y-40">

  {children}
 
</div>



    </body>

   </html>
  )
}

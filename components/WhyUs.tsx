import React from 'react'
import { TrophyIcon,WrenchScrewdriverIcon, TruckIcon} from '@heroicons/react/24/outline'
function WhyUs() {
  return (
      <div>
                        <div className='  h-20 bg-gradient-to-b to-slate-200 from-transparent w-full'></div>

    <div className='flex flex-col justify-center items-center bg-slate-200'>
        <div className='flex flex-col space-y-3 justify-center items-center p-3'>

        <h1 className='text-7xl text-main'> Why Us?</h1>
        <h1 className='text-4xl font-black'> The Competitors Cannot Compete.</h1>
        </div>

        <div className='flex-col md:flex-row space-y-5 md:space-y-0 flex items-center justify-between pt-20 w-full max-w-7xl'>

          <div className='flex flex-col items-center  bg-white shadow-lg rounded py-10 px-5 h-72'>
                <TrophyIcon className='w-20 h-20 text-black mb-5'/>
                
                  <div className='max-w-xs text-lg flex-1'>
                   Award winning customer service and prices. Wide variety of vehicles to meet anyones needs.
                        </div>   

             
          </div>

          <div className='flex flex-col items-center bg-white shadow-lg rounded  py-10 px-5 h-72 '>
                <WrenchScrewdriverIcon className='w-20 h-20 text-black mb-5'/>
                <div className='max-w-xs text-lg  flex-1'>
                      Free repairs for the first 3 months after purchase of vehicle, as well as free maintenance for the first year. 

                </div>
          </div>

          <div className='flex flex-col items-center bg-white shadow-lg rounded  py-10  px-5 h-72'>
                <TruckIcon className='w-20 h-20 text-black mb-5 shrink-0'/>
                <div className='max-w-xs text-lg flex-1  '>
                      24/7 roadside assisstance. Yes you read that right. Is your car not starting from home? from work? We will come to you.

                </div>
          </div>


        </div>
        
        </div>
        <div className='  h-20 bg-gradient-to-b from-slate-200 to-transparent w-full'></div>

        </div>
  )
}

export default WhyUs
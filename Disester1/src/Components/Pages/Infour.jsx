import React from 'react'
import { Link } from 'react-router-dom'
import Cross2 from './Photo2/cross.png';
import Map from './Photo2/maping.png';

function Infour() {
  return (
    <>
     <section>
        <div className='flex items-center justify-between lg:px-16 bg-[#E4E4E780] lg:py-8 sm:px-8 sm:py-4 px-4 py-3'>
        
                  <div className='flex items-center sm:gap-3 gap-1'>
                      <img src={Cross2} alt="" className='w-7 sm:w-10 lg:w-14' />
                      <div>
                        <p className='lg:text-[12px] text-[6px] sm:text-[10px] text-[#71717A]'>Home - Incidents - New Incident</p>
                         <h2 className='lg:text-[26px] text-[12px] sm:text-[20px] font-bold'>New Incident</h2>
                      </div>
                  </div>
        
                  <div className="lg:w-[900px] w-[90px] sm:w-[400px] bg-[#E5E7EB] rounded-full sm:h-2 h-1">
                     <div className=" bg-[#FB923C] lg:w-40 sm:w-20 sm:h-2 h-1 w-3 rounded-full">          
                     </div>
                  </div>
        
                  <div className='flex lg:gap-8 sm:gap-4 gap-2'>
                    <Link to="/seven" className='border bg-white lg:px-16 px-3 sm:px-10 lg:py-2 py-1 rounded-md sm:text-base text-[7px] hover:bg-yellow-300 text-[#71717A]'>Back</Link>
                    <Link to="/eight" className='border bg-[#F26922] lg:px-9 rounded-md px-3 lg:py-2 py-1  sm:text-base text-[7px] hover:bg-yellow-300 text-white'>Finished</Link>
                  </div>
        
                </div>


                <div className='lg:mx-[500px] sm:pt-8 sm:mx-[200px] mx-[60px] pt-6'>
                    <h2 className='font-bold sm:text-[24px] text-[14px]'>Where’s the incident?</h2>
                    <p className='text-[#71717A] text-[9px] sm:text-[14px] sm:pt-4 pt-2'>Enter a GPS, address. or pin point on the map. Try to be as accurate as </p>
                    <p className='text-[#71717A] text-[9px] sm:text-[14px] sm:pb-5 pb-3'>possible, or click:Jurisdiction Wide</p>
                    <img src={Map} alt="" className='lg:w-[900px] sm:w-[600px] w-[300px]' />
                </div>

     </section>
    
    </>
  )
}

export default Infour
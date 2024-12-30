import React from 'react'
import { Link } from 'react-router-dom'
import Cross1 from './Photo2/cross.png';

function Inthree() {
  return (
    <>
      <section>
        <div className='flex items-center justify-between lg:px-16 bg-[#E4E4E780] lg:py-8 sm:px-8 sm:py-4 px-4 py-3'>

          <div className='flex items-center sm:gap-3 gap-1'>
              <img src={Cross1} alt="" className='w-7 sm:w-10 lg:w-14' />
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
            <Link to="/five" className='border bg-white lg:px-16 px-3 sm:px-10 lg:py-2 py-1 rounded-md sm:text-base text-[7px] hover:bg-yellow-300 text-[#71717A]'>Back</Link>
            <Link to="/six" className='border bg-[#F26922] lg:px-8 rounded-md px-3 lg:py-2 py-1  sm:text-base text-[7px] hover:bg-yellow-300 text-white'>Next Step</Link>
          </div>

        </div>


        <div>
          <div className='lg:mx-[400px] mx-[40px] sm:mx-[200px] mt-8'>
            <h2 className='text-[#09090B] font-bold text-sm sm:text-[24px]'>Let’s give the incident a title?</h2>
            <div className='flex flex-col'>
            <label htmlFor="input" className='sm:text-[14px] text-[10px] text-[#71717A] mt-3'  >Make a title that will easily identify the incidents</label>
            <input id='input' type='text' placeholder='Add title here' className='sm:text-[12px] text-[8px] text-[#71717A] border px-1 py-2.5 mt-3 bg-[#F4F4F5] border-[#E4E4E7] rounded' />
            </div>
          </div>
        </div>



        <div>
          <div className='lg:mx-[400px] sm:mx-[200px] mx-[40px] mt-8'>
            <h2 className='text-[#09090B] font-bold sm:text-[24px] text-sm'>Describe what happened during the incident?</h2>
            <div className='flex flex-col'>
            <label htmlFor="input" className='sm:text-[14px] text-[10px] mt-3 text-[#71717A]'  >Share some information about the incident. The when, where, how. </label>
            <input id='input' type='text' placeholder='Type here' className='sm:text-[12px] text-[8px] text-[#71717A] border px-1 pt-2.5 pb-24 mt-3 bg-[#F4F4F5] border-[#E4E4E7] rounded' />
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Inthree
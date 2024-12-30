import React from 'react'
import { Link } from 'react-router-dom';
import Search from './Photo2/search.png';
import Smoke from './Photo2/smoke1.png';
import Man from './Photo2/man1.png';
import Plane from './Photo2/plane1.png';
import Labour from './Photo2/labour1.png';
import Fire from './Photo2/fire1.png';
import Oldhouse from './Photo2/old1.png';

function Incidents() {
  const Cards = [
      {
        id: 1,
        Photo: Smoke,
        title: "Whitechapel Rd.", 
        info: "Tulare County,  Los Angles, CA 23415",
        price: `1,456,654.00`
      },
      {
        id: 2,
        Photo: Man,
        title: "Whitechapel Rd.", 
        info: "Tulare County,  Los Angles, CA 23415",
        price: `1,456,654.00`
      },
      {
        id: 3,
        Photo: Plane,
        title: "Tulare County", 
        info: "Tulare County,  Los Angles, CA 23415",
        price: `1,456,654.00`
      },
      {
        id: 4,
        Photo: Labour,
        title: "Tulare County", 
        info: "Tulare County,  Los Angles, CA 23415",
        price: `1,456,654.00`
      },
      {
        id: 5,
        Photo: Fire,
        title: "Tulare County", 
        info: "Tulare County,  Los Angles, CA 23415",
        price: `1,456,654.00`
      },
      {
        id: 6,
        Photo: Oldhouse,
        title: "Tulare County", 
        info: "Tulare County,  Los Angles, CA 23415",
        price: `1,456,654.00`
      }
    ]
  return (
    <>
      <section>
         <div className='flex items-center justify-between lg:px-16 bg-[#E4E4E780] lg:py-8 sm:px-8 sm:py-4 px-4 py-3'>
                   <div>
                     <p className='lg:text-[12px] text-[8px] sm:text-[10px] text-[#71717A]'>Home - Incidents</p>
                     <h2 className='lg:text-[26px] text-[16px] sm:text-[20px] font-bold'>Incidents</h2>
                   </div>
                   <div className='flex lg:gap-8 sm:gap-4 gap-2'>
                     <div className='flex items-center lg:gap-2 gap-1 border lg:px-4 lg:py-2 px-2 py-1 bg-white rounded-md '>
                       <img src={Search} alt="" />
                       <span className=' sm:text-base text-[7px] text-[#71717A]'>Search incident</span>
                     </div>
                     <button className='border bg-white lg:px-5 px-3 lg:py-2 py-1 rounded-md sm:text-base text-[7px] hover:bg-yellow-300 text-[#71717A]'>Sort By: Date modified</button>
                     <Link to="/incone" className='border bg-[#F26922] lg:px-5 rounded-md px-3 lg:py-2 py-1  sm:text-base text-[7px] hover:bg-yellow-300 text-white'>+ New Incident</Link>
                   </div>
                 </div>



                 <div className='flex flex-col sm:flex-row sm:flex-wrap lg:gap-12 lg:px-24 lg:pt-10 sm:gap-10 sm:pt-8 sm:px-12 gap-12 px-16 pt-12 '>
          {Cards.map((card) => (
            <div key={card.id} className='flex flex-col space-y-1.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>

              <img src={card.Photo} alt="" className='sm:w-64 w-72 lg:w-96 ' />
              <h2 className='text-[16px] sm:text-lg lg:text-xl font-bold'>{card.title}</h2>
              <p className='text-[14px] sm:text-[13px] lg:text-base text-[#71717A]'>{card.info}</p>
              <h3 className='text-[16px] sm:text-lg  lg:text-xl font-bold'>&#36;{card.price}</h3>

            </div>
          ))

          }
        </div>
      </section>
    </>
  )
}
export default Incidents


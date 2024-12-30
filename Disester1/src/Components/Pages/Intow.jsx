import React,  { useState } from 'react'
import { Link } from 'react-router-dom';
import Cross from './Photo2/cross.png';
import One from './Photo3/one.png';
import Tow from './Photo3/tow.png';
import Three from './Photo3/three.png';
import Four from './Photo3/four.png';
import Five from './Photo3/five.png';
import Six from './Photo3/six.png';
import Seven from './Photo3/seven.png';
import Eight from './Photo3/eight.png';
import Nine from './Photo3/nine.png';
import Ten from './Photo3/ten.png';
import Eleven from './Photo3/eleven.png';
import Twelve from './Photo3/twelve.png';
import Thirteen from './Photo3/thirteen.png';
import Fourteen from './Photo3/fourteen.png';
import Fifteen from './Photo3/fifteen.png';
import Sixteen from './Photo3/sixteen.png';
import Seventeen from './Photo3/seventeen.png';
import Eighteen from './Photo3/eighteen.png';


function Intow() {
    const [activeButton, setActiveButton] = useState(null);
    const handleClick = (id) => {
        setActiveButton(id);
    };
   
    const Card = [
        {
            id:1,
            image: One,
            title:"Avalanche",
        },
        {
            id:2,
            image: Tow,
            title:"Biological",
        },
        {
            id:3,
            image: Three,
            title:"Blizzerd",
        },
        {
            id:4,
            image: Four,
            title:"Cold/Freezing",
        },
        {
            id:5,
            image: Five,
            title:"Drought",
        },
        {
            id:6,
            image: Six,
            title:"Earthquake",
        },
        {
            id:7,
            image: Seven,
            title:"Flooding",
        },
        {
            id:8,
            image: Eight,
            title:"Heat Wave",
        },
        {
            id:9,
            image: Nine,
            title:"Hail",
        },
        {
            id:10,
            image: Ten,
            title:"Lightning",
        },
        {
            id:11,
            image: Eleven,
            title:"Man Made",
        },
        {
            id:12,
            image: Twelve,
            title:"Mudslide",
        },
        {
            id:13,
            image: Thirteen,
            title:"Severe Storm",
        },
        {
            id:14,
            image: Fourteen,
            title:"Strong Wind",
        },
        {
            id:15,
            image: Fifteen,
            title:"Tornado",
        },
        {
            id:16,
            image: Sixteen,
            title:"Tsunami",
        },
        {
            id:17,
            image: Seventeen,
            title:"Volcanic Eruption",
        },
        {
            id:18,
            image: Eighteen,
            title:"Wildfire",
        }
    ]
  return (
    <>
     <section>
        <div className='flex items-center justify-between lg:px-16 bg-[#E4E4E780] lg:py-8 sm:px-8 sm:py-4 px-4 py-3'>
                  <div className='flex items-center sm:gap-3 gap-1'>
                    <img src={Cross} alt="" className='w-7 sm:w-10 lg:w-14' />
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
                    
                    <Link to="/three" className='border bg-white lg:px-16 px-3 sm:px-10 lg:py-2 py-1 rounded-md sm:text-base text-[7px] hover:bg-yellow-300 text-[#71717A]'>Back</Link>
                    <Link to="/four" className='border bg-[#F26922] lg:px-8 rounded-md px-3 lg:py-2 py-1  sm:text-base text-[7px] hover:bg-yellow-300 text-white'>Next Step</Link>
                  </div>
                </div>


                <div className='lg:mx-[400px] sm:pt-8 pt-4 mx-4 sm:mx-[130px] pb-8'>
                    <h2 className='sm:text-[24px] font-bold'>Which of these best describes the incident?</h2>
                <div className='flex flex-wrap   gap-4 sm:pt-4 pt-3'>
                    {Card.map((cards) =>(
                        <div key={cards.id} onClick={() => handleClick(cards.id)} className={`flex items-center gap-4  py-6 px-8 rounded w-[180px] sm:w-[230px] ${ activeButton === cards.id ? "bg-[#F26922]" : "bg-[#E4E4E7]"}`}>
                            <img src={cards.image} alt="" className='sm:w-6 w-4' />
                            <p className='sm:text-base text-[10px]'>{cards.title}</p>
                        </div>
                    ))}
                </div>
                </div>
                
     </section>
    
    </>
  )
}

export default Intow
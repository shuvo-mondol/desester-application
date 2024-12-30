import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Dises from './Photos/disester.png';
import Navlog from './Photos/navlogo.png';
import Notification from './Photos/notification.png';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [isActive, setIsActive] = useState(false);
  const handleClicked = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className='bg-[#E4E4E780] border-b-2 '>
       <div className='flex  justify-between  mx-auto px-4 sm:px-6 lg:px-16 items-center h-16'>
         <div>
           <img src={Dises} alt="" className='' />
         </div>

          <button className='sm:hidden block ' onClick={() => setIsOpen(!isOpen)}>
           <div className='flex flex-col gap-1 border border-black rounded p-0.5'>
            <div className='h-0.5 w-6 bg-black '></div>
            <div className='h-0.5 w-6 bg-black '></div>
            <div className='h-0.5 w-6 bg-black '></div>
           </div>
          </button>

          <ul className='sm:flex hidden space-x-4'>
            <li>
              <Link to="/dashboard" onClick={handleClick} className={`lg:text-xl  ${active ? "font-bold text-black border-b-4 border-black" : "text-[#A1A1AA]"}`}>Dashboard</Link>
            </li>
            <li>
            <Link to="/incidents" onClick={handleClicked} className={`lg:text-xl  ${isActive ? "font-bold text-black border-b-4 border-black" : "text-[#A1A1AA]"}`}>Incidents</Link>
            </li>
            <li>
            <Link to="/locations" className='lg:text-xl text-[#A1A1AA]'>Locations</Link>
            </li>
            <li>
            <Link to="/" className='lg:text-xl text-[#A1A1AA]'>Activities</Link>
            </li>
            <li>
            <Link to="/" className='lg:text-xl text-[#A1A1AA]'>Documents</Link>
            </li>
            <li>
            <Link to="/" className='lg:text-xl text-[#A1A1AA]'>Cypher AI</Link>
            </li>
          </ul>

         <div className='flex space-x-2'>
          <img src={Notification} alt="" />
          <img src={Navlog} alt="" />

          <div className='sm:flex sm:flex-col hidden'>
            <p className='text-[#A1A1AA]'>Usman Zafar</p>
            <p className='text-[#A1A1AA]'>usmanzafar@gmail.com</p>
          </div>
         </div>

       </div>


{isOpen && (
       <div className='sm:hidden bg-gray-700 fixed inset-0 flex flex-col items-center justify-center'>

       <button className='absolute top-4 right-12 text-gray-300 hover:text-white' onClick={() => setIsOpen(false)}>
           <div className='flex flex-col gap-1 border border-black rounded p-0.5'>
            <div className='h-0.5 w-6 bg-black '></div>
            <div className='h-0.5 w-6 bg-black '></div>
            <div className='h-0.5 w-6 bg-black '></div>
           </div>
          </button>

          
            <Link onClick={() => setIsOpen(false)} to="/dashboard" className='block px-4 py-2 text-white text-xl hover:bg-gray-600'>Dashboard</Link>
            <Link onClick={() => setIsOpen(false)} to="/incidents" className='block px-4 py-2 text-white text-xl hover:bg-gray-600'>Incidents</Link>
            <Link onClick={() => setIsOpen(false)} to="/locations" className='block px-4 py-2 text-white text-xl hover:bg-gray-600'>Locations</Link>
            <Link onClick={() => setIsOpen(false)} to="/" className='block px-4 py-2 text-white text-xl hover:bg-gray-600'>Activities</Link>
            <Link onClick={() => setIsOpen(false)} to="/" className='block px-4 py-2 text-white text-xl hover:bg-gray-600'>Documents</Link>
            <Link onClick={() => setIsOpen(false)} to="/" className='block px-4 py-2 text-white text-xl hover:bg-gray-600'>Cypher AI</Link>
            

       </div>
       )}
      </nav>

      
      
    </>
  )
}

export default Navbar
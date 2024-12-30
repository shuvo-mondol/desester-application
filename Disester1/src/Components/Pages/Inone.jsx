import React, { useState } from 'react'
import Fan from './Photo2/fan.png';
import Err from './Photo2/err.png';
import Lok from './Photo2/lok.png'
import { Link } from 'react-router-dom';

function Inone() {
  const [currentStep, setCurrentStep] = useState(1);
  
    const steps = ["Step 1", "Step 2", "Step 3"];
  return (
    <>
     <div className='flex flex-col justify-center items-center sm:gap-8 sm:pt-12 gap-6 pt-10'>
        <div className='flex flex-col gap-2 items-center'>
          <h2 className='sm:text-[32px] text-xl font-semibold'>Let’s get started</h2>
          <p className='sm:text-[16px] text-[10px] text-[#71717A]'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar </p>
           <p className='sm:test-[16px] text-[10px] text-[#71717A]'> sit general sac mascho werhoLorem ipsum dolar sit gene</p>
        </div>
     <div className=" flex flex-col gap-6">
      <div className="flex items-center justify-center   space-x-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`sm:w-8 sm:h-8 flex w-5 h-5 items-center justify-center rounded-full text-white font-bold ${
                index + 1 <= currentStep ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-12 ${
                  index + 1 < currentStep ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>


      <div className="sm:mt-4 mt-3 flex sm:flex-row flex-col">
        <img src={Fan}
          className="sm:px-4 sm:py-2  text-white rounded mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
        />
         
        <img src={Err}
          className="sm:px-4 sm:py-2 py-4 text-white rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length))}
        />

        <img src={Lok}
          className="sm:px-4 sm:py-2  text-white rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length))}
        />
         
      </div>
    </div>

       <Link to="/started" className='bg-[#F26922] px-3 py-2 rounded sm:mt-14 mb-4' >Get Started</Link>

     </div>
    
    </>
  )
}

export default Inone
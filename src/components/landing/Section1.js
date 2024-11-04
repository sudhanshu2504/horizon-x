import React from 'react'
// import {bgVideo} from '@/assets/videos/LandingBG.webm';

function Section1() {
  return (
    <div className='min-h-screen relative bg-gradient-to-b from-transparent via-black/80 to-black'>
        <video className='w-full h-full object-cover absolute -z-[1] brightness-125' autoPlay loop muted>
            <source src='./assets/videos/LandingBG.webm' type='video/webm' />
        </video>
        <div className='w-full h-[92vh] md:h-screen lg:container mx-auto lg:px-10 flex flex-col md:flex-row items-end justify-end lg:justify-between'> 
            <div className='w-full lg:w-2/3 h-fit lg:my-10 flex flex-col justify-center lg:justify-start items-center lg:items-start'>
                <div className='text-3xl lg:text-6xl w-full md:w-4/5 px-6 lg:px-0 lg:![line-height:80px]'>
                    Unlock your business potential with expert consulting services
                </div>
                <span className='mt-4 text-base lg:text-lg w-full md:w-4/5 px-6 lg:px-0 text-gray-400'>
                At HorizonX, we provide tailored solutions to drive growth, streamline operations, and enhance your competitive edge.
                </span>
            </div>
            <div className='w-full lg:w-1/3 h-fit my-6 lg:my-10 md:pr-10 flex flex-col justify-center items-center md:items-start'>
                <span className='text-lg lg:text-xl w-full px-6'>Leave your email, we will contact you</span>
                <div className='flex gap-3 px-6 w-full mt-4'>
                    <input className='py-3 px-4 rounded-[8px] bg-gray-900/70 border border-gray-800 w-full' type='email' placeholder='Email Address' />
                    <button className='py-3 px-6 rounded-[8px] bg-[#fff5ed] text-base text-black'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1
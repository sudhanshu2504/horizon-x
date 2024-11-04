import React from 'react'
import {motion} from 'framer-motion'

function Section4() {
  return (
    <motion.div 
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
    className='w-full lg:container mx-auto flex flex-row items-center justify-center my-20'>
        <div className='relative w-full p-5 gap-6 md:px-10 py-4 flex flex-col items-center md:flex-row'>
          <div className='flex flex-col gap-y-6 h-full w-full md:w-1/2'>
              <span className='text-lg accent-color px-1'>
                Why do we need it?
              </span>
              <div className='text-3xl md:text-5xl w-4/5 font-thin'>
                Partner dedicated to your business&apos;s success
              </div>
              <div className='text-base md:text-lg w-4/5 font-thin opacity-70 line-clamp-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a vehicula mi, ut iaculis massa. Nullam at metus non eros tincidunt tristique a a diam. In gravida ultrices urna, eget placerat ipsum finibus sed. Morbi turpis nisi, convallis ut purus id, finibus varius ex. Curabitur ac nulla tempus, porttitor ligula in, fringilla mi. Fusce orci odio, fringilla accumsan dolor vel, rutrum feugiat nulla. In posuere enim viverra, congue ipsum eu, gravida lectus.
              </div>
          </div>
          <div className='h-full w-full md:w-1/2 relative'>
            <img src='./assets/images/section4.jpg' className='contrast-125' alt='HorizonX' /> 
            <div className='absolute top-0 h-full w-full bg-gradient-to-r from-[#03050f] via-white/10 to-transparent'/>
          </div>
        </div>
    </motion.div>
  )
}

export default Section4
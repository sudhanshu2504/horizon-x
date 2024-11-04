import React from 'react'
import { FaCheck } from "react-icons/fa";
import {motion} from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion"

function Section5() {
  return (
    <>
    <motion.div 
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
    className='relative w-full lg:container mx-auto flex flex-row items-center justify-center my-20 md:my-28'>
        <div className='absolute bottom-0 left-0 h-80 w-80 light-color rounded-full blur-[210px] -translate-x-1/2 translate-y-1/2 justify-center items-center'/>
        <div className='relative w-full p-5 md:px-10 py-4 gap-8 flex flex-col lg:flex-row'>
        <div className='flex flex-col gap-5 h-full w-full lg:w-1/3'>
            <span className='text-lg accent-color px-1'>
                Our Plans
            </span>
            <div className='text-3xl md:text-5xl w-full font-thin'>
                Ready to transform your business?
            </div>
            <div className='text-base md:text-lg w-full font-thin opacity-70 line-clamp-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a vehicula mi, ut iaculis massa. Nullam at metus non eros tincidunt tristique a a diam. In gravida ultrices urna, eget placerat ipsum finibus sed. Morbi turpis nisi, convallis ut purus id, finibus varius ex. Curabitur ac nulla tempus, porttitor ligula in, fringilla mi. Fusce orci odio, fringilla accumsan dolor vel, rutrum feugiat nulla. In posuere enim viverra, congue ipsum eu, gravida lectus.
            </div>
        </div>
        <div className='w-full lg:w-1/3 border border-color backdrop-blur-xl transparent-white flex flex-col justify-between gap-y-4 p-4 md:p-8'>
          <div className='flex flex-col gap-4'>
            <div className='paragraph-color text-2xl'>Standard Plans</div>
            <div className='text-lg md:text-xl w-full font-thin opacity-70 line-clamp-4'>
              For small businesses and startups.
            </div>
            <div className='flex flex-col gap-1'>
              <span className='flex items-center gap-2 font-thin text-lg'><FaCheck className='accent-color'/> Initial Business Assessment</span>
              <span className='flex items-center gap-2 font-thin text-lg'><FaCheck className='accent-color'/> Monthly Sessions</span>
              <span className='flex items-center gap-2 font-thin text-lg'><FaCheck className='accent-color'/> Operational Reviews</span>
              <span className='flex items-center gap-2 font-thin text-lg'><FaCheck className='accent-color'/> Basic Market Analysis</span>
              <span className='flex items-center gap-2 font-thin text-lg'><FaCheck className='accent-color'/> Email Support</span>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between w-full'>
            <div className='text-lg'>Price $9.99</div>
            <button className='py-3 px-6 rounded-[8px] bg-[#fff5ed] text-black font-semibold'>Get Started</button>
          </div>  
        </div>
        <div className='w-full lg:w-1/3 border border-color backdrop-blur-xl transparent-white flex flex-col justify-between gap-y-4 p-4 md:p-8'>
          <div className='flex flex-col gap-4'>
            <div className='paragraph-color text-2xl'>Premium Plans</div>
            <div className='text-lg md:text-xl w-full font-thin opacity-70 line-clamp-4'>
              For Growing businesses.
            </div>
            <div className='flex flex-col gap-1'>
              <span className='flex items-center gap-2 font-thin text-lg'><FaCheck className='accent-color'/> Detailed Business Assessment</span>
              <span className='flex items-center gap-2 font-thin text-lg'><FaCheck className='accent-color'/> Weekly Sessions</span>
              <span className='flex items-center gap-2 font-thin text-lg'><FaCheck className='accent-color'/> In-Depth Analysis</span>
              <span className='flex items-center gap-2 font-thin text-lg'><FaCheck className='accent-color'/> Custom Growth Strategy Development</span>
              <span className='flex items-center gap-2 font-thin text-lg'><FaCheck className='accent-color'/> Process Optimization</span>
              <span className='flex items-center gap-2 font-thin text-lg'><FaCheck className='accent-color'/> Phone and Email Support</span>
              <span className='flex items-center gap-2 font-thin text-lg'><FaCheck className='accent-color'/> 24x7 Consultation</span>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between w-full'>
            <div className='text-lg'>Price $49.99</div>
            <button className='py-3 px-6 rounded-[8px] bg-[#fff5ed] text-black font-semibold'>Get Started</button>
          </div>  
        </div>
        </div>
    </motion.div>
    <motion.div 
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
    className='relative w-full lg:container mx-auto flex flex-row items-center justify-center my-20 md:my-28'>
        <div className='relative w-full p-5 md:px-10 py-4 flex flex-col md:flex-row'>
        <div className='flex flex-col h-full w-full md:w-2/5'>
            <div className='text-3xl md:text-5xl w-full font-thin my-6 md:my-2'>
                Frequently asked Questions
            </div>
        </div>
        <div className='w-full md:w-3/5'>
          <Accordion type="single" collapsible  className="w-full">
            <AccordionItem  value="item-1" className='text-xl'>
              <AccordionTrigger>What Services do we Offer as a business firm?</AccordionTrigger>
              <AccordionContent>
              We offer a range of services including strategic planning, business development, financial analysis, operational improvement, and marketing strategy. Our goal is to help businesses improve efficiency, grow revenue, and navigate complex challenges.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I Know if my business needs consulting services?</AccordionTrigger>
              <AccordionContent>
                If you&apos;re facing challenges like stagnant growth, operational inefficiencies, or unclear strategic direction, a business consultant can provide expert insights. We help identify areas for improvement and offer customized solutions to drive success.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I get started with your consulting services?</AccordionTrigger>
              <AccordionContent>
              Getting started is easy! Simply contact us through our website or schedule an initial consultation. We’ll discuss your business goals, assess your needs, and create a customized plan to help you achieve measurable success.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How long deos a typical consulting engagement last?</AccordionTrigger>
              <AccordionContent>
              The length of a consulting engagement depends on the scope and complexity of the project. It can range from a few weeks to several months. We provide a clear timeline during our initial consultation based on your specific goals and objectives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        </div>
    </motion.div>
    </>
  )
}

export default Section5;
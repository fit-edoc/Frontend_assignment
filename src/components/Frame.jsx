import { motion } from 'framer-motion'
import React from 'react'


const Frame = () => {
  return (
    <motion.div  initial={{scale:0,mixBlendMode:"multiply"}} animate={{scale:1}} transition={{duration:2,delay:3}} viewport={{once:true}}  className='h-screen w-screen absolute '>
        <div className="h-[50vh] w-full  flex justify-between md:px-4 md:py-2">
            <img src="/frame.jpg" className='h-[100px] mix-blend-multiply' alt="" />
            <img src="/frame.jpg" className='h-[100px] rotate-90 mix-blend-multiply' alt="" />
        </div>
        <div className="h-[50vh]   w-full  flex justify-between items-end  md:px-4">


            <img src="/frame.jpg" className='h-[100px] -rotate-90 mix-blend-multiply mr-4' alt="" />

         <img src="/frame.jpg" className='h-[100px] rotate-180 mix-blend-multiply mr-4' alt="" />
        </div>
      
    </motion.div>
  )
}

export default Frame

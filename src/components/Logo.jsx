import { motion } from 'framer-motion'
import React from 'react'
 
const Logo = () => {
  return (
    <div className='h-[100px] w-[100px] rounded-full'>
       
       <motion.img animate={{opacity:[0,1]}} transition={{duration:1,delay:1}} src="/logo.png"  className="h-full w-full object-contain object-center" alt="" />
    </div>
  )
}

export default Logo

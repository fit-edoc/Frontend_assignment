import { motion } from "framer-motion";
import React, { useState } from "react";

const Notify = () => {
 
    const [email ,setEmail] = useState("")

    const [success ,setSuccess] = useState(false)


    const handleSubmit = ()=>{

        if(!email) return;
        if(!email.includes("gmail.com")) return;
        setSuccess(true)
    }

  return (
    <div className="flex items-center z-50 relative">
      {!success ? (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black/20 py-2 rounded-full px-3 w-[300px] md:w-[400px] pr-[110px] focus:outline-none"
          />

          <button
            onClick={handleSubmit}
            className="py-2 bg-[#615340] border-r border-t border-b border-black/20 rounded-r-full px-4 text-white absolute right-0"
          >
            Notify me
          </button>
        </>
      ) : (

        <div className="flex items-center   flex-wrap justify-center">


        <motion.p
          
          className="text-amber-500 font-medium text-nowrap font-cursy md:text-lg"
        >
          You’re on the list! We’ll notify you soon.{" "}
        
        </motion.p>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-checkbox"
          >
            <motion.path animate={{scale:[0,2,1]}} transition={{duration:1}} stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:0.5,delay:0.4}} d="M9 11l3 3l8 -8" />
            <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:0.5}}  d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
          </motion.svg>

        </div>
      )}
    </div>
  );
};

export default Notify;

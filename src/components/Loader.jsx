import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Crown from "../icons/Crown";
import Logo from "./Logo";

const Loader = () => {
  return (
    <AnimatePresence mode="wait">

    <motion.div
      initial={{
      opacity:1
      }}
      animate={{
       opacity:0,
       y:-200
      }}
      exit={{
       
        opacity:0,
        y:200
      }}
      transition={{ duration: 1.2, ease: "easeInOut" ,delay:2.5}}
      className="fixed inset-0 z-[9999] bg-black overflow-hidden pointer-events-none"
      >
      {/* Background Image Reveal */}
      <motion.img
        src="/carpet.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        initial={{
          clipPath: "circle(0% at 50% 40%)",
          scale: 1.3,
        }}
        animate={{
          clipPath: "circle(120% at 50% 50%)",
          scale: 1,
        }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        />

      {/* Center Content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.h1
          initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="font-head text-[90px] leading-[50px] uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#FCEF91] to-[#fffcde] md:text-[13vw]  md:leading-[120px]"
          >
          chai circle
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          style={{fontFamily:"royal"}}
          className="mt-4 text-[4vw] uppercase font-royal text-white tracking-widest"
          >
          coming soon
        </motion.h2>
      <div className="flex justify-center items-center">
          <Logo/>
      </div>

      </div>
    </motion.div>
          </AnimatePresence>
  );
};

export default Loader;

import React, { useState } from "react";
import { HERO_CONTENT, NAME } from "../constants";
import profilePic from "../assets/youssefBelamine.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Hero = () => {
  const [colorIt, setColorIt] = useState(false);
  return (
    <div id="home" className="border-b border-neutral-900 pb-4 llg:mb-35">
      <div className="flex flex-wrap justify-center">
        
                  {/* image section */}
        <div className={`w-full lg:w-1/2 xl:2/3 lg:p-8 ${colorIt ? "bg-green-500" : ""}`}>
          <div className="flex justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              src={profilePic}
              alt="Youssef Belamine"
            />
          </div>
        </div>
        {/* ------------------------------------- */}

              {/* Name and job title */}
        {/* <div className="w-full lg:w-1/2 bg-red-500"> */}
          <div className={`lg:w-1/2 xl:w-fit flex flex-col items-center justify-center ${colorIt ? "bg-blue-500" : ""}`}>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight llg:mt-16 llg:text-8xl"
            >
              Youssef Belamine
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 
                        bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

          </div>

          <div className={`${colorIt ? "bg-amber-700" : ""} w-full flex justify-center`}>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 shadow-xl/30 shadow-white py-6 text-gray-300 text-lg  xl:text-justify
              leading-relaxed tracking-wide whitespace-pre-line bg-gradient-to-r from-gray-900/40
               to-gray-800/20 rounded-2xl p-6 shadow-lg border border-gray-700/40 lg:w-full"
            >
              <span className="text-xl font-bold">Hi, I’m {NAME}!</span>{" "}
              {HERO_CONTENT}
            </motion.p>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

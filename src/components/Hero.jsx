import React from "react";
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
  return (
    <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        
        <div className="w-full lg:w-1/2 lg:p-8">
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
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
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

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 shadow-xl/30 shadow-white max-w-xl py-6 text-gray-300 text-lg leading-relaxed tracking-wide whitespace-pre-line bg-gradient-to-r from-gray-900/40 to-gray-800/20 rounded-2xl p-6 shadow-lg border border-gray-700/40"
            >
              <span className="text-xl font-bold">Hi, I’m {NAME}!</span>{" "}
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

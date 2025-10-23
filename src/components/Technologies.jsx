import React, { useEffect } from 'react';
import { RiReactjsLine, RiNodejsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiLaravel, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { motion, useAnimation } from "framer-motion";

export const Technologies = () => {
  const controls = useAnimation();

  // Infinite horizontal animation
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"], // move left
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  // Tech icons array
  const icons = [
    { component: <RiReactjsLine className="text-7xl text-cyan-400" /> },
    // { component: <TbBrandNextjs className="text-7xl text-white" /> },
    { component: <FaBootstrap className="text-7xl text-[#860afb]" /> },
    { component: <SiTailwindcss className="text-7xl text-[#00b9d8]" /> },
    { component: <SiLaravel className="text-7xl text-red-500" /> },
    { component: <RiNodejsFill className="text-7xl text-[#87cf30]" /> },
    { component: <SiMongodb className="text-7xl text-[#589636]" /> },
    { component: <GrMysql className="text-7xl text-[#00546b]" /> },
    { component: <FaGitAlt className="text-7xl text-[#f05539]" /> },
    { component: <FaGithub className="text-7xl text-[#000] bg-white rounded-full" /> },
  ];

  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24 overflow-hidden">
      {/* Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
        <motion.p
          whileInView={{ opacity: 1, width: 260 }}
          initial={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[2px] rounded-full mt-1 w-2/10 m-auto bg-white"
        />
      </motion.h1>

      {/* Infinite Horizontal Scroll */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={controls}
          className="flex gap-10 min-w-max"
        >
          {/* Duplicate icons for seamless infinite scroll */}
          {[...icons, ...icons].map((icon, index) => (
            <div
              key={index}
              className="rounded-2xl border-4 border-neutral-800 hover:border-neutral-500 transition-colors p-4 flex justify-center items-center bg-black/20 backdrop-blur-md"
            >
              {icon.component}
            </div>
          ))}
        </motion.div>

        {/* Optional fade gradient on edges */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

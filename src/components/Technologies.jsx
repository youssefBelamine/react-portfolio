import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiLaravel } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

const iconVariants = (duration, x) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

export const Technologies = () => {
  return (
    <div id="technologies" className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>
            Technologies
            <motion.p
                    whileInView={{ opacity: 1, width: 260}}
                    initial={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                     className=" h-[2px] rounded-full mt-1 w-2/10 m-auto bg-white"/>
        </motion.h1>

        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>

            <motion.div
            variants={iconVariants(2.5, 1)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>

            <motion.div
            variants={iconVariants(3, -1)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-7xl text-white' />
            </motion.div>

            <motion.div
            variants={iconVariants(2.5, 1)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiLaravel className='text-7xl text-red-500' />
            </motion.div>

            <motion.div
            variants={iconVariants(3, -1)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNodejsFill className='text-7xl text-[#87cf30]' />
            </motion.div>

            <motion.div
            variants={iconVariants(2.5, 1)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-[#589636]' />
            </motion.div>

            <motion.div
            variants={iconVariants(3, -1)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <GrMysql className='text-7xl text-[#00546b]' />
            </motion.div>

        </motion.div>
    </div>
  )
}

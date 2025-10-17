import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiLaravel } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

export const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>

            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </div>

            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-7xl text-white' />
            </div>

            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiLaravel className='text-7xl text-red-500' />
            </div>

            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNodejsFill className='text-7xl text-[#87cf30]' />
            </div>

            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-[#589636]' />
            </div>

            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <GrMysql className='text-7xl text-[#00546b]' />
            </div>

        </div>
    </div>
  )
}

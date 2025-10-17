import React from 'react'
import logo from "../assets/youssefLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center' >
            <img src={logo} alt='' className='w-23' />
        </div>
        <div className='m-8 flex items-center justify-center gap-6 text-2xl' >
            <FaGithub />
            <FaLinkedin />
        </div>
    </nav>
  )
}

import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import logo from "../assets/youssefLogo.png";
import { FaBars, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { BorderBeam } from "@stianlarsen/border-beam";

const style = {menuItemStyle: "hover:text-black hover:bg-white rounded-full transition-colors px-3 py-1"}

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center flex-wrap py-6 px-8 w-full  justify-center">
      
      <div className='w-full flex justify-between'>
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center ">
        <img src={logo} alt="Logo" className="w-24" />
      </div>


      {/* Social Icons */}
      <div className="flex items-center justify-center gap-6 text-2xl text-gray-600 px-6">
        <a href="https://github.com/youssefBelamine" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-white transition-colors text-3xl" />
        </a>
        <a href="https://linkedin.com/in/youssef-belamine" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-[#136bc5] transition-colors text-3xl" />
        </a>
        <a href="https://wa.me/212628038735?text=Hello%20I%20am%20Youssef" target="_blank" rel="noopener noreferrer">
          <FaWhatsappSquare className="hover:text-[#2cd46b] transition-colors text-3xl" />
        </a>
      </div>
        
      </div>

      {/* Menu */}
<div
  style={{ borderRadius: "100px" }}
  className="fixed top-25 xl:top-4 left-1/2 transform -translate-x-1/2 md:flex items-center gap-8 text-lg font-medium border border-[#606060] px-6 py-3 rounded-full backdrop-blur-md z-50"
>
  <a href="#home" className={style.menuItemStyle}>Home</a>
  <a href="#about" className={style.menuItemStyle}>About</a>
  <a href="#technologies" className={style.menuItemStyle}>Technologies</a>
  <a href="#projects" className={style.menuItemStyle}>Projects</a>
  <a href="#contact" className={style.menuItemStyle}>Contact</a>

  {/* Animated border using BorderBeam */}
  <BorderBeam size={70} colorFrom="#dcdcdc" colorTo="#ffffff" duration={10} />
</div>



    </nav>
  );
};

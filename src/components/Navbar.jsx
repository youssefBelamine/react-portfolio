import React from 'react';
import logo from "../assets/youssefLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-8">
      
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo" className="w-24" />
      </div>

      {/* Menu */}
      <div className="hidden md:flex items-center gap-8 text-lg font-medium">
        <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
        <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
        <a href="#technologies" className="hover:text-blue-500 transition-colors">Technologies</a>
        <a href="#experiences" className="hover:text-blue-500 transition-colors">Experiences</a>
        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-6 text-2xl">
        <a href="https://github.com/youssefBelamine" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-600 transition-colors" />
        </a>
        <a href="https://linkedin.com/in/youssefBelamine" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600 transition-colors" />
        </a>
      </div>

    </nav>
  );
};

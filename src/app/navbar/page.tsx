// components/Navbar.js
"use client"

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black rounded-xl shadow-lg shadow-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#services" className="text-white hover:text-gray-300">Services</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-blue-500 space-y-4 py-4`}
      >
        <a href="#" className="text-white block px-4">Home</a>
        <a href="#about" className="text-white block px-4">About</a>
        <a href="#services" className="text-white block px-4">Services</a>
        <a href="#contact" className="text-white block px-4">Contact</a>
      </div>
    </nav>
  );
}

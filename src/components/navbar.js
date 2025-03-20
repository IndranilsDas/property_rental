'use client';
import React, { useEffect, useState } from 'react'
import { Prompt } from 'next/font/google'
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '800'],
});

export default function Nav() {
const [Scrolled, SetScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      SetScrolled(true);
    } else {
      SetScrolled(false);
    }
  };

  // Add event listener
  window.addEventListener('scroll', handleScroll);

  // Cleanup on unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); // Empty dependency array ensures it only attaches the listener once

  
  return (
    <div className={`${prompt.className}`}>
      <nav>
        <div> </div>
        <div className={`${ Scrolled ? 'backdrop-blur-md shadow-xl': 'bg-transparent'} transition duration-300 fixed top-0 w-full z-50 flex gap-8 justify-end px-5 py-4`}>
          <button className={`${Scrolled ? 'text-black transition': null } hover:text-orange-300 duration-300 cursor-pointer`}>Explore</button>  
          <button className={`${Scrolled ? 'ring ring-black transition text-black': 'ring ring-white' } font-semibold hover:bg-orange-300 hover:cursor-pointer duration-200 hover:ring hover:text-black uppercase p-2 rounded `}>buy a property</button>
          <button className={`${Scrolled ? 'ring ring-black transition text-black': 'ring ring-white' } font-semibold hover:bg-orange-300 hover:cursor-pointer duration-200 hover:ring hover:text-black uppercase p-2 rounded `}>list your property</button>
          <button className={`${Scrolled ? 'ring ring-black transition text-black': 'ring ring-white' } font-semibold hover:bg-orange-300 hover:cursor-pointer duration-200 hover:ring hover:text-black uppercase p-2 rounded `}>+91 9167928471</button>
          <button>
            <CiBellOn className={`${Scrolled ? 'text-black': null} h-8 w-8 hover:text-orange-300 duration-300 cursor-pointer`}/>
          </button>
          <button>
            <FaUserCircle className={`${Scrolled ? 'text-black': null} h-8 w-8 hover:text-orange-300 duration-300 cursor-pointer`}/>
          </button>
        </div>
      </nav>
    </div>
  )
}

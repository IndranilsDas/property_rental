'use client';
import React, { useEffect, useState } from 'react';
import { Prompt } from 'next/font/google';
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${prompt.className}`}>
      <nav>
        <div></div>
        <div className={`fixed w-screen top-0 z-50 transition duration-300 flex flex-wrap items-center justify-center md:justify-end gap-4 px-6 py-4 
          ${Scrolled ? 'backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
          
          <button className={`text-sm md:text-base ${Scrolled ? 'text-black' : 'text-white'} hover:text-orange-300 duration-300`}>
            Explore
          </button>

          <button className={`text-sm md:text-base uppercase font-semibold px-3 py-2 rounded 
            ${Scrolled ? 'ring ring-black text-black' : 'ring ring-white text-white'} 
            hover:bg-orange-300 hover:text-black transition duration-200`}>
            buy a property
          </button>

          <button className={`text-sm md:text-base uppercase font-semibold px-3 py-2 rounded 
            ${Scrolled ? 'ring ring-black text-black' : 'ring ring-white text-white'} 
            hover:bg-orange-300 hover:text-black transition duration-200`}>
            list your property
          </button>

          <button className={`text-sm md:text-base uppercase font-semibold px-3 py-2 rounded 
            ${Scrolled ? 'ring ring-black text-black' : 'ring ring-white text-white'} 
            hover:bg-orange-300 hover:text-black transition duration-200`}>
            +91 9167928471
          </button>

          <button>
            <CiBellOn className={`h-8 w-8 cursor-pointer hover:text-orange-300 duration-300 ${Scrolled ? 'text-black' : 'text-white'}`} />
          </button>

          <button>
            <FaUserCircle className={`h-8 w-8 cursor-pointer hover:text-orange-300 duration-300 ${Scrolled ? 'text-black' : 'text-white'}`} />
          </button>
          
        </div>
      </nav>
    </div>
  );
}

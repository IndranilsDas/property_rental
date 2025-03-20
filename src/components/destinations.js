'use client';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  weight: ['200', '300', '400', '600', '800'],
});

const destinations = [
  { name: 'Nainital', logo: '/images/place_logos/nainital.jpg' },
  { name: 'Shimla', logo: '/images/place_logos/shimla.avif' },
  { name: 'Coonoor', logo: '/images/place_logos/coonoor.png' },
  { name: 'Wada', logo: '/images/place_logos/ooty.png' },
  { name: 'Pune', logo: '/images/place_logos/pune.png' },
  { name: 'Manesar', logo: '/images/place_logos/manali.webp' },
  { name: 'Igatpuri', logo: '/images/place_logos/igatpuri.jpg' },
  { name: 'Wayanad', logo: '/images/place_logos/wayanad.png' },
  { name: 'Bhimtal', logo: '/images/place_logos/bhimtal.png' },
  { name: 'Mahabaleshwar', logo: '/images/place_logos/mahabaleshwar.jpg' },
  { name: 'Dehradun', logo: '/images/place_logos/dehradun.jpg' },
  { name: 'Chandigarh', logo: '/images/place_logos/chandigarh.jpg' },
  { name: 'Gurgaon', logo: '/images/place_logos/gurgaon.webp' },
];

export default function Destinations() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <section className={`${prompt.className} flex flex-col p-6 bg-yellow-50`}>
      {/* Heading */}
      <div className="flex justify-between items-center mb-4 px-16 py-16">
        <h1 className="text-left font-semibold text-3xl text-black">Pick a Destination</h1>
        <button className="text-blue-500 hover:underline text-sm">
          Show nearby locations
        </button>
      </div>

      {/* Scroller Container */}
      <div className="relative w-full">
        {/* Left Button */}
        <button 
          onClick={scrollLeft} 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 p-2 shadow-md rounded-full"
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto scroll-smooth no-scrollbar px-16"
        >
          {destinations.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col hover:cursor-pointer bg-white hover:bg-orange-300 items-center justify-center text-black p-4 min-w-[120px] border rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={item.logo}
                alt={item.name}
                className="h-16 w-16 object-cover rounded-md mb-2"
              />
              {/* Name */}
              <p className="text-center text-sm font-medium">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button 
          onClick={scrollRight} 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 p-2 shadow-md rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* View All Button */}
      <div className="mt-4 flex justify-center text-black">
        <button className="border px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
          View all 86 locations
        </button>
      </div>
    </section>
  );
}

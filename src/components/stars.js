'use client';

import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '800'],
});

const listings = [
  {
    name: 'Vijay Deverakonda',
    location: 'The Waterwillow',
    image: '/images/vijay.jpg',
  },
  {
    name: 'Ananya Panday',
    location: 'Villa Amarillo',
    image: '/images/ananya.jpg',
  },
  {
    name: 'Soha Ali Khan',
    location: 'Le Sutra Great Escapes - Geometrica',
    image: '/images/soha.webp',
  },
  {
    name: 'Suryakumar Yadav',
    location: 'The Barn',
    image: '/images/suryakumar.webp',
  },
  {
    name: 'Shweta Tiwari',
    location: 'Ferias Vita',
    image: '/images/shweta.avif',
  },
  {
    name: 'Kusha Kapila',
    location: 'Kohar Haveli',
    image: '/images/kusha.jpg',
  },
  {
    name: 'Virat Kohli',
    location: 'The Westin',
    image: '/images/virat.avif',
  },
  {
    name: 'Deepika Padukone',
    location: 'The Taj Mahal Palace',
    image: '/images/deepika.jpg',
  },
  {
    name: 'Shah Rukh Khan',
    location: 'Mannat',
    image: '/images/shahrukh.jpg',
  },
  {
    name: 'Alia Bhatt',
    location: 'The Oberoi',
    image: '/images/alia.jpg',
  },
];

export default function StayLikeStars() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className={`${prompt.className} p-6 bg-white`}>
      {/* Heading */}
      <div className="flex justify-between items-center px-16 mb-4">
        <h1 className="text-left font-semibold text-3xl text-black">
          Stay like the stars
        </h1>
      </div>

      {/* Scrollable Cards */}
      <div className="relative w-full">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 p-2 shadow-md rounded-full cursor-pointer"
        >
          <FaChevronLeft />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-hidden scroll-smooth py-2 no-scrollbar mx-16"
        >
          {listings.map((listing, index) => (
            <div
              key={index}
              className="flex flex-col min-w-[220px] max-w-[220px] border rounded-lg shadow-xl ring ring-gray-300 bg-white overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-full h-[220px] object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-3">
                <h2 className="text-md text-black">{listing.name}</h2>
                <p className="text-gray-500 text-sm mb-2 h-10">{listing.location}</p>

                {/* View Button */}
                <button className="w-full border border-gray-300 rounded-md text-black hover:bg-gray-100 transition">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 p-2 shadow-md rounded-full cursor-pointer"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

'use client';

import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '800'],
});

const destinations = [
  {
    title: 'Twilight Perch',
    location: 'Mussoorie, Uttarakhand',
    guests: 10,
    rooms: 4,
    baths: 4,
    price: '₹31,231',
    originalPrice: '₹34,590',
    rating: 4.5,
    image: '/images/places/mussoorie.jpg', // Updated path
  },
  {
    title: 'Amalia by Tellado',
    location: 'Assagao, Goa',
    guests: 20,
    rooms: 6,
    baths: 6,
    price: '₹28,357',
    originalPrice: '₹33,960',
    rating: 4.9,
    image: '/images/places/goa.jpg', // Updated path
  },
  {
    title: 'A Portuguese Tale',
    location: 'Assagao, Goa',
    guests: 17,
    rooms: 7,
    baths: 8,
    price: '₹37,015',
    originalPrice: '₹52,450',
    rating: 4.8,
    image: '/images/places/assagao.webp', // Updated path
  },
  {
    title: 'The Glen',
    location: 'Lonavala, Maharashtra',
    guests: 36,
    rooms: 12,
    baths: 15,
    price: '₹1,58,500',
    rating: 4.6,
    image: '/images/places/lonavala.webp', // Updated path
  },
  {
    title: 'Middle Earth',
    location: 'Karjat, Maharashtra',
    guests: 24,
    rooms: 8,
    baths: 9,
    price: '₹90,250',
    rating: 5.0,
    image: '/images/places/karjat.jpg', // Updated path
  },
];

const tabs = ['All', 'Lonavala', 'Alibaug', 'Coorg', 'Explore more'];

export default function TrendingSection() {
  const scrollRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState('All');

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
          Trending This Season
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 px-16 mb-4 py-4 items-left overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-md transition ${
              selectedTab === tab
                ? 'bg-black/50 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600'
            }`}
          >
            {tab}
          </button>
        ))}
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
          className="flex justify-evenly m-auto gap-4 overflow-hidden py-2 transition duration-300 scroll-smooth no-scrollbar mx-16"
        >
          {destinations.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-4 min-w-[280px] max-w-[280px] ring ring-gray-300 rounded-lg shadow-lg bg-white"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />

              {/* Rating */}
              <div className="flex items-center mb-1">
                <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-md">
                  {item.rating} ⭐
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold">{item.title}</h2>

              {/* Location */}
              <p className="text-sm text-gray-500">{item.location}</p>

              {/* Info */}
              <p className="text-sm text-gray-500">
                Upto {item.guests} Guests + {item.rooms} Rooms + {item.baths} Baths
              </p>

              {/* Price */}
              <div className="flex items-center justify-between mt-2">
                <span className="text-black font-semibold">{item.price}</span>
                {item.originalPrice && (
                  <span className="line-through text-gray-400 text-sm">
                    {item.originalPrice}
                  </span>
                )}
              </div>

              {/* Badge */}
              {item.rating >= 4.8 && (
                <div className="bg-black text-white text-xs px-2 py-1 rounded-md mt-2 w-max">
                  Best Rated
                </div>
              )}
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

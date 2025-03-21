'use client';

import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '800'],
});

const listings = [
  {
    name: 'Two Villa',
    location: 'Karjat, Maharashtra',
    guests: 9,
    rooms: 3,
    baths: 3,
    rating: 4.6,
    price: '₹12,860',
    oldPrice: '₹15,000',
    image: '/images/places/karjat2.jpg',
    category: 'Karjat',
  },
  {
    name: 'Arhaan Farm',
    location: 'New Delhi, Delhi',
    guests: 15,
    rooms: 5,
    baths: 5,
    rating: 4.9,
    price: '₹33,445',
    oldPrice: '₹37,050',
    image: '/images/places/delhi.jpg',
    category: 'Delhi',
  },
  {
    name: 'Basalt',
    location: 'Karjat, Maharashtra',
    guests: 15,
    rooms: 5,
    baths: 7,
    rating: 4.8,
    price: '₹24,175',
    oldPrice: '₹27,000',
    image: '/images/places/karjat.jpg',
    category: 'Karjat',
  },
  {
    name: 'Cedar Haven - Nahan',
    location: 'Kasauli, Himachal Pradesh',
    guests: 15,
    rooms: 5,
    baths: 5,
    rating: 4.8,
    price: '₹24,175',
    oldPrice: '₹26,750',
    image: '/images/places/himachal.jpg',
    category: 'Kasauli',
  },
];

const tabs = ['All', 'Karjat', 'Delhi', 'Kasauli'];

export default function BestRated() {
  const scrollRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState('All');

  // Filter listings based on selected tab
  const filteredListings =
    selectedTab === 'All'
      ? listings
      : listings.filter((item) => item.category === selectedTab);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className={`${prompt.className} p-6 bg-white`}>
      {/* Heading + Tabs */}
      <div className="flex justify-between items-center px-16 mb-4">
        <h1 className="text-left font-semibold text-3xl text-black">Best Rated</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 px-16 mb-4 py-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-md transition ${
              selectedTab === tab
                ? 'bg-black/50 text-white' // Active state style
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
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 p-2 shadow-md rounded-full"
        >
          <FaChevronLeft />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-hidden py-2 scroll-smooth no-scrollbar px-10"
        >
          {filteredListings.map((listing, index) => (
            <div
              key={index}
              className="flex flex-col m-auto min-w-[280px] max-w-[280px] border rounded-lg ring ring-gray-300 shadow-xl bg-white"
            >
              {/* ✅ Fixed Image Container */}
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-full h-[200px] object-cover"
                />

                {/* Rating */}
                <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 rounded-full text-sm">
                  ⭐ {listing.rating}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                  ♡
                </button>

                {/* ✅ Fix: Best Rated Badge Now at the Bottom */}
                {listing.rating >= 4.8 && (
                  <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                    Best Rated
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <h2 className="font-semibold text-lg">{listing.name}</h2>
                <p className="text-gray-500 text-sm mb-1">{listing.location}</p>
                <p className="text-gray-500 text-sm">
                  Upto {listing.guests} Guests • {listing.rooms} Rooms • {listing.baths} Baths
                </p>

                {/* Price */}
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <span className="text-lg font-semibold">{listing.price}</span>
                    <span className="text-gray-400 line-through ml-2">
                      {listing.oldPrice}
                    </span>
                    <p className="text-gray-400 text-sm">For Per Night + Taxes</p>
                  </div>
                  <button className="bg-white border rounded-full p-2 shadow-md">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
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
    </section>
  );
}

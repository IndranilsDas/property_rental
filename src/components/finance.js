'use client';

import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  weight: ['200', '300', '400', '600', '800'],
});

const offers = [
  {
    bank: 'HSBC',
    logo: '/images/banks/HSBC.webp',
    description: 'Get 11% off (up to ₹3000) on your StayVista booking when you pay with an HSBC TravelOne Credit Card.',
    code: 'HSBCTRAVEL',
    category: 'Bank Offers',
  },
  {
    bank: 'ICICI Bank',
    logo: '/images/banks/icici.png',
    description: 'Get 10% off (up to ₹2500) on your StayVista booking when you pay with an ICICI Credit Card.',
    code: 'ICICI10',
    category: 'Bank Offers',
  },
  {
    bank: 'Federal Bank',
    logo: '/images/banks/federal.png',
    description: 'Get 10% off (up to ₹2500) on your StayVista booking when you pay with a Federal Bank Credit & Debit Card.',
    code: 'FEDERAL10',
    category: 'Bank Offers',
  },
  {
    bank: 'Yes Bank',
    logo: '/images/banks/yesbank.png',
    description: 'Get 10% off (up to ₹2000) on your StayVista booking when you pay with a Yes Bank Credit Card.',
    code: 'YESBANK10',
    category: 'Bank Offers',
  },
  {
    bank: 'StayVista Special',
    logo: '/images/banks/stayvista.png',
    description: 'Get 15% off on your first StayVista booking. No minimum payment required.',
    code: 'STAY15',
    category: 'StayVista Offers',
  },
];


const tabs = ['All', 'Bank Offers', 'StayVista Offers'];

export default function Finance() {
  const scrollRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState('All');

  // Filter offers based on the selected tab
  const filteredOffers =
    selectedTab === 'All'
      ? offers
      : offers.filter((offer) => offer.category === selectedTab);

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
        <h1 className="text-left font-semibold text-3xl text-black">Offers for You</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 px-16 mb-4 py-4">
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
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 p-2 shadow-md rounded-full cursor-pointer"
        >
          <FaChevronLeft />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 justify-evenly overflow-hidden py-2 scroll-smooth no-scrollbar mx-16 text-black"
        >
          {filteredOffers.map((offer, index) => (
            <div
              key={index}
              className="flex flex-col p-4 min-w-[280px] max-w-[280px] border border-gray-300 rounded-lg shadow-md bg-white"
            >
              {/* Bank Info */}
              <div className="flex items-center mb-2">
                <img src={offer.logo} alt={offer.bank} className="h-8 w-auto mr-2" />
                <span className="text-lg font-semibold">{offer.bank}</span>
                <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded-md">
                  {offer.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{offer.description}</p>

              {/* Terms + Code */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-400">ⓘ T&C's apply</span>
                <div className="flex items-center gap-2">
                  <button className="border border-green-400 px-3 py-1 text-green-500 rounded-md">
                    {offer.code}
                  </button>
                  <button
                    onClick={() => navigator.clipboard.writeText(offer.code)}
                    className="bg-black text-white px-3 py-1 rounded-md"
                  >
                    Copy
                  </button>
                </div>
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

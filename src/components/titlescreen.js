'use client';
import { useState } from 'react';
import { Prompt } from 'next/font/google';

// Load multiple weights of Prompt
const prompt = Prompt({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '800'],
});

const images = [
  '/images/interior_living_room.jpg',
  '/images/interior_design_style.jpg',
  '/images/interior_design_furniture_glass.jpg',
  '/images/interior_style_design.jpg',
];

export default function Titlescreen() {
  const [current, setCurrent] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className={`${prompt.className} relative h-screen overflow-hidden`}>
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-500 ease-in-out bg-no-repeat bg-cover"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slider Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full z-30 text-white cursor-pointer"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full z-30 text-white cursor-pointer"
      >
        ❯
      </button>

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center z-20">
        <h1 className="text-5xl font-bold">Launching Vista Residences</h1>
        <button className="mt-4 px-6 py-2 bg-[rgba(1,0,9,0.4)]  hover:bg-orange-300 cursor-pointer hover:text-black duration-300 text-white ring ring-white rounded-md">
          50% OFF on 2nd Night
        </button>
      </div>

      {/* Button to open the form */}
      <button
        onClick={toggleForm}
        className={` ${isFormOpen ? 'opacity-0' : null}
          fixed bottom-4 right-4 z-50
          px-4 py-2 bg-[rgba(1,0,9,0.5)] ring ring-white
          hover:bg-orange-300 cursor-pointer hover:text-black duration-300
          text-white rounded-md shadow-lg
        `}
      >
        Open Inquiry
      </button>

      {/* Inquiry Form: hidden until toggled */}
      <div
        className={`
          fixed bottom-0 left-0 w-full bg-white shadow-md
          transition-transform duration-500 ease-in-out
          z-40
          ${isFormOpen ? 'translate-y-0 text-black' : 'translate-y-full'}
        `}
      >
        {/* Top Row: Fields + Search + Close Button */}
        <div className="relative flex flex-wrap items-center justify-between p-4 gap-2">
          {/* Location Field */}
          <div className="flex flex-col min-w-[180px]">
            <label className="text-sm font-semibold mb-1">Location / Villas / Landmark</label>
            <input
              type="text"
              placeholder="Where To?"
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Check-in */}
          <div className="flex flex-col min-w-[120px]">
            <label className="text-sm font-semibold mb-1">Check-in</label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col min-w-[120px]">
            <label className="text-sm font-semibold mb-1">Check-out</label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col min-w-[150px]">
            <label className="text-sm font-semibold mb-1">Guests</label>
            <input
              type="text"
              placeholder="2 Guests, 1+ Rooms"
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          {/* SEARCH Button */}
          <button className="mt-3 md:mt-0 px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
            SEARCH
          </button>

          {/* Close Button */}
          <button
            onClick={toggleForm}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        {/* Bottom Row: Info + Callback Link */}
        <div className="flex flex-wrap justify-between items-center bg-gray-50 px-4 py-2 text-sm text-gray-700">
          <span>Finding your ideal vacation spot should be easy! We're here to help.</span>
          <a href="#" className="text-blue-600 hover:underline">
            Request Callback
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";
import { Prompt } from "next/font/google";

// Load your Google Font
const prompt = Prompt({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "800"],
});

export default function CollectionCarousel() {
  const collections = [
    {
      title: "Newly Launched",
      image: "/images/collections_sunset.jpg",
      description: "Heavenly villas in picturesque locations for your fairytale destination wedding.",
    },
    {
      title: "Romantic Getaways",
      image: "/images/collections_romantic.jpg",
      description: "Heavenly villas in picturesque locations for your fairytale destination wedding.",
    },
    {
      title: "Villas For Weddings",
      image: "/images/collections_weddings.jpg",
      description: "Heavenly villas in picturesque locations for your fairytale destination wedding.",
    },
    {
      title: "VEO by StayVista",
      image: "/images/collections_pool.webp",
      description: "Heavenly villas in picturesque locations for your fairytale destination wedding.",
    },
    {
      title: "Introducing Residences",
      image: "/images/collections_getaways.jpg",
      description: "Heavenly villas in picturesque locations for your fairytale destination wedding.",
    },
  ];

  return (
    <div className={`${prompt.className} w-full bg-white text-black py-16`}>
      {/* Heading */}
      <h2 className="font-semibold text-3xl mb-8 mx-20 text-black">
        Choose a Collection
      </h2>

      <div className="relative mx-16">
        {/* Scrollable Container */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4">
          {collections.map((item, index) => (
            <div
              key={index}
              className="
                group 
                relative 
                min-w-[280px] 
                md:min-w-[320px] 
                h-80 
                bg-white 
                rounded-lg 
                shadow-lg 
                overflow-hidden
              "
            >
              {/* Card Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* 
                1) Blurred Overlay Layer:
                - No text inside here, so text won't blur.
              */}
              <div
                className="
                  absolute 
                  inset-0 
                  bg-black/30 
                  opacity-0 
                  group-hover:opacity-100 
                  group-hover:backdrop-blur-lg 
                  transition-all 
                  duration-300
                  z-10
                "
              />

              {/* 
                2) Text Layer:
                - Placed above the blurred overlay (z-20).
                - Also uses opacity-0 -> opacity-100 on hover, if desired.
              */}
              <div
                className="
                  absolute 
                  inset-0 
                  flex flex-col 
                  justify-center 
                  items-center 
                  text-white 
                  p-4 
                  pointer-events-none
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity 
                  duration-300
                  z-20
                "
              >
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                {item.description && (
                  <p className="text-sm text-center max-w-xs">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

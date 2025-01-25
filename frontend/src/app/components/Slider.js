"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  { 
    id: 1,
    title: "Shingle Roof Tiles",
    description: "Roof Your Home with Modern Aesthetics Tiles",
    img: "https://images.pexels.com/photos/16513917/pexels-photo-16513917/free-photo-of-luxury-mansion-with-garden.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  { 
    id: 2,
    title: "Solar Cells",
    description: "Power your Home with Solar Energy",
    img: "https://images.pexels.com/photos/9875683/pexels-photo-9875683.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",    
  },
  { 
    id: 3,
    title: "Battery Storage",
    description: "Store and Backup your Energy",
    img: "https://images.pexels.com/photos/9875683/pexels-photo-9875683.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0); 

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      {/* Slides */}
      <div
        className="w-max h-full flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${current * 100}vw)` }} // Move slides based on active index
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* Text Container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">SHOP NOW</button>
              </Link>
            </div>
            {/* Image Container */}
            <div className="h-1/2 xl:w-1/2 relative">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 m-auto flex gap-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)} // Update the current index on click
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

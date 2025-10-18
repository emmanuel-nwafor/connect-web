"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";

export default function Hero() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width < 768;
  const isTablet = width < 1024;

  return (
    <>
      <Header />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body, html { font-family: 'Poppins', sans-serif; }
      `}</style>
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.pinimg.com/1200x/62/c2/69/62c2696fc9e8a3802d92ce90e2b18760.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-500/20"></div>
        <div className="relative z-10 w-full max-w-6xl px-5 sm:px-6 lg:px-8 text-white">
          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight font-poppins`}>
            Modern homes for modern people
          </h1>
            
          <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-aut opacity-90 font-poppins">
            Our collection of homes fuse forward thinking design with urban neighbourhood charm for the best of both worlds.
          </p>
          <div className="flex sm:flex-row gap-4 justify- items-center">
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-white hover:text-blue-600 whitespace-nowrap font-poppins">
              See inside
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-gray-100 whitespace-nowrap font-poppins">
              Contact us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
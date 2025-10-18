import React from 'react';

export default function Header() {
  return (
    <header className="backdrop-blur-md shadow-sm fixed w-full top-0 z-50 font-poppins p-3">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Connect</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Properties</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hidden lg:block">Contact Us</button>
      </div>
    </header>
  );
}
"use client";

import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* <div className="text-2xl font-bold text-blue-600">Connect</div> */}
            <img src="https://res.cloudinary.com/dmn1ssosf/image/upload/v1760810781/connect-word-logo_taporm.png" alt="" className="h-44 w-44" />
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Buy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Rent</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Refer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors">
                <Facebook size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-blue-500 transition-colors">
                <Twitter size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-pink-500 transition-colors">
                <Instagram size={20} className="text-gray-400 hover:text-white" />
              </a>
            </div>

            <p className="text-gray-400 text-xs mt-3">Your trusted partner in real estate.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
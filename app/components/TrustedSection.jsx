"use client";

import React from "react";
import { AnimatedTooltips } from "./AnimatedToolTip";


export default function TrustedSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Trusted by
              <br />
              <span className="text-5xl sm:text-6xl">100 Million</span>
              <br />
              buyers
            </h2>
            <p className="text-xl text-gray-600 max-w-md">
              Only we can help you sell the property you love most because we know property sales best.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-end mb-8">
            <div className="text-center sm:text-left">
              <h3 className="text-3xl font-bold text-gray-900">100M</h3>
              <p className="text-gray-500">House buyers</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-3xl font-bold text-gray-900">40M</h3>
              <p className="text-gray-500">Client reviews</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-3xl font-bold text-gray-900">4.6</h3>
              <p className="text-gray-500">Positive Rating</p>
            </div>
          </div>
          <AnimatedTooltips />
        </div>
        {/* Right Column */}
        <div className="space-y-8">
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore neighborhoods</h3>
              <p className="text-gray-600">
                Explore great neighborhoods, in-depth, and articles on 20,000+ neighborhoods.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Find highly property</h3>
              <p className="text-gray-600">
                Find the very best with expert research and strong multi-agent support.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover quality buildings</h3>
              <p className="text-gray-600">
                Explore 20k+ in depth, and articles on 20,000+ neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useState, useEffect } from "react";

export default function LodgesSection() {
  const [lodges] = useState([
    {
      id: 1,
      title: "Cozy Mountain Lodge",
      description: "Serene retreat with stunning views.",
      price: 450000,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Lakeside Cabin",
      description: "Perfect for fishing and relaxation.",
      price: 320000,
      image: "https://i.pinimg.com/736x/68/f2/ad/68f2adfb280922dd7197a12b87f008dc.jpg"
    },
    {
      id: 3,
      title: "Forest Hideaway",
      description: "Eco-friendly lodge in the woods.",
      price: 380000,
      image: "https://i.pinimg.com/736x/96/9e/29/969e29466c4040aa181f7d80e6cac331.jpg"
    },
    {
      id: 4,
      title: "Riverfront Villa",
      description: "Luxury stay by the river.",
      price: 520000,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Alpine Chalet",
      description: "Ski-in ski-out access.",
      price: 680000,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Seaside Bungalow",
      description: "Beachfront paradise.",
      price: 410000,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=300&fit=crop"
    }
  ]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-center text-gray-900 mb-12">Featured Properties</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lodges.slice(0, 6).map((lodge) => (
            <div key={lodge.id} className="bg-gray-100 rounded-3xl overflow-hidden">
              <img src={lodge.image} alt={lodge.title} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{lodge.title}</h3>
                <p className="text-gray-600 mb-4">{lodge.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font- text-blue-600">${lodge.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
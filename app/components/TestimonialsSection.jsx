"use client";

import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Home Buyer",
      text: "Amazing service! Found my dream home effortlessly.",
      avatar: "https://via.placeholder.com/80x80?text=JD"
    },
    {
      name: "Jane Smith",
      role: "Investor",
      text: "Great listings and responsive agents. Highly recommend!",
      avatar: "https://via.placeholder.com/80x80?text=JS"
    },
    {
      name: "Mike Johnson",
      role: "Renter",
      text: "Quick and easy process. Perfect for first-time users.",
      avatar: "https://via.placeholder.com/80x80?text=MJ"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-poppins">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 mx-auto mb-4 rounded-full" />
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
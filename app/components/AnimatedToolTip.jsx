"use client";

import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Chukwuemeka Daniel",
    designation: "Software Engineer",
    image:
      "https://i.pinimg.com/1200x/2a/30/48/2a3048dfd3ebfa107849efdbc1b522ec.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://i.pinimg.com/1200x/02/24/ae/0224aeffb96ed6d4ca2cfb3b24c5d0ea.jpg",
  },
  {
    id: 3,
    name: "Chimaobi Matthew",
    designation: "Manager at Excels",
    image:
      "https://i.pinimg.com/1200x/f9/fd/d4/f9fdd40fcee714678724a977777fd221.jpg",
  },
  {
    id: 4,
    name: "Emmanuel Okeke",
    designation: "UX Designer",
    image:
      "https://i.pinimg.com/736x/3c/2b/ad/3c2badd0b9688bcb810ef699afc3f7c1.jpg",
  },
  {
    id: 5,
    name: "Charles Matthew",
    designation: "Electrical Engineer",
    image:
      "https://i.pinimg.com/1200x/3e/f3/50/3ef350dc86cc82a092463e5d795654b5.jpg",
  },
  {
    id: 6,
    name: "Chinonso Patrick",
    designation: "Senior Product Manager",
    image:
      "https://i.pinimg.com/736x/ec/38/9d/ec389dd1a5f4a8f331151e46c8a6863f.jpg",
  },
];

export function AnimatedTooltips() {
  return (
    <div className="flex flex-row items-center justify- mb-10 w-full">
      <AnimatedTooltip items={people} />
      {/* <AnimatedTooltip */}
    </div>
  );
}
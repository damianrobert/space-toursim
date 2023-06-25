"use client";
import { useState } from "react";
import Link from "next/link";

export default function ExploreButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Link href="/Destination" alt="Explore the space">
      <button
        className="w-[9.375rem] h-[9.375rem] md:w-60 md:h-60 mx-auto rounded-full font-normal bg-white uppercase font-belleFair text-xl tracking-[1.25px] text-darkBlue lg:absolute z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="md:text-[2rem] tracking-[2.7px] md:tracking-[5px]">
          explore
        </p>
      </button>
      <div
        className={`hidden lg:block md:absolute w-60 h-60 rounded-full bg-white bg-opacity-20 ${
          isHovered
            ? " scale-x-[170%] scale-y-[170%] duration-500 ease-in-out  top-0 left-0 "
            : "hover:scale-x-50 hover:scale-y-50 duration-500 ease-in-out"
        }`}
      ></div>
    </Link>
  );
}

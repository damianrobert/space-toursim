"use client";

import { useState } from "react";
import Moon from "@/components/Moon";
import Mars from "@/components/Mars";
import Europa from "@/components/Europa";
import Titan from "@/components/Titan";

export default function NavigateDestination() {
  const [activePlanet, setActivePlanet] = useState(Moon);
  const [planetKey, setPlanetKey] = useState("moon");

  const handlePlanet = () => {
    return activePlanet;
  };
  return (
    <section className="max-w-[90rem] mx-auto relative flex justify-center lg:block lg:mt-32">
      <div className="absolute top-56 md:top-[22rem] lg:top-44 lg:right-[17.5rem]">
        <ul className="uppercase w-60 md:w-72 mx-auto flex justify-between">
          <li
            onClick={() => {
              setActivePlanet(Moon);
              setPlanetKey("moon");
            }}
            className={`text-white text-[14px] md:text-base font-normal tracking-widest cursor-pointer ${
              planetKey === "moon" ? "border-b-2 border-white" : ""
            } md:hover:border-b-2 md:hover:border-slate-500`}
          >
            moon
          </li>
          <li
            onClick={() => {
              setActivePlanet(Mars);
              setPlanetKey("mars");
            }}
            className={`text-white text-[14px] md:text-base font-normal tracking-widest cursor-pointer ${
              planetKey === "mars" ? "border-b-2 border-white" : ""
            } md:hover:border-b-2 md:hover:border-slate-500`}
          >
            mars
          </li>
          <li
            onClick={() => {
              setActivePlanet(Europa);
              setPlanetKey("europa");
            }}
            className={`text-white text-[14px] md:text-base font-normal tracking-widest cursor-pointer ${
              planetKey === "europa" ? "border-b-2 border-white" : ""
            } md:hover:border-b-2 md:hover:border-slate-500`}
          >
            europa
          </li>
          <li
            onClick={() => {
              setActivePlanet(Titan);
              setPlanetKey("titan");
            }}
            className={`text-white text-[14px] md:text-base font-normal tracking-widest cursor-pointer ${
              planetKey === "titan" ? "border-b-2 border-white" : ""
            } md:hover:border-b-2 md:hover:border-slate-500`}
          >
            titan
          </li>
        </ul>
      </div>

      {handlePlanet()}
    </section>
  );
}

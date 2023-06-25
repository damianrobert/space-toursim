"use client";

import { useState } from "react";
import Rocket from "@/components/Rocket";
import RocketInfo from "@/components/RocketInfo";
import Spaceport from "@/components/SpacePort";
import SpaceportInfo from "@/components/SpacePortInfo";
import SpaceCapsule from "@/components/SpaceCapsule";
import SpaceCapsuleInfo from "@/components/SpaceCapsuleInfo";

export default function NavigateTechnology() {
  const [presentation, setPresentation] = useState(Rocket);
  const [info, setInfo] = useState(RocketInfo);
  const [index, setIndex] = useState(1);
  return (
    <section className="max-w-[110rem] mx-auto lg:flex lg:min-h-screen items-center">
      <div className="w-full  pt-6 flex flex-col  lg:flex-row-reverse lg:justify-between lg:items-center">
        {presentation}

        <div>
          <div className="max-w-fit mx-auto lg:flex lg:flex-row lg:pl-16">
            <ul className="w-[9.5rem] md:w-[13.125rem] lg:w-[15rem] mx-auto flex lg:flex-col justify-between pt-6 lg:ml-0 font-belleFair">
              <li
                onClick={() => {
                  setPresentation(Rocket);
                  setInfo(RocketInfo);
                  setIndex(1);
                }}
                className={`w-10 md:w-16 h-10 md:h-16 lg:w-20 lg:h-20 rounded-full cursor-pointer ${
                  index === 1
                    ? "bg-white"
                    : "bg-transparent border-[1px] border-slate-400 text-white hover:border-white"
                } flex justify-center items-center`}
              >
                <p>1</p>
              </li>
              <li
                onClick={() => {
                  setPresentation(Spaceport);
                  setInfo(SpaceportInfo);
                  setIndex(2);
                }}
                className={`w-10 md:w-16 h-10 md:h-16 lg:w-20 lg:h-20 rounded-full cursor-pointer ${
                  index === 2
                    ? "bg-white"
                    : "bg-transparent border-[1px] border-slate-400 text-white hover:border-white"
                } flex justify-center items-center`}
              >
                <p>2</p>
              </li>
              <li
                onClick={() => {
                  setPresentation(SpaceCapsule);
                  setInfo(SpaceCapsuleInfo);
                  setIndex(3);
                }}
                className={`w-10 md:w-16 h-10 md:h-16 lg:w-20 lg:h-20 rounded-full cursor-pointer ${
                  index === 3
                    ? "bg-white"
                    : "bg-transparent border-[1px] border-slate-400 text-white hover:border-white"
                } flex justify-center items-center`}
              >
                <p>3</p>
              </li>
            </ul>

            <span>{info}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

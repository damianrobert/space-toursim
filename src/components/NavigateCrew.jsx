"use client";

import { useState } from "react";
import Douglas from "@/components/Douglas";
import DouglasInfo from "@/components/DouglasInfo";
import Mark from "@/components/Mark";
import MarkInfo from "@/components/MarkInfo";
import Victor from "@/components/Victor";
import VictorInfo from "@/components/VictorInfo";
import Anousheh from "@/components/Anousheh";
import AnoushehInfo from "@/components/AnoushehInfo";

export default function NavigateCrew() {
  const [member, setMember] = useState(Douglas);
  const [memberInfo, setMemberInfo] = useState(DouglasInfo);
  const [index, setIndex] = useState(1);

  return (
    <section className="max-w-[90rem] mx-auto lg:flex lg:min-h-screen items-center">
      <div className="w-full  pt-6 flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:justify-between lg:items-center">
        {member}

        <div>
          <div className="max-w-fit mx-auto lg:flex lg:flex-col-reverse lg:pl-16">
            <ul className="w-[5.5rem] lg:w-[7rem] mx-auto flex justify-between pt-6 lg:ml-0 lg:pt-20">
              <li
                onClick={() => {
                  setMember(Douglas);
                  setMemberInfo(DouglasInfo);
                  setIndex(1);
                }}
                className={`w-[.6rem] h-[.6rem] lg:w-[.85rem] lg:h-[.85rem] rounded-full ${
                  index === 1 ? "bg-white" : "bg-slate-700 hover:bg-slate-500"
                } md:cursor-pointer`}
              ></li>
              <li
                onClick={() => {
                  setMember(Mark);
                  setMemberInfo(MarkInfo);
                  setIndex(2);
                }}
                className={`w-[.6rem] h-[.6rem] lg:w-[.85rem] lg:h-[.85rem] rounded-full ${
                  index === 2 ? "bg-white" : "bg-slate-700 hover:bg-slate-500"
                } md:cursor-pointer`}
              ></li>
              <li
                onClick={() => {
                  setMember(Victor);
                  setMemberInfo(VictorInfo);
                  setIndex(3);
                }}
                className={`w-[.6rem] h-[.6rem] lg:w-[.85rem] lg:h-[.85rem] rounded-full ${
                  index === 3 ? "bg-white" : "bg-slate-700 hover:bg-slate-500"
                } md:cursor-pointer`}
              ></li>
              <li
                onClick={() => {
                  setMember(Anousheh);
                  setMemberInfo(AnoushehInfo);
                  setIndex(4);
                }}
                className={`w-[.6rem] h-[.6rem] lg:w-[.85rem] lg:h-[.85rem] rounded-full ${
                  index === 4 ? "bg-white" : "bg-slate-700 hover:bg-slate-500"
                } md:cursor-pointer`}
              ></li>
            </ul>

            <span>{memberInfo}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

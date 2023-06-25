import Link from "next/link";
import { useState, useEffect } from "react";

export default function ListItems() {
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);
  return (
    <ul className="w-full  text-white text-[1.1rem] pt-20 pl-5 h-64 flex flex-col justify-between md:flex-row md:justify-around md:p-0 md:text-[0.875rem] md:h-fit md:w-full">
      <li
        className={`tracking-[2.7px] cursor-pointer ${
          activePath === "/"
            ? "border-r-[.2rem]  md:border-b-2 md:border-r-0 lg:border-r-0 border-white"
            : ""
        } md:hover:border-b-2 md:hover:border-slate-500`}
      >
        <Link href="/">
          <p className="w-2 font-bold inline-block mr-6 md:hidden lg:inline-block">
            00
          </p>
          HOME
        </Link>
      </li>
      <li
        className={`tracking-[2.7px] cursor-pointer ${
          activePath === "/Destination"
            ? "border-r-[.2rem]  md:border-b-2 md:border-r-0 lg:border-r-0 border-white"
            : ""
        } md:hover:border-b-2 md:hover:border-slate-500`}
      >
        <Link href="/Destination">
          <p className="w-2 font-bold inline-block mr-6 md:hidden lg:inline-block">
            01
          </p>
          DESTINATION
        </Link>
      </li>
      <li
        className={`tracking-[2.7px] cursor-pointer ${
          activePath === "/Crew"
            ? "border-r-[.2rem]  md:border-b-2 md:border-r-0 lg:border-r-0 border-white"
            : ""
        } md:hover:border-b-2 md:hover:border-slate-500`}
      >
        <Link href="/Crew">
          <p className="w-2 font-bold inline-block mr-6 md:hidden lg:inline-block">
            02
          </p>
          CREW
        </Link>
      </li>
      <li
        className={`tracking-[2.7px] cursor-pointer ${
          activePath === "/Technology"
            ? "border-r-[.2rem]  md:border-b-2 md:border-r-0 lg:border-r-0 border-white"
            : ""
        } md:hover:border-b-2 md:hover:border-slate-500`}
      >
        <Link href="/Technology">
          <p className="w-2 font-bold inline-block mr-6 md:hidden lg:inline-block">
            03
          </p>
          TECHNOLOGY
        </Link>
      </li>
    </ul>
  );
}

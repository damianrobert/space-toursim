"use client";

import { useState } from "react";
import hamburger_menu from "../../../public/assets/hamburgerMenu.svg";
import close from "../../../public/assets/close.svg";
import sm_logo from "../../../public/assets/sm-logo.svg";
import md_logo from "../../../public/assets/md-logo.svg";
import Image from "next/image";
import ListItems from "@/components/ListItems";
import Link from "next/link";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const logInUser = () => {};

  return (
    <nav>
      <section className="px-3 h-0 md:hidden ">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link href="/">
              <Image src={sm_logo} alt="logo" />
            </Link>
          </div>

          <div
            className={open ? "hidden" : "block cursor-pointer"}
            onClick={handleOpen}
          >
            <Image src={hamburger_menu} alt="open-sidebar-menu" />
          </div>
        </div>
      </section>

      {/* MOBILE NAVBAR*/}
      <section
        className={
          open ? "w-64 h-screen absolute right-0 md:hidden z-10" : "hidden"
        }
      >
        <div className="h-full bg-white backdrop-blur-2xl bg-opacity-[0.4px] py-6">
          <div onClick={handleOpen} className="float-right cursor-pointer mr-4">
            <Image src={close} alt="close" />
          </div>

          <ListItems />
        </div>
      </section>

      {/*TABLET NAVBAR*/}
      <section className="hidden md:block h-0 lg:hidden">
        <div className="flex justify-between h-24">
          <div className="w-fit h-fit p-6">
            <Link href="/">
              <Image src={md_logo} alt="logo" />
            </Link>
          </div>
          <div className="w-[28.125rem] max-h-24 bg-white backdrop-blur-2xl bg-opacity-5 flex items-center">
            <ListItems />
          </div>
        </div>
      </section>

      {/*DESKTOP NAVBAR*/}
      <section className="w-screen hidden lg:block h-0 ">
        <div className="h-48 pt-10">
          <div className="flex justify-between items-center ">
            <div className="w-fit h-fit pl-12">
              <Link href="/">
                <Image src={md_logo} alt="logo" />
              </Link>
            </div>

            <div className="w-[51.875rem] h-24 bg-white backdrop-blur-2xl bg-opacity-5 flex justify-center items-center">
              <div className="w-[34rem]">
                <ListItems />
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}

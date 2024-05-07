"use client";
import headerData from "@/data/header.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("click");
    setShowMenu((prev) => !prev);
  };
  return (
    <header className="absolute z-10 flex w-full items-center justify-between px-6">
      <div className=" flex w-full items-center justify-between border-b-2 border-white py-3">
        <Link href="/" className="font-bebas text-xl text-white">
          <Image src="/images/logo.png" alt="prizzm" width={200} height={200} />
        </Link>

        <ul
          className={`absolute right-0 flex h-screen w-screen flex-col items-center justify-center gap-6 bg-black duration-300 sm:relative sm:top-0 sm:h-fit sm:w-fit sm:flex-row sm:bg-transparent ${showMenu ? "top-0" : "-top-[100vh]"} `}
        >
          {headerData.header.map((item, index) => {
            return (
              <>
                <li className="text-base uppercase text-white">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              </>
            );
          })}
        </ul>
        <div>
          <button
            onClick={() => toggleMenu()}
            className="relative z-20 text-white sm:hidden"
          >
            {showMenu ? "Close" : "Menu"}
          </button>
          <Link href="/contact-us">
            <button className="hidden rounded-full border-2 border-white px-3 py-1 font-bebas text-white duration-300 hover:bg-white hover:text-black sm:block">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;

/** @format */

// components/Navbar.js
"use client";
import useNavbarEffect from "@/hooks/useNavbarEffect";
import Image from "next/image";

const Navbar = () => {
  useNavbarEffect();

  return (
    <header className="transition ease-in-out duration-1000 fixed top-0 left-0 z-50 w-full bg-transparent bg-gradient-to-br from-primaryLP/70 to-purple-500/20 backdrop-blur-sm" id="nav-menu">
      <div className="container font-poppins text-semiWhite flex justify-between h-[75px] items-center">
        <div className="order-1 hidden lg:flex gap-4">
          <a className="nav_link" href="#home">
            Home
          </a>
        </div>
        <div className="order-2 hidden lg:flex gap-4">
          <a className="nav_link" href="#about">
            About
          </a>
        </div>
        <div className="order-4 hidden lg:flex gap-4">
          <a className="nav_link" href="#teacher">
            Teacher
          </a>
        </div>
        <div className="order-5 hidden lg:flex gap-4">
          <a className="nav_link" href="#contact">
            Contact
          </a>
        </div>
        <div className="lg:order-3 md:order-first">
          <Image src="/img/Logo MTS.png" alt="Logo MTs" width={50} height={50} />
        </div>
        <button className="md:block lg:hidden buttonTogle">
          <Image src="/img/Humberger.svg" alt="humberger icons" width={24} height={24} />
        </button>
      </div>
      <div className="mobileMenu h-auto rounded-lg hidden bg-gradient-to-r from-primaryLP/70 to-purple-500/20 backdrop-blur-md font-poppins text-semiWhite justify-between items-center">
        <div className="py-4 px-5 cursor-pointer hover:bg-primaryLP ease-in duration-300">
          <a className="nav_link" href="#home">
            Home
          </a>
        </div>
        <div className="py-4 px-5 cursor-pointer hover:bg-primaryLP ease-in duration-300">
          <a className="nav_link" href="#about">
            About
          </a>
        </div>
        <div className="py-4 px-5 cursor-pointer hover:bg-primaryLPLP ease-in duration-300">
          <a className="nav_link" href="#teacher">
            Teacher
          </a>
        </div>
        <div className="py-4 px-5 cursor-pointer hover:bg-primaryLP ease-in duration-300">
          <a className="nav_link" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

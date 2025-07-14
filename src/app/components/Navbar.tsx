"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button - Always on top */}
      <button
        className="fixed top-6 right-6 z-[999] text-yellow-400 lg:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Top Nav Bar */}
      <div className="flex items-center justify-between px-4 lg:px-20 py-6 sticky top-0 z-40 bg-black/60 backdrop-blur-2xl">
        <h3 className="text-2xl font-bold shadow-2xl text-white">Clonify</h3>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 shadow-2xl text-lg text-white">
          <a href="#home" className="text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#features" className="hover:text-yellow-400">Features</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#pricing" className="hover:text-yellow-400">Pricing</a>
          <a href="#" className="hover:text-yellow-400">Dropdown</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>

        {/* Get Started Button (desktop only) */}
        <Link
          href="/dashboard"
          className="hidden lg:block "
        >
          <button
  className="relative flex items-center px-6 py-2 overflow-hidden font-medium transition-all bg-yellow-500 rounded-md group"
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-yellow-400 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >Get Started</span
  >
</button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black/90 backdrop-blur-md z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } lg:hidden p-6 flex flex-col gap-4`}
      >
        <a href="#home" className="text-yellow-400">Home</a>
        <a href="#about" className="text-white hover:text-yellow-400">About</a>
        <a href="#features" className="text-white hover:text-yellow-400">Features</a>
        <a href="#services" className="text-white hover:text-yellow-400">Services</a>
        <a href="#pricing" className="text-white hover:text-yellow-400">Pricing</a>
        <a href="#login" className="text-white hover:text-yellow-400">Dropdown</a>
        <a href="#contact" className="text-white hover:text-yellow-400">Contact</a>
        <Link
          href="/dashboard"
          className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded-lg font-bold text-center"
        >
          Get Started
        </Link>
      </div>
    </>
  );
};
export default Navbar;

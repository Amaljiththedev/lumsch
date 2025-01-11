"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-transparent backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.png" // Replace with your logo path
                  alt="Logo"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </Link>
            </div>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex space-x-10">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Structure", href: "/structure" },
                { label: "Agency", href: "https://luminarylines.com/" },
                { label: "Hire from Us", href: "/hire-from-us" },
                { label: "Contact Us", href: "/contact" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white text-sm font-medium hover:text-gray-300 transition-all duration-300 text-shadow"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Action Button */}
            <div className="relative inline-flex group md:ml-6">
              <div
                className="absolute -inset-px bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] rounded-lg blur-md opacity-75 group-hover:opacity-100 transition duration-300"
              ></div>
              <a
                href="#"
                className="relative inline-flex items-center animate-shimmer justify-center px-5 py-2 text-sm font-bold bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2border border-slate-800  bg-[length:200%_100%]  transition-colors  focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-gray-900"
              >
                Join The Cult
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={handleMenuToggle}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-100 focus:outline-none"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-white bg-opacity-80">
              <div className="flex flex-col items-center justify-center bg-black py-6 space-y-4">
                <div className="absolute top-4 right-4">
                  <button
                    onClick={handleMenuToggle}
                    className="text-white text-2xl"
                    aria-label="Close menu"
                  >
                    &times;
                  </button>
                </div>
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Structure", href: "/structure" },
                  { label: "Agency", href: "https://luminarylines.com/" },
                  { label: "Hire from Us", href: "/hire-from-us" },
                  { label: "Contact Us", href: "/contact" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white text-lg font-medium hover:text-gray-500 transition-all duration-300"
                    onClick={handleMenuToggle}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Text Shadow Styling */}
      <style jsx>{`
        .text-shadow {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </>
  );
};

export default Navbar;

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

            {/* Menu Items (Desktop) */}
            <div className="hidden md:flex space-x-10">
              <Link
                href="/"
                className="text-white text-sm font-medium hover:text-gray-300 transition-all duration-300 text-shadow"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white text-sm font-medium hover:text-gray-300 transition-all duration-300 text-shadow"
              >
                About Us
              </Link>
              <Link
                href="/structure"
                className="text-white text-sm font-medium hover:text-gray-300 transition-all duration-300 text-shadow"
              >
                Structure
              </Link>
              <Link
                href="/youtube-channel"
                className="text-white text-sm font-medium hover:text-gray-300 transition-all duration-300 text-shadow"
              >
                Agency
              </Link>
              <Link
                href="/hire-from-us"
                className="text-white text-sm font-medium hover:text-gray-300 transition-all duration-300 text-shadow"
              >
                Hire from Us
              </Link>
              <Link
                href="/contact"
                className="text-white text-sm font-medium hover:text-gray-300 transition-all duration-300 text-shadow"
              >
                Contact Us
              </Link>
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
            <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50">
              <div className="flex flex-col items-center justify-center bg-white py-6 space-y-4">
                <Link
                  href="/"
                  className="text-black text-lg font-medium hover:text-gray-500 transition-all duration-300"
                  onClick={handleMenuToggle}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-black text-lg font-medium hover:text-gray-500 transition-all duration-300"
                  onClick={handleMenuToggle}
                >
                  About Us
                </Link>
                <Link
                  href="/structure"
                  className="text-black text-lg font-medium hover:text-gray-500 transition-all duration-300"
                  onClick={handleMenuToggle}
                >
                  Structure
                </Link>
                <Link
                  href="/youtube-channel"
                  className="text-black text-lg font-medium hover:text-gray-500 transition-all duration-300"
                  onClick={handleMenuToggle}
                >
                  Agency
                </Link>
                <Link
                  href="/hire-from-us"
                  className="text-black text-lg font-medium hover:text-gray-500 transition-all duration-300"
                  onClick={handleMenuToggle}
                >
                  Hire from Us
                </Link>
                <Link
                  href="/contact"
                  className="text-black text-lg font-medium hover:text-gray-500 transition-all duration-300"
                  onClick={handleMenuToggle}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        .text-shadow {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </>
  );
};

export default Navbar;

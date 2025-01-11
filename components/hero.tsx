import React from 'react';
import { AuroraBackground } from './hero/Aurora';

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center mb-52 items-center bg-transparent overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <AuroraBackground />
      </div>

      {/* Centered Text */}
      <div className="absolute z-10 text-center text-white px-6 sm:px-8 md:px-12">
        <p className="mb-4 text-lg sm:text-xl animate-shimmer text-transparent bg-[linear-gradient(110deg,#f0f0f1,45%,#5e6063,70%,#6b6d73)] bg-[length:200%_100%] bg-clip-text">
          Unlock Your Editing Potential
        </p>

        <h1 className="text-6xl sm:text-7xl mb-6 font-medium">
          Crafting Top-notch Video Editors
        </h1>

        <p className="text-lg sm:text-lg max-w-xl mx-auto">
          Join us to enhance your editing skills with expert guidance and hands-on projects.
        </p>

        {/* Button with Blue Gradient */}
        <div className="relative inline-flex group mt-6">
          <div
            className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
          ></div>
          <a
            href="#"
            title="Get it now"
            className="relative inline-flex items-center animate-shimmer justify-center px-5 py-2 text-sm font-bold bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2border border-slate-800  bg-[length:200%_100%]  transition-colors  focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-gray-900"
            role="button"
          >
            Join The Cult
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

"use client";
import React from "react";
import OrbitingLoader from "./Load";

export function SparklesPreview() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Title Section */}
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Luminary Lines
      </h1>

      {/* Gradient Section */}
      <div className="w-[40rem] h-40 relative flex items-center justify-center">
        {/* Gradient Lines */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Orbiting Loader */}
        <div className="absolute flex items-center justify-center w-full h-full">
          <OrbitingLoader />
        </div>
      </div>
    </div>
  );
}

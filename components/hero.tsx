"use client"
import React, { useEffect, useState } from 'react';
import { API } from '@/config/apiCofig';
import { AuroraBackground } from './hero/Aurora';
import RevealOnScroll from './Software/RevealOnScroll';

// Declare the type for HeroData directly in the component file
interface HeroData {
  id: number;
  documentId: string;
  Title: string;
  description: string;
  subheading: string;
  button:string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

const Hero = () => {
  // Use useState with type HeroData | null
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(API.HERO); // Use the HERO endpoint from API object
        const data = await response.json(); // Parse JSON response
        setHeroData(data.data); // Set the fetched data into state
      } catch (error) {
        console.error('Error fetching hero data:', error); // Handle errors
      }
    };

    fetchHeroData(); // Fetch data when the component mounts
  }, []);

  if (!heroData) {
    return <div>Loading...</div>; // Show loading state if data is not yet available
  }

  return (
    <div className="relative h-screen flex flex-col justify-center -mt-14 mb-52 items-center bg-transparent overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <AuroraBackground />
      </div>

      {/* Centered Text */}
      <div className="absolute z-10 text-center text-white px-6 sm:px-8 md:px-12">
        <RevealOnScroll>
        <p className="mb-4 text-base sm:text-lg md:text-xl lg:text-2xl text-transparent bg-[linear-gradient(110deg,#ffffff,50%,rgba(255,255,255,0.5),100%,rgba(255,255,255,0.1))] bg-[length:300%_100%] bg-clip-text">
            {heroData.subheading}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-medium">
            {heroData.Title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mx-auto">
            {heroData.description}
          </p>

          {/* Button with Blue Gradient */}
          <div className="relative inline-flex group mt-6">
            <div
              className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
            ></div>
            <a
              href="https://api.whatsapp.com/send/?phone=918089660028&text&type=phone_number&app_absent=0"
              title="Get it now"
              className="relative inline-flex items-center animate-shimmer justify-center px-5 py-2 text-sm font-bold bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2border border-slate-800  bg-[length:200%_100%]  transition-colors  focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-gray-900"
              role="button"
            >
              {heroData.button}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Hero;
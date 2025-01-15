"use client"; // Ensures the code is client-side rendered in Next.js

import Navbar from '@/components/Appbar/Navbar';
import React, { useState, useEffect, useRef } from 'react';

const About = () => {


  return (
    <div className="bg-gradient-to-r from-black via-black to-blue-950 text-white animate-gradient bg-[length:200%_200%]">
      <style jsx global>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 75%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 25%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradientAnimation 10s ease infinite;
        }
      `}</style>

      <Navbar />
      
      {/* Hero Section */}
      <div className="text-center py-16 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Luminary Lines</h1>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          A Personal Branding School & Editing Cohort that empowers creators to elevate their craft and amplify their presence online.
        </p>
      </div>

      {/* About the Company Section */}
      <div className="text-center px-4 py-8 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg sm:text-xl">
          Luminary Lines is not just an editing school; we are a hub for creators, influencers, and brands to unlock their full potential. 
          Our mission is to guide you through the ever-evolving world of video editing and personal branding, equipping you with skills and strategies 
          to stand out in a crowded digital space.
        </p>
      </div>

      {/* Values Section */}
      <div className="py-12 bg-transparent text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-8">
          <div className="p-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Integrity</h3>
            <p className="text-sm sm:text-base">We believe in transparency and honesty in everything we do, fostering trust with our clients and students.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Creativity</h3>
            <p className="text-sm sm:text-base">We encourage out-of-the-box thinking, helping you find innovative solutions to elevate your content.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Growth</h3>
            <p className="text-sm sm:text-base">We are committed to continuous improvement, ensuring that you stay ahead of trends and grow as a creator.</p>
          </div>
        </div>
      </div>

      {/* About the Instructor Section */}
      <div className="text-center py-12 px-6 sm:px-8">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Instructor & Founder: Harikrishna M</h3>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          With over 4 years of experience in video editing and personal branding, Harikrishna M has successfully guided hundreds of creators 
          in enhancing their digital presence. His hands-on teaching approach integrates the latest industry trends, ensuring students gain 
          both the technical skills and the personal branding strategies needed to succeed in today's competitive market.
        </p>
      </div>

    </div>
  );
};

export default About;

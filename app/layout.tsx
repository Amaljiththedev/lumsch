"use client"
import React, { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SparklesPreview } from "@/components/Loader";

// Import Geist fonts from Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Set 5-second delay

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Clash Display font from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@1&display=swap"
          rel="stylesheet"
          precedence="default"
        />
        {/* Orbitron font (if still needed) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap"
          rel="stylesheet"
          precedence="default"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "'Clash Display', sans-serif" }} // Default font-family
      >
        {isLoading ? (
          // Render SparklesPreview (or your custom loader) when loading
          <div className="sparkles-preview">
            {/* Add your SparklesPreview component or animation here */}
            <SparklesPreview/>
          </div>
        ) : (
          // Render children after 5 seconds
          children
        )}
      </body>
    </html>
  );
}

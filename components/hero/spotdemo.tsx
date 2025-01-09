
import React from "react";
import { Spotlight } from "./spotlight";
 
export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02]  overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
  
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
        
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="red"
      />
        
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
        
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />


    </div>
  );
}
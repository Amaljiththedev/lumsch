import React from 'react';

import { AuroraBackground } from './hero/Aurora';

const Hero = () => {
  return (
    <>
      <div className="relative h-screen flex flex-col justify-center items-center bg-transparent overflow-hidden">
        {/* SpotlightPreview positioned at the top */}
        <div className="absolute top-0 left-0 w-full">
          <AuroraBackground />
        </div>

        {/* Centered Text */}
        <div className="absolute -mt-52 text-center text-white z-10 px-4">
          <p className="mb-4 text-lg sm:text-xl animate-shimmer text-transparent bg-[linear-gradient(110deg,#f0f0f1,45%,#5e6063,70%,#6b6d73)] bg-[length:200%_100%] bg-clip-text">
            Unlock Your Editing Potential
          </p>

          <h1 className="text-4xl sm:text-6xl mb-6 font-extralight">Crafting Top-notch Video Editors</h1>
          <p className="text-lg sm:text-lg max-w-xl mx-auto">
            Join us to enhance your editing skills with expert guidance and hands-on projects.
          </p>
        </div>


      </div>
    </>
  );
};

export default Hero;

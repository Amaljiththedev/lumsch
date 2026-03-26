import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assests/girl-setting-favorite-button-in-website.json" // ✅ no .json, no tsconfig needed

// Lottie Animation Component
const TimelineVideo1 = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-auto">
      <div className="relative w-full max-w-md">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-full h-[450px] rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

// Title Section Component
const TitleSection = () => {
  return <>Video Editing</>;
};

// List Section Components
const ListSection1 = () => <li>Script & Storyboard Planning</li>;
const ListSection2 = () => <li>Raw Footage Editing & Cuts</li>;
const ListSection3 = () => <li>Color Grading & Final Export</li>;

const Description = () => {
  return (
    <p>
      Professional video editing services tailored to bring your vision to life
      with precision and creativity.
    </p>
  );
};

export {
  TimelineVideo1,
  TitleSection,
  ListSection1,
  ListSection2,
  ListSection3,
  Description,
};
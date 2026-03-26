import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assests/business.json"; // 👈 paste your JSON here as a const

// Lottie Animation Component
const TimelineVideo3 = () => {
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
const TitleSection3 = () => {
  return <>Industry Positioning</>;
};

// Subheading Section Component
const SubheadingSection3 = () => {
  return <p>Become an Industry Leader</p>;
};

// List Section Components
const ListSection31 = () => <li>Brand Strategy & Positioning</li>;
const ListSection32 = () => <li>Thought Leadership Content</li>;
const ListSection33 = () => <li>Competitive Market Analysis</li>;
const ListSection34 = () => <li>Authority Building & PR</li>;

const Description3 = () => {
  return (
    <p>
      Strategically positioning your brand to stand out, dominate your niche,
      and establish lasting authority as a recognized industry leader.
    </p>
  );
};

export {
  TimelineVideo3,
  TitleSection3,
  SubheadingSection3,
  ListSection31,
  ListSection32,
  ListSection33,
  ListSection34,
  Description3,
};
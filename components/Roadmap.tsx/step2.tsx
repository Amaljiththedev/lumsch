import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assests/customer-review.json"; // 👈 paste your JSON here as a const

// Lottie Animation Component
const TimelineVideo2 = () => {
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
const TitleSection2 = () => {
  return <>Client Training</>;
};

// Subheading Section Component
const SubheadingSection2 = () => {
  return <p>Enhance Communication</p>;
};

// List Section Components
const ListSection21 = () => <li>Onboarding & Walkthroughs</li>;
const ListSection22 = () => <li>Live Training Sessions</li>;
const ListSection23 = () => <li>Feedback & Iteration Cycles</li>;

const Description2 = () => {
  return (
    <p>
      Empowering clients with the knowledge and tools they need to communicate
      effectively and get the most out of every collaboration.
    </p>
  );
};

export {
  TimelineVideo2,
  TitleSection2,
  SubheadingSection2,
  ListSection21,
  ListSection22,
  ListSection23,
  Description2,
};
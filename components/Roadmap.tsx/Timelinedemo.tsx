import { motion } from "framer-motion";
import React from "react";
import { Timeline } from "./Timeline";
import { 
  Description, ListSection1, ListSection2, ListSection3, 
  SubheadingSection, TimelineVideo1, TitleSection 
} from "./step1";
import { 
  Description2, ListSection21, ListSection22, ListSection23, 
  SubheadingSection2, TimelineVideo2, TitleSection2 
} from "./step2";
import { 
  Description3, ListSection31, ListSection32, ListSection33, 
  ListSection34, SubheadingSection3, TimelineVideo3, TitleSection3 
} from "./step3";

export function TimelineDemo() {
  const animationSettings = {
    initial: { y: 50 },
    whileInView: { y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: false, amount: 0.2 },
  };

  const titleAnimationSettings = {
    initial: { x: -50 },
    whileInView: { x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: false, amount: 0.2 },
  };

  const data = [
    {
      title: (
        <motion.div {...titleAnimationSettings}>
          <TitleSection />
        </motion.div>
      ),
      content: (
        <motion.div {...animationSettings} className="timeline-section">
          <div className="text-white text-xs md:text-sm font-normal mb-8">
            <Description />
          </div>
          <ul className="text-white text-xs md:text-sm font-normal mb-8 list-disc pl-5">
            <ListSection1 />
            <ListSection2 />
            <ListSection3 />
          </ul>
          <div className="text-white text-xs md:text-sm font-normal mb-8">
            <SubheadingSection />
          </div>
          <div className="grid gap-4">
            <TimelineVideo1 />
          </div>
        </motion.div>
      ),
    },
    {
      title: (
        <motion.div {...titleAnimationSettings}>
          <TitleSection2 />
        </motion.div>
      ),
      content: (
        <motion.div {...animationSettings} className="timeline-section">
          <div className="text-white text-xs md:text-sm font-normal mb-8">
            <Description2 />
          </div>
          <ul className="text-white text-xs md:text-sm font-normal mb-8 list-disc pl-5">
            <ListSection21 />
            <ListSection22 />
            <ListSection23 />
          </ul>
          <div className="text-white text-xs md:text-sm font-normal mb-8">
            <SubheadingSection2 />
          </div>
          <div className="grid gap-4">
            <TimelineVideo2 />
          </div>
        </motion.div>
      ),
    },
    {
      title: (
        <motion.div {...titleAnimationSettings}>
          <TitleSection3 />
        </motion.div>
      ),
      content: (
        <motion.div {...animationSettings} className="timeline-section">
          <div className="text-white text-xs md:text-sm font-normal mb-8">
            <Description3 />
          </div>
          <ul className="text-white text-xs md:text-sm font-normal mb-8 list-disc pl-5">
            <ListSection31 />
            <ListSection32 />
            <ListSection33 />
            <ListSection34 />
          </ul>
          <div className="text-white text-xs md:text-sm font-normal mb-8">
            <SubheadingSection3 />
          </div>
          <div className="grid">
            <TimelineVideo3 />
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

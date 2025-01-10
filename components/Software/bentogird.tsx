import React from "react";
import { IconBuildingCommunity, IconFileBroken, IconSignature, IconTools } from "@tabler/icons-react";
import { CardSkeletonContainer, Skeleton1 } from "./card";
import { Chart } from "./GrowthGraph";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { useInView } from "react-intersection-observer"; // Import the Intersection Observer hook
import { motion } from "framer-motion"; // Import framer-motion for animations
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const items = [
  {
    title: "Mastering Advanced Tools",
    description: "Dive into the suite of powerful tools that students master to create innovative solutions and drive progress.",
    header: (
      <CardSkeletonContainer>
        <Skeleton1 />
      </CardSkeletonContainer>
    ),
    className: "md:col-span-3", // Make this item span 2 columns to make it bigger
    icon: <IconTools className="h-12 w-12 text-neutral-500" />, // Increased icon size
  },
  {
    title: "Elevating Creativity",
    description: "Unleashing growth and redefining creativity through expert guidance in video editing.",
    header: <Chart />,
    className: "md:col-span-2", // Ensure the other items take up 1 column
    icon: <IconSignature className="h-10 w-10 text-neutral-500" />, // Increased icon size
  },
  {
    title: "Pioneering Freelancing and Agency Leadership",
    description: "Acquire the expertise and strategies necessary to excel as a professional freelancer or launch a thriving agency after mastering essential skills.",
    header:  <DotLottieReact
      src="https://lottie.host/258b2181-4253-4664-be82-2ae9fad6e37c/YUd2s5H67o.lottie"
      loop
      autoplay
    />,
    className: "md:col-span-1", // Ensure the other items take up 1 column
    icon: <IconBuildingCommunity className="h-10 w-10 text-neutral-500" />, // Increased icon size
  },
];

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial position (invisible and 50px lower)
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animate opacity and Y position
      transition={{ duration: 0.5 }} // Transition duration
    >
      {children}
    </motion.div>
  );
};

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={<RevealOnScroll>{item.title}</RevealOnScroll>} // Wrap text with RevealOnScroll
          description={<RevealOnScroll>{item.description}</RevealOnScroll>} // Wrap description with RevealOnScroll
          header={<RevealOnScroll>{item.header}</RevealOnScroll>} // Wrap header with RevealOnScroll
          className={`p-4 flex flex-col justify-between ${item.className}`}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

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
    className: "md:col-span-2",
    icon: <IconTools className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (
      <div className="flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/0be36993-49b6-4148-8ce4-da12d9dbf815/I9fTTxFe8b.lottie"
          loop
          autoplay
          className="w-64 h-64" // Adjust size as needed
        />
      </div>
    ),
    className: "col-span-1 flex flex-col items-center text-center space-y-4", // Center the content
    icon: <IconFileBroken className="h-8 w-8 text-neutral-500" />, // Made icon bigger
  },  
  {
    title: "Elevating Creativity",
    description: "Unleashing growth and redefining creativity through expert guidance in video editing.",
    header: <Chart />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Pioneering Freelancing and Agency Leadership",
    description: "Acquire the expertise and strategies necessary to excel as a professional freelancer or launch a thriving agency after mastering essential skills.",
    header:  <DotLottieReact
    src="https://lottie.host/258b2181-4253-4664-be82-2ae9fad6e37c/YUd2s5H67o.lottie"
    loop
    autoplay
  />,
    className: "md:col-span-2",
    icon: <IconBuildingCommunity className="h-6 w-6 text-neutral-500" />,
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
    <BentoGrid className="max-w-4xl mx-auto">
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

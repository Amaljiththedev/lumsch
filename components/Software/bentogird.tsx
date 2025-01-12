import React from "react";
import { IconBuildingCommunity, IconSignature, IconTools } from "@tabler/icons-react";
import { CardSkeletonContainer, Skeleton1 } from "./card";
import { Chart } from "./GrowthGraph";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import RevealOnScroll from './RevealOnScroll'; // Import the RevealOnScroll component

const items = [
  {
    title: "Mastering Advanced Tools",
    description: "Dive into the suite of powerful tools that students master to create innovative solutions and drive progress.",
    header: (
      <CardSkeletonContainer>
        <Skeleton1 />
      </CardSkeletonContainer>
    ),
    className: "md:col-span-3",
    icon: <IconTools className="h-10 w-10 text-white" />,
  },
  {
    title: "Elevating Creativity",
    description: "Unleashing growth and redefining creativity through expert guidance in video editing.",
    header: <Chart />,
    className: "md:col-span-3",
    icon: <IconSignature className="h-10 w-10 text-white" />,
  },
  {
    title: "Freelancing & Agency Leadership",
    description: "Develop the essential skills and strategies to excel as a freelancer or lead a successful agency. Learn how to manage clients, deliver high-quality work, and grow your business in a competitive market.",
    header: (
      <DotLottieReact
        src="https://lottie.host/258b2181-4253-4664-be82-2ae9fad6e37c/YUd2s5H67o.lottie"
        loop
        autoplay
      />
    ),
    className: "md:col-span-3",
    icon: <IconBuildingCommunity className="h-10 w-10 text-white" />,
  }
  
];

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto grid  md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={<RevealOnScroll>{item.title}</RevealOnScroll>}
          description={<RevealOnScroll>{item.description}</RevealOnScroll>}
          header={<RevealOnScroll>{item.header}</RevealOnScroll>}
          className={` flex flex-col justify-between ${item.className}`}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

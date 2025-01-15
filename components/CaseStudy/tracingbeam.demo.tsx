"use client";
import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./tracing-beam";
import { Component } from "./Graph";
import { motion } from "framer-motion";
import { IconVolume2, IconVolumeOff } from "@tabler/icons-react";
import Image from "next/image";
import RevealOnScroll from "../Software/RevealOnScroll";
import { VideoComponent2 } from "./Video2";
import { VideoComponent3 } from "./video3";
import { VideoComponent1 } from "./video1";

export function TracingBeamDemo() {
  
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative min-h-screen"> {/* Adjusted to fit all content */}
        {dummyContent.map((item, index) => (
          <RevealOnScroll key={`content-${index}`}>
            <div className="mb-10 flex flex-col items-center text-center">
              <h2 className="bg-transparent font-bold underline text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("text-xl mb-4")}>{item.title}</p>

              <motion.div
                className="text-sm prose prose-sm prose-invert"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {item.component && (
                  <div className="rounded-lg mb-10 flex justify-center w-full">
                    {item.component}
                  </div>
                )}
                <div className="text-left">{item.description}</div>
              </motion.div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "The Growing Demand for Premium Video Editors: Trends & Insights",
    description: (
      <>
        <h3>
          As video content continues to dominate digital media, the demand for
          premium video editors is soaring. These professionals are at the
          forefront of creative expression, utilizing cutting-edge tools that
          push the boundaries of what's possible in video production.
        </h3>
        <VideoComponent1/>
      </>
    ),
    badge: "Analysis",
    component: <Component />,
  },

  {
    title: "Our Intentions: Empowering the Next Generation of Video Editors",
    description: (
      <>
        <h3>
          Our core mission is to empower students by providing them with the
          skills and opportunities to become premium video editors. We believe
          that through education, we can bridge the gap between talent and
          global demand, addressing the pressing issue of unemployment.
        </h3>
      </>
    ),
    badge: "Empowerment",
    component: <VideoComponent2 />,
  },

  {
    title: "Building a Cohort of Skilled Video Editors",
    description: (
      <>
        <h3>
          At the heart of our mission is a strong, supportive cohort of learners
          who will grow together through guided training, mentorship, and
          hands-on experience. We believe that learning is most effective when
          done in a collaborative, community-driven environment.
        </h3>
      </>
    ),
    badge: "Cohort-Based Learning",
    component: (
      <VideoComponent3 />
    ),
  },
];

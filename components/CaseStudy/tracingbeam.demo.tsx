"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./tracing-beam";
import { Component } from "./Graph";
import { motion } from "framer-motion";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-transparent text-white rounded-full text-sm w-fit px-4 py-1 mb-4 text-center">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4 text-center")}>{item.title}</p>

            <motion.div
              className="text-sm prose prose-sm prose-invert text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {item.component && (
                <div className="rounded-lg mb-10 flex justify-center">{item.component}</div>
              )}
              <div>{item.description}</div>
            </motion.div>
          </div>
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
          As video content continues to dominate digital media, the demand for premium video editors is soaring. These professionals are at the forefront of creative expression, utilizing cutting-edge tools that push the boundaries of what's possible in video production.
        </h3>
        <p>
          With an increasing demand for high-quality, AI-powered editing tools, the video editing industry is experiencing a surge in requirements for skilled professionals who can handle complex projects. Editors now need tools that not only enhance their creative abilities but also optimize their workflow to meet the rising expectations of their clients.
        </p>
        <p>
          Despite the growing demand, the supply of premium video editors remains critically low. The gap between the need for skilled talent and the available workforce is expected to widen over the next five years. As companies and creators invest heavily in video content, the shortage of capable editors becomes more pronounced, creating a massive opportunity for those entering the field.
        </p>
        <p>
          For aspiring editors, now is the perfect time to dive into this high-demand profession, as the industry is looking for individuals equipped with the skills to handle complex, real-time editing and collaboration projects.
        </p>
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
          Our core mission is to empower students by providing them with the skills and opportunities to become premium video editors. We believe that through education, we can bridge the gap between talent and global demand, addressing the pressing issue of unemployment.
        </h3>
        <p>
          By offering specialized training in cutting-edge video editing techniques, we aim to equip students with the practical skills needed to thrive in the fast-evolving digital media landscape. Our curriculum is designed not just to teach the tools of the trade, but to foster creativity and problem-solving abilities that will set our graduates apart in the competitive market.
        </p>
        <p>
          Beyond just technical skills, we focus on preparing students for real-world scenarios by connecting them with clients from across the globe. This not only gives them invaluable hands-on experience but also opens doors to remote work opportunities that transcend geographic limitations, helping to combat unemployment on a global scale.
        </p>
        <p>
          Our ultimate goal is to create a new generation of video editors who are not only skilled professionals but also confident in their ability to solve complex problems and create value for clients worldwide. Together, we can reshape the future of video editing and empower students to build successful, sustainable careers.
        </p>
      </>
    ),
    badge: "Empowerment",
    component: (
      <div className="-z-10">
        <iframe
          src="https://giphy.com/embed/3oEjHOHL4imunWyr9S"
          width="480"
          height="324"
          style={{ border: "none", pointerEvents: "none" }}
          frameBorder="0"
          className="giphy-embed w-full h-auto"
          allowFullScreen
        ></iframe>
      </div>
    ),
  },

  {
    title: "Building a Cohort of Skilled Video Editors",
    description: (
      <>
        <h3>
          At the heart of our mission is a strong, supportive cohort of learners who will grow together through guided training, mentorship, and hands-on experience. We believe that learning is most effective when done in a collaborative, community-driven environment.
        </h3>
        <p>
          Our cohort-based model ensures that students don't just learn in isolation, but alongside peers who share their passion for video editing. Throughout the program, participants will engage in group projects, peer feedback sessions, and live collaborations that will strengthen their skills and broaden their perspectives.
        </p>
        <p>
          The power of community is vital to our success, as we create an ecosystem where learners can build lasting professional connections. By the end of the program, graduates will not only have developed their technical skills but also gained invaluable teamwork and leadership experience—key traits that will set them apart in the competitive world of video editing.
        </p>
        <p>
          We are committed to creating a space where every cohort is equipped with the resources and support to succeed, giving students the confidence they need to take on real-world challenges and make an impact in the industry.
        </p>
      </>
    ),
    badge: "Cohort-Based Learning",
    component: <img src="./cohort.png" className="w-full h-auto" />,
  },
];

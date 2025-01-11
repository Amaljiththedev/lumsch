"use client"
import Navbar from "@/components/Appbar/Navbar";

import { TracingBeamDemo } from "@/components/CaseStudy/tracingbeam.demo";
import TwoColumnFooter from "@/components/Footer/Footer";
import Hero from "@/components/hero";
import Card from "@/components/price/card";
import { TimelineDemo } from "@/components/Roadmap.tsx/Timelinedemo";
import { BentoGridSecondDemo } from "@/components/Software/bentogird";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-black via-black to-blue-950 text-white animate-gradient bg-[length:200%_200%]">
        <style jsx global>{`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient {
            animation: gradientAnimation 8s ease infinite;
          }
        `}</style>
        <Navbar/>
        <main className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
          {/* Hero Section */}
          <header className="w-full">
            <Hero />
          </header>

          <section className="flex-grow -mt-96 md:-mt-96 z-10 flex items-center justify-center w-full px-4 sm:px-6 md:px-10">
            <TimelineDemo />
          </section> 

          {/* Learning Tools Section */}
          <section className="flex-grow mt-40 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Let&apos;s cut to the chase. What am I gonna learn?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mb-10">
              Cut the BS short! Here&apos;s a no-nonsense look at the tools you
              are going to MASTER.
            </p>
            <BentoGridSecondDemo />
          </section>

          {/* Case Study Section */}
          <section className="flex-grow mt-40 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 bg-transparent text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Case Study: Know Where the Demand Is
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mb-10">
              Explore the real-world demand driving innovation. This case study
              highlights key areas of growth, revealing where businesses are
              seeking the most talent and solutions.
            </p>
            <TracingBeamDemo />
          </section>

          {/* Video Editor Section */}
          <section className="bg-transparent text-center py-16">
            <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg">

              <p className="text-xl text-white mb-6">
                Join our cohort and master video editing with expert guidance.
              </p>

              <div className="flex justify-center">
                <Card title={""} price={""} description={""} />
              </div>

              <p className="mt-8 text-lg text-gray-200 italic">
                "The best way to predict the future is to create it." - Abraham
                Lincoln
              </p>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="w-full py-6 text-center text-white flex justify-center items-center ">
            <TwoColumnFooter />
          </footer>
        </main>
      </div>
    </>
  );
}
"use client"

import { useState, useEffect } from "react"; // Import useState and useEffect hooks
import Navbar from "@/components/Appbar/Navbar";
import { TracingBeamDemo } from "@/components/CaseStudy/tracingbeam.demo";
import FAQ from "@/components/FAQ/Faq";
import TwoColumnFooter from "@/components/Footer/Footer";
import Hero from "@/components/hero";
import Card from "@/components/price/card";
import { TimelineDemo } from "@/components/Roadmap.tsx/Timelinedemo";
import { BentoGridSecondDemo } from "@/components/Software/bentogird";
import RevealOnScroll from "@/components/Software/RevealOnScroll";
import StudentTestimonials from "@/components/Testimonals/Carsousel/base";
import TestimonialSection from "@/components/Walloflove/Testimonials";

export default function Home() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    // Set a timer to show the footer after 1 second
    const timer = setTimeout(() => {
      setIsFooterVisible(true);
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-black via-black to-blue-950 text-white animate-gradient bg-[length:200%_200%]">
        <style jsx global>{`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 50% 75%;
            }
            50% {
              background-position: 100% 50%;
            }
            75% {
              background-position: 50% 25%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient {
            animation: gradientAnimation 10s ease infinite;
          }
        `}</style>
        <Navbar />
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
            <RevealOnScroll>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
                LET&apos;'S CUT TO THE CHASE. WHAT AM I GONNA LEARN?
              </h2>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mb-10">
                Cut the BS short! Here&apos;s a no-nonsense look at the tools you
                are going to MASTER.
              </p>
            </RevealOnScroll>
            <BentoGridSecondDemo />
          </section>

          <section className="flex flex-col items-center justify-center text-center py-16 -mt-40 sm:mt-24 md:mt-28">
            <StudentTestimonials />
          </section>
          <section className="-mt-40">
            <TestimonialSection />
          </section>

          {/* Case Study Section */}
          <section id="case-study" className="flex-grow mt-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 bg-transparent text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
              Case Study: Know Where the Demand Is
            </h2>
            <TracingBeamDemo />
          </section>

          {/* Video Editor Section */}
          <section className="bg-transparent text-center py-16">
            <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg">
              <p className="text-3xl text-white mb-6 sm:text-4xl md:text-5xl font-light">
                Join our cohort and master video editing with expert guidance.
              </p>
              <div className="flex justify-center">
                <Card title={"Transform Your Passion Into Profession"} price={"25000"} description={""} />
              </div>
              <p className="mt-8 text-lg text-gray-200 italic">
                "The best way to predict the future is to create it." - Abraham Lincoln
              </p>

              {/* Logos with Blue Gradient Background */}
              <div className="mt-8 flex flex-col items-center bg-transparent p-4 rounded-lg">
                <div className="text-center text-sm text-gray-200 mb-4">
                  <p>Available Payment Methods</p>
                  <p>EMI options available</p>
                </div>
                <div className="flex items-center space-x-4">
                  <img 
                    src="/rzr.png" 
                    alt="Logo 1" 
                    className="h-12 opacity-100"
                  />
                  <img 
                    src="/bajaj.png" 
                    alt="Logo 2" 
                    className="h-12 opacity-100 bg-gradient-to-r"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <FAQ />
          </section>

          {/* Footer Section */}
          {isFooterVisible && (
            <footer id='contact' className="w-full py-6 text-center text-white flex justify-center items-center">
              <TwoColumnFooter />
            </footer>
          )}
        </main>
      </div>
    </>
  );
}

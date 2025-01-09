// import { TracingBeamDemo } from "@/components/CaseStudy/tracingbeam.demo";
import Hero from "@/components/hero";
// import { TimelineDemo } from "@/components/Roadmap.tsx/Timelinedemo";
// import { BentoGridSecondDemo } from "@/components/Software/bentogird";
// import Image from "next/image";

export default function Home() {
  return (
    <>


      <main className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {/* Hero Section */}
        <header className="w-full">
          <Hero />
        </header>

        {/* Timeline Section */}
        {/* <section className="flex-grow -mt-56 md:-mt-96 flex items-center justify-center w-full px-4 sm:px-6 md:px-10 bg-black">
          <TimelineDemo />
        </section>

        // {/* Learning Tools Section */}
        {/* // <section className="flex-grow mt-40 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 bg-black text-center">
        //   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
        //     Let&apos;s cut to the chase. What am I gonna learn?
        //   </h2>
        //   <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mb-10">
        //     Cut the BS short! Here&apos;s a no-nonsense look at the tools You are going to MASTER.
        //   </p>
        //   <BentoGridSecondDemo />
        // </section>
        // <section className="flex-grow mt-40 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 bg-black text-center">
        //   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Case Study: Know Where the Demand Is</h2>
        //   <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mb-10">
        //     Explore the real-world demand driving innovation. This case study highlights key areas of growth, revealing where businesses are seeking the most talent and solutions.
        //     </p>
        //     <TracingBeamDemo/>
        // </section> */} 


        {/* Footer Section */}
        <footer className="w-full py-6  text-center text-white">

        </footer>
      </main>
    </>
  );
}

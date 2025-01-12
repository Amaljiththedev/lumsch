// StudentTestimonials.tsx

import React from 'react';
import Accumulation from './Carsousel'; // Adjust the import path based on your folder structure
import RevealOnScroll from '@/components/Software/RevealOnScroll';

const StudentTestimonials: React.FC = () => {
  return (
    <section className="flex-grow mt-40 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 text-cente  text-center py-16  sm:mt-24 md:mt-28 rounded-lg shadow-lg">
      {/* Title */}
      <RevealOnScroll><h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
        HERE'S WHAT OUR STUDENTS HAVE TO SAY
      </h2></RevealOnScroll>

      {/* Subtitle or Description */}
      <RevealOnScroll><p className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto">
        Our students' experiences speak volumes about the value of our courses. Here's a glimpse into how we’ve helped them grow and achieve their goals.
      </p></RevealOnScroll>

      {/* Testimonials Carousel */}
      <RevealOnScroll><Accumulation /></RevealOnScroll>
    </section>
  );
};

export default StudentTestimonials;

// StudentTestimonials.tsx

import React from 'react';
import RevealOnScroll from '@/components/Software/RevealOnScroll';
import Accumulation from './Carsousel';

const StudentTestimonials: React.FC = () => {
  return (
    <section className="flex-grow mt-40 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 text-cente  text-center py-16  sm:mt-24 md:mt-28 rounded-lg shadow-lg">
      {/* Title */}
      <RevealOnScroll><h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
        HERE'S WHAT OUR STUDENTS HAVE TO SAY
      </h2></RevealOnScroll>


      {/* Testimonials Carousel */}
      <RevealOnScroll><Accumulation /></RevealOnScroll>
    </section>
  );
};

export default StudentTestimonials;

// StudentTestimonials.tsx

import React from 'react';
import Accumulation from './Carsousel'; // Adjust the import path based on your folder structure

const StudentTestimonials: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 mt-20 sm:mt-24 md:mt-28 rounded-lg shadow-lg">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
        HERE'S WHAT OUR STUDENTS HAVE TO SAY
      </h2>

      {/* Subtitle or Description */}
      <p className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto">
        Our students' experiences speak volumes about the value of our courses. Here's a glimpse into how we’ve helped them grow and achieve their goals.
      </p>

      {/* Testimonials Carousel */}
      <Accumulation />
    </section>
  );
};

export default StudentTestimonials;

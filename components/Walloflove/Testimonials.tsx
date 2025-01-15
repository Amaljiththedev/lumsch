"use client"
import React, { useEffect, useState } from "react";
import API from "@/config/apiCofig"; // Adjust path to your API file
import { TestimonialCard } from "./Cards";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
};

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(API.TESTIMONIALS); // Use the API endpoint here
        const data = await res.json();
        
        if (data.data) {
          setTestimonials(data.data);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="py-16 flex-grow mt-40 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-center text-white mb-8">
        READ SOME MORE STORIES
      </h1>
      <TestimonialCard testimonials={testimonials} columns={3} spacing="lg" />
    </div>
  );
};

export default TestimonialSection;

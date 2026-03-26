"use client"
import React, { useEffect, useState } from "react";
import API from "@/config/apiCofig"; // Adjust path to your API file
import { TestimonialCard } from "./Cards";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
};

const defaultTestimonials: Testimonial[] = [
  { id: 1, name: "Anand", quote: "This course completely changed how I pitch to clients. I landed my first high-paying retainer within a month!" },
  { id: 2, name: "Jasim", quote: "The advanced Premiere Pro workflows are a game changer. My editing speed has doubled, allowing me to take on more clients." },
  { id: 3, name: "Jaseel", quote: "I had the skills but didn't know how to position myself. This showed me exactly how to build a premium personal brand as an editor." },
  { id: 4, name: "Vishnu", quote: "From struggling on freelancer platforms to closing high-ticket clients directly through cold outreach. Highly recommended!" },
  { id: 5, name: "Arjun", quote: "The community feedback is invaluable. Whenever I'm stuck on a complex edit or a client negotiation, I get the help I need instantly." },
  { id: 6, name: "Nived", quote: "Finally, a course that teaches the business side of freelance video editing, not just how to cut clips together." },
  { id: 7, name: "Akhil", quote: "My portfolio went from looking amateur to professional overnight. Clients actually respect my rates without bargaining now." },
  { id: 8, name: "Rahul", quote: "Best investment I've made in my freelance career. The ROI is insane if you actually apply the client outreach strategies." },
  { id: 9, name: "Haris", quote: "I was charging way too little before. The pricing psychology and positioning modules gave me the confidence to triple my rates." },
  { id: 10, name: "Sreejith", quote: "The color grading and sound design secrets alone are worth the price. My short-form content looks incredibly cinematic now." },
  { id: 11, name: "Gokul", quote: "I was lost on how to actually acquire clients consistently. The cold messaging templates provided here have completely filled my pipeline!" },
  { id: 12, name: "Fahad", quote: "Moving from Upwork to closing clients via LinkedIn seemed impossible, until I took this course. My freelance video editing business is finally scaling." }
];

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(API.TESTIMONIALS); // Use the API endpoint here
        const data = await res.json();
        
        if (data.data && Array.isArray(data.data)) {
          const apiTestimonials = data.data.map((t: any, index: number) => ({
            ...t,
            id: defaultTestimonials.length + index + 1
          }));
          setTestimonials([...defaultTestimonials, ...apiTestimonials]);
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

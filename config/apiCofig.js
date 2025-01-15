// API.js
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';

export const API = {
  HERO: `${API_URL}/hero`, // Endpoint for the Hero section
  TESTIMONIALS: `${API_URL}/testimonials`, // Endpoint for Testimonials
  CAROUSEL_SLIDES: `${API_URL}/carouselsliding`, // Endpoint for Carousel slides
  POSTS: `${API_URL}/posts`, // Endpoint for posts/timeline data
  FAQS: `${API_URL}/faqs`, // Endpoint for FAQs
};

export default API;

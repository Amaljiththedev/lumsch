import React from "react";
import { TestimonialCard } from "./Cards";

const testimonials = [
  {
    quote: `Transitioned from a web developer to a video editor, always wanted to try it but didn't know the math. My friend suggested me this, I was a bit skeptical after taking all those Udemy courses it will be the same but no, both Martin and Ocus are really experienced in video editing, they made learning really fun and easy. It surely took some practice after the session but their guidance truly helped. I'm glad that I took my friends advice.`,
    name: "Shreyas Jahagirdar - Cohort 3",
  },
  {
    quote: `I had the privilege of joining the Cohort and I can say with certainty that it has been a game-changer for me. The network I've gained access to, which includes India's top editors, content creators, and freelancers, has been invaluable. My life took a turn for the better when I was offered an internship at Aevy, made possible through the mentorship of great leaders like Varun Mayya, Kuntur Sir papa ocus, and Martin. Their guidance continues to shape my present and future. This investment has been life-changing and I highly recommend it to anyone looking to take their career to the next level.`,
    name: "Dileep Reddy - Cohort 2",
  },
  {
    quote: `Hey Shirsh! I just wanted to tell you that I got my first stipend as a "video editor" credited today and I really want to thank you mentors and the aevy team for giving this opportunity to us to learn the skill. TYSM!`,
    name: "Tushar Agarwal - Cohort 1",
  },
  {
    quote: `I joined this cohort because I just wanted to learn something new, didn't expect it to be so great. I had never edited before on premiere. Best part for me was everything was taught from scratch, I learnt a lot and the learning skyrocketed after I joined as an intern. Trust me investing in this cohort was 1000% worth`,
    name: "Rohit Tarale - Cohort 1",
  },
  {
    quote: `Hey bro, first of all I would like to thank you for this cohort, if you wouldn't have called me, I wouldn't have joined but you told me the benefits and all and so I decided to take part. And now yesterday I got hired by an agency, which works with like 15 big FIFA Youtube creators. First two months will be internship with stipend of 15k and after performing well in internship they'll offer me a full-time role with base pay of 30k and with more time and experience it will be 50k and could go upto like 70k too.`,
    name: "Neeraj - Cohort 1",
  },
  {
    quote: `I'm glad to inform you that, I'm hired by Swarup Rao as a Full-time Video Editor at High Income Tribe. Offer letter just came in. I'm going to be moving to Bangalore and be there by Next Sunday. Grateful for all the opportunities and offers you helped me with. Because of which I was able to choose the best. A big big thanks to you, mentors & especially all fellow community members from the cohort who helped in everything to be the best version of myself. Grateful for Everything ✨🙌`,
    name: "Sumit - Cohort 2",
  },
  {
    quote: `This cohort was the YouTube industry break-in for me, it not only turned me into a professional editor but also taught me how content industry actually works. Before this cohort I struggled with editing as the tutorials on YouTube were unstructured and the Return On Investment I got from this cohort is at least 100x. Now I am not only good at editing, but also got to know how to curate a good video, hook the audience better, mimic editing style of top YouTubers. Now I understand the power of visual storytelling which was taught by best-in-industry mentors like Ocus, Martin, Varun, Kuntoor.`,
    name: "Harshith Burjurkar - Cohort 2",
  },
];

export default function TestimonialSection() {
  return (
    <div className="py-16 flex-grow mt-40 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-center text-white mb-8">
      READ SOME MORE STORIES
      </h1>
      <TestimonialCard testimonials={testimonials} columns={3} spacing="lg" />
    </div>
  );
}

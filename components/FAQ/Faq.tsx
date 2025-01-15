"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { API } from "@/config/apiCofig";

// Define the structure for the FAQ item from the API
interface FAQAPIItem {
  Question: string;
  Answer: string;
}

// Define the structure for the FAQ item in your state
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch(API.FAQS);
        if (!response.ok) throw new Error("Failed to fetch FAQs");
        const data = await response.json();
        console.log("API Response:", data);

        // Type the item as FAQAPIItem here
        const formattedFAQs = data.data?.map((item: FAQAPIItem, idx: number) => ({
          id: idx,
          question: item.Question || "No question available",
          answer: item.Answer || "No answer available",
        })) || [];

        setFaqs(formattedFAQs);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFAQs();
  }, []);

  return (
    <div className="theme-zinc w-full" style={{ "--radius": "0.5rem" } as React.CSSProperties}>
      <div className="preview flex min-h-[350px] w-full justify-center items-center p-2 sm:p-10">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 md:px-8 md:py-40">
          <h2 className="text-4xl font-bold tracking-tight text-white text-center md:text-left md:text-6xl">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="cursor-pointer py-4"
                onClick={() => toggleAccordion(index)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start">
                  <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`absolute inset-0 h-6 w-6 transform transition-transform duration-200 ${
                        openIndex === index ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      {openIndex === index ? (
                        <path d="M6 18L18 6M6 6L18 18" />
                      ) : (
                        <path d="M12 5L12 19M5 12L19 12" />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                </div>
                {openIndex === index && (
                  <motion.div
                    className="overflow-hidden text-white mt-2"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

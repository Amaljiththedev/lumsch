import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the duration of the video editing cohort?',
      answer: 'The video editing cohort lasts for 12 weeks, with weekly lessons and assignments.',
    },
    {
      question: 'Do I need any prior experience in video editing?',
      answer: 'No prior experience is necessary! The cohort is designed for beginners and intermediate learners.',
    },
    {
      question: 'Which software will I learn during the cohort?',
      answer: 'You will learn how to use industry-standard software like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve.',
    },
    {
      question: 'Is there a certificate upon completion?',
      answer: 'Yes, you will receive a certificate of completion after successfully finishing the cohort and its projects.',
    },
    {
      question: 'What if I miss a class?',
      answer: 'All classes are recorded, and you will have access to the recordings to catch up on any missed lessons.',
    },
    {
      question: 'Can I get one-on-one feedback on my work?',
      answer: 'Yes, there will be opportunities for personalized feedback during weekly office hours with the instructor.',
    },
  ];

  return (
    <div className="theme-zinc w-full" style={{ '--radius': '0.5rem' } as React.CSSProperties}>
      <div className="preview flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 md:px-8 md:py-40">
          <h2 className="text-center text-4xl font-bold tracking-tight text-white md:text-left md:text-6xl">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
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
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3B82F6" // Light blue color for active state
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`absolute inset-0 h-6 w-6 transform transition-all duration-200 ${openIndex === index ? 'rotate-45 scale-100' : 'rotate-0 scale-100'}`}
                    >
                      {openIndex === index ? (
                        <path d="M6 18L18 6M6 6L18 18" /> // Cross (minus) when open
                      ) : (
                        <path d="M12 5L12 19M5 12L19 12" /> // Plus sign when closed
                      )}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                {openIndex === index && (
                  <motion.div
                    className="overflow-hidden text-white"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
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

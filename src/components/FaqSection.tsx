'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const faqData = [
  {
    question: "What does Conatus Bharat offer?",
    answer: "Conatus Bharat develops innovative educational tools that empower students to discover their potential, cultivate essential skills, and explore diverse career paths.",
  },
  {
    question: "How is Conatus Bharat different from other ed-tech companies?",
    answer: "We take a holistic approach to education, going beyond traditional academics to nurture multiple intelligences, personal interests, and unique skills in each student.",
  },
  {
    question: "How does Conatus Bharat involve parents and teachers in the learning process?",
    answer: "We believe in collaboration! Our platform provides tools for parents and teachers to track progress, offer support, and work together to create the most effective learning environment for each child.",
  },
  {
    question: "What is Wonder?",
    answer: "Its is a platform developed by Contaus Bharat which is an adaptive learning assessment tool you can visit the website at iamwonder.in ",
  },
];

const FaqSection: React.FC = () => {
  useEffect(() => {
    gsap.utils.toArray('.faq-item').forEach((item: any) => {
      gsap.fromTo(item, { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.2,
        },
      });
    });
  }, []);

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">FAQ</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item  p-4 rounded-lg shadow-lg bg-neutral-900">
            <details>
              <summary className="font-semibold text-lg">{faq.question}</summary>
              <p className="mt-2 text-gray-200">{faq.answer}</p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;

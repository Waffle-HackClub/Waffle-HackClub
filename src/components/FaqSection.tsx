'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const faqData = [
  {
    question: "What does Waffle Hack Club offer?",
    answer: "Waffle Hack Club provides a supportive community and resources to help you excel in your field, whether it's coding, design, entrepreneurship, or any other area of interest.",
  },
  {
    question: "How is Waffle Hack Club different from other clubs?",
    answer: "We take a holistic approach to personal and professional development, offering workshops, mentorship, and collaborative projects that go beyond just coding to nurture diverse skills and interests.",
  },
  {
    question: "How does Waffle Hack Club involve members in the learning process?",
    answer: "We believe in hands-on learning and collaboration! Our club organizes regular workshops, hackathons, and project collaborations that engage members and provide practical experience.",
  },
  {
    question: "What kind of workshops does Waffle Hack Club provide?",
    answer: "Our workshops cover a wide range of topics, including coding, design, entrepreneurship, and personal development, ensuring members can develop skills in various fields.",
  },
  {
    question: "How can I join Waffle Hack Club?",
    answer: "You can join Waffle Hack Club by visiting our website and signing up for membership. We welcome individuals from all backgrounds and skill levels who are eager to learn and collaborate.",
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
      <h2 className="text-4xl font-bold text-center mb-8 text-amber-500">FAQ</h2>
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

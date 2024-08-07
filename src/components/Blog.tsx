'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import blogs from '@/data/blogs.json';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Blog() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card-item');

    cards.forEach((card) => {
      gsap.fromTo(card, { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      });
    });
  }, []);

  const limitedBlogs = blogs.slice(0, 2);

  return (
    <div className="container mx-auto py-12 md:px-0 max-w-7xl">
      <div className="text-center mb-0">
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500 h-20">
          Latest Blogs ✨
        </h1>
      </div>

      <div className="flex flex-col md:flex-row xl:p-6 justify-center w-full gap-8 gap-y-16">
        {limitedBlogs.map((blog) => (
          <CardContainer
            key={blog.id}
            className="inter-var w-full sm:w-auto card-item"
          >
            <CardBody className="bg-black-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] h-[500px] rounded-xl p-4 md:p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-white">
                {blog.title}
              </CardItem>

              <CardItem as="p" translateZ="60" className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300">
                {blog.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-3">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="h-36 sm:h-48 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>

              <div className="flex justify-center items-center mt-7">
                <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold">
                  <Link href={`/Blogs/posts/${blog.id}`}>See →</Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div className="flex items-center justify-center mt-8">
        <button className="px-4 py-2 rounded-xl relative bg-white dark:bg-white dark:text-black text-black text-l font-bold" type="button">
          <Link href="/Blogs">View More</Link>
        </button>
      </div>
    </div>
  );
}

export default Blog;

"use client";
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Inter as font } from "next/font/google";

const inter = font({ weight: "600", subsets: ["latin"] });

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
    const firstRef = useRef<HTMLParagraphElement>(null);
    const secondRef = useRef<HTMLParagraphElement>(null);
    const thirdRef = useRef<HTMLParagraphElement>(null);
    const fourthRef = useRef<HTMLParagraphElement>(null);
    const fifthRef = useRef<HTMLParagraphElement>(null);
    const circlesRef = useRef<HTMLDivElement>(null); // Ref for the circles container

    useEffect(() => {
        const textElements = [firstRef.current, secondRef.current, thirdRef.current, fourthRef.current, fifthRef.current];
        const circlesContainer = circlesRef.current;

        // GSAP animation for text elements
        textElements.forEach((element) => {
            if (element) {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 50%",
                        end: "top 30%",
                        scrub: 1,
                    }
                });

                timeline
                    .to(element, { opacity: 1, duration: 1 })
                    .to(element, { opacity: 0.2, duration: 1 });
            }
        });

        // GSAP animation for circles
        if (circlesContainer) {
            const circles = circlesContainer.querySelectorAll('.circle'); // Assuming circles have 'circle' class

            circles.forEach((circle) => {
                gsap.fromTo(circle,
                    { opacity: 0, scale: 0 },
                    {
                        opacity: 1,
                        scale: 1,
                        scrollTrigger: {
                            trigger: circlesContainer,
                            start: "top 80%", // Adjust this threshold as needed
                            end: "top 30%",
                            scrub: 1,
                        }
                    }
                );
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers on unmount
        };
    }, []);

    return (
        <div id='about' className={`${inter.className} relative flex flex-col gap-3 text-center w-full h-screen items-center justify-center`}>
            {/* Background circles */}
            <div ref={circlesRef} className="absolute inset-0  z-0">
                <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-red-500 animate-orbit circle"></div>
                <div className="absolute bottom-1/4 left-1/2 w-16 h-16 rounded-full bg-yellow-500 animate-orbit circle"></div>
                <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full border border-white/20 animate-orbit-slow circle"></div>
                {/* Additional circles */}
                <div className="absolute top-3/4 left-3/4 w-28 h-28 rounded-full bg-purple-500 animate-orbit-slow circle"></div>
                <div className="absolute top-1/5 right-1/4 w-36 h-36 rounded-full bg-pink-500 animate-orbit circle"></div>
            </div>

            {/* Text content */}
            <div className="relative z-10">
                <p ref={firstRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl'> We are not a coaching center</p>
                <p ref={secondRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl'> We are not about traditional careers</p>
                <p ref={thirdRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl'>
                    Conatus is a platform to help you 
                </p>
                <p ref={fourthRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl'>
                    reach your full potential,
                </p>
                <p ref={fifthRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl'> Conatus is your first believer</p>
            </div>
        </div>
    );
}

export default About;

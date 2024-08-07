'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const socials = [
  { id: 1, icon: FaInstagram, label: 'Instagram', link: 'https://www.instagram.com/Wafflebharat/' },
  { id: 2, icon: FaXTwitter, label: 'Twitter', link: 'https://x.com/WaffleBharat' },
  { id: 3, icon: FaLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/company/Wafflebharat' },
];

const Socials: React.FC = () => {
  useEffect(() => {
    // GSAP animation setup for social media icons with ScrollTrigger
    socials.forEach((social) => {
      const iconId = `social-icon-${social.id}`; // Unique ID for each social media icon
      gsap.fromTo(
        `#${iconId}`, // Select each icon by its unique ID
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: `#${iconId}`,
            start: 'top 80%', // Animation starts when the top of the icon is 80% in view
            end: 'bottom 60%', // Animation ends when the bottom of the icon is 60% in view
            scrub: true, // Smoothly updates the animation while scrolling
            toggleActions: 'play none none reverse', // Play animation when entering view, reverse when leaving
          },
        }
      );
    });
  }, []);

  return (
    <div id='socials' className="flex flex-col items-center pt-5 md:pt-5 pb-10">
      <h2 className="text-3xl md:text-3xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-black animate-pulse">
       Our Socials
      </h2>
      <div className="flex gap-6">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
              id={`social-icon-${social.id}`} // Use unique ID for each social media icon
            >
              <Icon className="text-white text-4xl transition-transform transform hover:scale-110" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;

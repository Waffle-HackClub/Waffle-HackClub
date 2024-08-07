'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MissionSection() {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-out-back', 
      once: true,     
    });
  }, []);

  return (
    <section className="text-white py-12 px-6 h-700 sm:px-12 lg:px-24 relative w-full overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Circle Animations - Rearranged and Enhanced */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-yellow-600 rounded-full animate-bounce" data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1500"></div>
        <div className="absolute top-3/4 right-1/3 w-12 h-12 bg-red-500 rounded-full animate-orbit" data-aos="fade-left" data-aos-delay="400" data-aos-easing="ease-in-out" data-aos-duration="1500"></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-500 rounded-full" data-aos="fade-up" data-aos-delay="600"></div> 

        {/* Line Animation */}
        <div className="absolute bottom-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-50" data-aos="zoom-out" data-aos-delay="800" data-aos-duration="3000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10"> 

        {/* Heading with Fade-In and Slide-Up Animation */}
        <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
            Our Mission
          </h2>
        </div>

        {/* Content Box with Zoom-In and Slide-In Animation */}
        <div className="bg-neutral-900 text-white p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
          <p className="mb-4">
            We empower every child to reach their full potential by fostering equitable, child-centered learning environments that inspire curiosity, nurture holistic growth, and prepare them to thrive. Through inclusive communities and innovative partnerships, we build a brighter future where all children are supported and celebrated.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
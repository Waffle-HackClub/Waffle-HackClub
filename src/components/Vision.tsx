'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function VisionSection() {

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
        {/* Dots Animation */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-500 rounded-full" data-aos="fade-right" data-aos-delay="400" data-aos-easing="linear" data-aos-duration="2000"></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-yellow-600 rounded-full" data-aos="fade-left" data-aos-delay="600" data-aos-easing="linear" data-aos-duration="2000"></div>
        <div className="absolute top-1/2 right-0 w-10 h-10 bg-red-500 rounded-full" data-aos="fade-left" data-aos-delay="800"></div>
        <div className="absolute top-0 right-0 w-6 h-6 bg-yellow-200 rounded-full" data-aos="fade-down-left" data-aos-delay="1000"></div>

        {/* Line Animation */}
        <div className="absolute top-32 -left-16 w-64 h-64 bg-gradient-to-br from-pink-500 to-red-500 rounded-full opacity-50" data-aos="zoom-out" data-aos-delay="800" data-aos-duration="3000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10"> 

        {/* Heading with Fade-In and Slide-Up Animation */}
        <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
            Our Vision
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl">
            A world where every child flourishes.
          </p>
        </div>

        {/* Content Box with Zoom-In and Slide-In Animation */}
        <div className="bg-neutral-900 text-white p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
          <p className="mb-4">
            We believe that all children, regardless of their circumstances, possess unique talents and boundless potential. We{`'`}re committed to creating an environment where every child receives the personalized support and equitable opportunities they need to discover their passions, develop their skills, and achieve their dreams.
          </p>
          <p className="mb-4">
            We champion equity-driven, child-centered approaches that nurture holistic development. By fostering inclusive communities and embracing continuous innovation, we empower children to become well-rounded individuals who are prepared to thrive in all aspects of life.
          </p>
          <p>
            We are dedicated to partnering with families and communities to build a future where every child is inspired, supported, and equipped to reach their full potential.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;

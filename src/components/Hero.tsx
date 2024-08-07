'use client';
import React from 'react';

const ExploreAssetsComponent: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden bg-transparent">

      {/* Space Background with Animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-24 h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-blue-500 animate-orbit"></div>
        <div className="absolute top-1/2 right-10 w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-red-500 animate-orbit animate-pulse"></div> 
        <div className="absolute bottom-40 left-1/4 w-16 h-16 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-yellow-500 animate-orbit"></div>
        <div className="absolute top-1/4 left-1/2 w-48 h-48 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full border border-white/20 animate-orbit-slow"></div>
        <div className="absolute top-1/5 right-1/4 w-36 h-36 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full bg-pink-500 animate-orbit animate-spin-slow"></div> 
        <div className="absolute bottom-1/4 left-10 w-50 h-50 md:w-20 md:h-20 lg:w-55 lg:h-55 rounded-full bg-white animate-bounce-subtle"></div>
      </div>

      {/* Content */}
      <div className="z-10 text-center flex flex-col items-center w-full space-y-8">
        {/* Text Section */}
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-5xl lg:text-6xl font-bold text-white animate-fade-in">Don't be a square, Batter-up</h1>
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-amber-600 bg-clip-text text-transparent animate-text-gradient py-10">Waffle</h1> 
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">Join Now</button> 
        </div>
      </div>
    </div>
  );
};

export default ExploreAssetsComponent;
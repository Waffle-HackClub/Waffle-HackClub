'use client';
import React from 'react';

const ExploreAssetsComponent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between p-6 relative overflow-hidden ">

      {/* Space Background with Animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-blue-500 animate-orbit opacity-40"></div>
        <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-red-500 animate-pulse opacity-80"></div> 
        <div className="absolute bottom-1/4 left-1/2 w-16 h-16 rounded-full bg-yellow-500 animate-orbit opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full border border-white/20 animate-orbit-slow"></div>
        <div className="absolute top-1/5 right-1/4 w-36 h-36 rounded-full bg-pink-500 animate-orbit opacity-70"></div> 
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-12 z-10">
        {/* Left Section */}
        <div className="flex flex-col items-left space-y-12 lg:mr-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 text-center lg:text-left animate-fade-in">Welcome to the future of Learning</h1>
          <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white animate-bounce-subtle opacity-90"></div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-right lg:items-start w-full lg:w-96 p-4 lg:p-8">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent mb-8 text-center lg:text-left animate-text-gradient h-20">Wonder</h1> 
          <div className="flex justify-center lg:justify-start">
            <button className="bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">Launching Soon</button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreAssetsComponent;

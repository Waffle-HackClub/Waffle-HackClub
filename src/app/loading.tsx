import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      <div className="text-6xl md:text-8xl lg:text-9xl mb-0 pb-0 text-center text-white">
        Waffle
      </div>
    </div>
  );
};

export default Loading;
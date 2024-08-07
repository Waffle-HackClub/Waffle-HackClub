import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-4 text-sm text-white w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full px-4">
        <p className="mb-2 md:mb-0 text-center md:text-left">
          Copyright © 2024 Waffle hackclub
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;

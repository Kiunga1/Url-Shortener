import React from 'react';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <div className="hero p-6 flex flex-col-reverse bg-white mb-20 gap-10 items-center 
    justify-center md:p-12 md:flex-row md: md:h-100vh md:mb-8 ">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-700 ">More than just shorter links</h1>
        <p className="text-lg mb-6 text-gray-400">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <Button label="Get Started" onClick={() => console.log("Get Started clicked")} className="mt-4 bg-cyan" />
      </div>

      <div >
        <img
          src="src\assets\images\illustration-working.svg" 
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;



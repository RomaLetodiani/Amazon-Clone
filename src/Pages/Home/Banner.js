import React from 'react';
import { Slideshow } from './Slideshow';

const Banner = () => {
  return (
    <div className="relative">
      <Slideshow />
      <div className="absolute w-full h-full top-0 bg-gradient-to-b from-transparent via-transparent to-[#E3E6E6]"></div>
    </div>
  );
};

export default Banner;

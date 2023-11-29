import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Typewriter from '../component/typeWriter'

const typeWriter = ["Projects", "Teams", "Innovations"];

export default function AnimationText() {
  return (
    <Fade triggerOnce direction="up" duration={3000}>
      <h2 className='font-bold text-white text-center'>
        <span className='block max-w-[896px] mx-auto px-4 text-[20px] 3.5xs:text-[24px] 3xs:text-[28px] 2xs:text-[30px] xs:text-[40px] sm:text-[48px] sm2:text-[56px] md:text-[60px] md2:text-[68px]'>
          Investing in <span className="text-animation">World-Class</span>
        </span>
        <span className='block max-w-[896px] mx-auto px-4 text-[20px] 3.5xs:text-[24px] 3xs:text-[28px] 2xs:text-[30px] xs:text-[40px] sm:text-[48px] sm2:text-[56px] md:text-[60px] md2:text-[68px]'>
          <Typewriter data={typeWriter} />
        </span>
      </h2>
    </Fade>
  );
}
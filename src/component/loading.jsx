import React from 'react';
import LogoImg from '../assets/img/full_logo_color_white.svg';

export default function Loading() {
  return (
    <div className='w-full h-screen justify-center items-center flex fixed z-50 top-0 left-0 bg-black'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <img src={LogoImg} alt='Logo' className='h-[90px] animate-pulse' />
      </div>
    </div>
  )
}

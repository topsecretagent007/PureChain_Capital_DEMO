import React from 'react'

import LogoImg from '../assets/img/full_logo_white.svg'

export default function Loading () {
  return (
    <div className='w-full h-screen justify-center items-center flex fixed z-50 top-0 left-0 bg-black/90'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <img src={LogoImg} alt='LogoImg' className='h-[90px]' />
        <div
          className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]'
          role='status'
        >
          <span className='text-white !absolute  !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
            Loading...
          </span>
        </div>
      </div>
    </div>
  )
}

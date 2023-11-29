import React from 'react'

import LogoImg from '../../assets/img/full_logo_color_white.svg'
import LogoImg_Sm from '../../assets/img/pcc_logo.png'

export default function Header () {
  return (
    <div className='w-full justify-center items-center fiexd absolute top-0 left-0 flex-row bg-[#0e1111] z-10'>
      <div className='w-full container justify-between items-center p-4 mx-auto flex flex-row'>
        <div className='w-full justify-start text-start'>
          <img
            src={LogoImg}
            alt='LogoImg'
            className='hidden md:flex flex-col justify-start text-start h-[90px]'
          />
          <img
            src={LogoImg_Sm}
            alt='LogoImg_Sm'
            className='flex md:hidden flex-col justify-start text-start h-[90px]'
          />
        </div>

        <div className='w-full'>
          <div className='w-full flex flex-row justify-end items-center gap-5 font-semibold text-[12px] 3.5xs:text-[14px] 3xs:text-[16px] xs:text-[16px]'>
            <div className='text-white hover:text-[#48cae4] focus:outline-none focus:text-white cursor-pointer'>
              About
            </div>
            <div className='text-white hover:text-[#48cae4] focus:outline-none focus:text-white cursor-pointer'>
              Portfolio
            </div>
            <div className='text-white hover:text-[#48cae4] focus:outline-none focus:text-white cursor-pointer'>
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

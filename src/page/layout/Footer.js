import React from 'react'

import { BsTwitterX, BsFillEnvelopeFill } from 'react-icons/bs'

export default function Footer () {
  return (
    <div className='w-full justify-center items-center fiexd flex-row bottom-0 left-0 bg-[#322f7f] py-10 border-t-[0.5px] border-t-blue-200'>
      <div className='container w-full flex flex-col justify-center gap-4'>
        <div className='w-full flex flex-row items-center justify-center gap-4'>
          <a
            href='https://twitter.com/purechaincap'
            className='text-blue-200 hover:text-gray-200'
            aria-label='Twitter'
          >
            <BsTwitterX style={{ fontSize: '28px' }} />
          </a>
          <a
            href='mailto:team@purechaincapital.com'
            className='text-blue-200 hover:text-gray-200'
            aria-label='Email'
          >
            <BsFillEnvelopeFill style={{ fontSize: '36px' }} />
          </a>
        </div>

        <div className='w-full flex flex-row items-center justify-center gap-3 text-[18px]'>
          <a
            href='/privacy-policy'
            className='text-blue-200 hover:text-gray-200 transition-colors duration-200 mx-2'
          >
            Privacy Policy
          </a>
          <span className='text-gray-400 mx-2'>|</span>
          <a
            href='/terms-of-use'
            className='text-blue-200 hover:text-gray-200 transition-colors duration-200 mx-2'
          >
            Terms of Use
          </a>
        </div>

        {/* <!-- Copyright and Contact Info --> */}
        <div className='text-gray-300 mt-4 mb-2'>
          © 2023 Purechain Capital. All rights reserved.
        </div>
      </div>
    </div>
  )
}

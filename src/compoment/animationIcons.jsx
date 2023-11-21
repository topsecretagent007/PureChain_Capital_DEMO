import React from 'react'

import TokenIcon1 from '../assets/tokenImage/ether.svg'
import TokenIcon2 from '../assets/tokenImage/monero.svg'
import TokenIcon3 from '../assets/tokenImage/solana.png'
import TokenIcon4 from '../assets/tokenImage/bitcoin.png'
import TokenIcon5 from '../assets/tokenImage/zero_gra.svg'

export default function AnimationToken () {
  return (
    <div className='relative px-3 flex-none justify-center w-full block'>
      <img
        className='z-[1] items-center justify-center flex object-cover w-full min-h-[400px] max-h-[500px] md:h-full'
        src={TokenIcon5}
        alt='TokenIcon5 pannel'
        // width={500}
        // height={500}
      />
      <div className='coin'>
        <img
          className='z-[3] top-24 right-0  3xs:right-5 2xs:right-8 md:right-20  object-cover absolute coin-img'
          src={TokenIcon1}
          alt='TokenIcon1 pannel'
          width={200}
          height={200}
          style={{ '--i': 1 }}
        />
        <img
          className='z-[3] top-0 right-10 3.5xs:right-16 3xs:right-24 2xs:right-28 md:right-48 object-cover absolute'
          src={TokenIcon2}
          alt='TokenIcon3 pannel'
          width={160}
          height={160}
          style={{ '--i': 2 }}
        />
        <img
          className='z-[3] top-32 right-36 3.5xs:right-40 3xs:right-52 2xs:right-56 md:right-72 object-cover absolute'
          src={TokenIcon3}
          alt='TokenIcon2 pannel'
          width={110}
          height={110}
          style={{ '--i': 3 }}
        />
        <img
          className='z-[3] top-60 right-14 3.5xs:right-20 3xs:right-28 2xs:right-32 md:right-48  object-cover absolute'
          src={TokenIcon4}
          alt='TokenIcon4 pannel'
          width={160}
          height={160}
          style={{ '--i': 4 }}
        />
      </div>
    </div>
  )
}

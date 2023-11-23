import React, { useState } from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { CgGlobeAlt } from 'react-icons/cg'
import Workedimg1 from '../assets/workedIcon/gunzilla.svg'
import Workedimg2 from '../assets/workedIcon/shrapnel.png'
import Flip from 'react-reveal/Flip'

export default function WorkedCard () {
  const workedData = [
    {
      icon: Workedimg2,
      text: 'The 1st moddable extraction shooter game, built by a unique team of BAFTA & Emmy Award-winning talent, using UE5 & blockchain',
      twitter: 'https://twitter.com/project',
      website: 'https://project.com'
    },
    {
      icon: Workedimg1,
      text: 'Developers of the highly anticipated cyberpunk battle royale',
      twitter: 'https://twitter.com/project',
      website: 'https://project.com'
    },
    {
      icon: Workedimg2,
      text: 'The 1st moddable extraction shooter game, built by a unique team of BAFTA & Emmy Award-winning talent, using UE5 & blockchain',
      twitter: 'https://twitter.com/project',
      website: 'https://project.com'
    },
    {
      icon: Workedimg1,
      text: 'Developers of the highly anticipated cyberpunk battle royale',
      twitter: 'https://twitter.com/project',
      website: 'https://project.com'
    }
  ]

  const [currentCard, setCurrentCard] = useState(-1)

  const activeCard = id => {
    if (id === currentCard) {
      setCurrentCard(-1)
    } else {
      setCurrentCard(id)
    }
  }

  return (
    <div className='w-full flex flex-wrap gap-8 justify-center'>
      {workedData.map((item, index) => {
        return (
          <div key={index}>
            {currentCard !== index ? (
              <Flip right>
                <div
                  onClick={() => activeCard(index)}
                  className='inline-block relative rounded-lg drop-shadow-white transition ease-in duration-200 cursor-pointer'
                >
                  <img
                    src={item.icon}
                    alt='Shrapnel Logo'
                    className='w-[256px] h-[190px]  pt-3 px-4 pb-10 my-auto rounded-lg bg-[#ffffff]'
                  />
                  <div className='flex flex-row fixed bottom-0 text-white w-full rounded-b-md p-2 border-t-[1px] border-gray-200 gap-3 bg-[#303030] justify-center items-center'>
                    <a
                      href={item.twitter}
                      className='text-[20px] text-[#383a96]'
                      aria-label='Twitter'
                    >
                      <BsTwitterX />
                    </a>
                    <a
                      href={item.website}
                      className='text-[28px] text-[#383a96]'
                      aria-label='Website'
                    >
                      <CgGlobeAlt />
                    </a>
                  </div>
                </div>
              </Flip>
            ) : (
              <div
                onClick={() => activeCard(index)}
                className='inline-block relative rounded-lg transition ease-in duration-200 drop-shadow-green cursor-pointer'
              >
                <Flip left>
                  <p className='text-[15px] text-white w-[256px] h-[190px] pt-3 px-4 pb-10 my-auto flex-col flex font-semibold justify-center items-center rounded-lg bg-[#303030]'>
                    {item.text}
                  </p>
                  <div className='flex flex-row fixed bottom-0 text-white w-full rounded-b-md p-2 border-t-[1px] border-gray-200 gap-3 bg-[#ffffff] justify-center items-center'>
                    <a
                      href={item.twitter}
                      className='text-[20px] text-[#383a96]'
                      aria-label='Twitter'
                    >
                      <BsTwitterX />
                    </a>
                    <a
                      href={item.website}
                      className='text-[28px] text-[#383a96]'
                      aria-label='Website'
                    >
                      <CgGlobeAlt />
                    </a>
                  </div>
                </Flip>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { CgGlobeAlt } from 'react-icons/cg'
import Workedimg1 from '../assets/workedIcon/gunzilla.svg'
import Workedimg2 from '../assets/workedIcon/shrapnel.png'
import Bounce from 'react-reveal/Bounce'
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
  return (
    <div className='w-full flex flex-wrap gap-8 justify-center'>
      {workedData.map((item, index) => {
        return (
          <div
            key={index}
            className='inline-block relative rounded-lg drop-shadow-white transition ease-in duration-200 hover:drop-shadow-green cursor-pointer group'
          >
            <Flip right>
              <img
                src={item.icon}
                alt='Shrapnel Logo'
                className='w-[256px] h-[190px] p-4 my-auto group-hover:hidden rounded-md bg-[#ffffff]'
              />
            </Flip>
            <Flip left>
              <div className='w-[256px] h-[190px] pt-3 px-4 pb-8  my-auto group-hover:flex flex-col hidden text-[16px] font-semibold items-center rounded-md bg-[#303030] justify-between'>
                <p className='text-[15px] text-white items-center h-[160px] flex'>
                  {item.text}
                </p>
                <div className='flex flex-row fixed bottom-0 text-white w-full rounded-b-lg p-2 border-t-[1px] border-gray-200 gap-3 bg-[#303030] justify-center items-center'>
                  <a
                    href={item.twitter}
                    className='text-[14px]'
                    aria-label='Twitter'
                  >
                    <BsTwitterX />
                  </a>
                  <a
                    href={item.website}
                    className='text-[20px]'
                    aria-label='Website'
                  >
                    <CgGlobeAlt />
                  </a>
                </div>
              </div>
            </Flip>
            <Bounce bottom cascade></Bounce>
          </div>
        )
      })}
    </div>
  )
}

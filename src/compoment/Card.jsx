import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { CgGlobeAlt } from 'react-icons/cg'
import Workedimg1 from '../assets/workedIcon/gunzilla.svg'
import Workedimg2 from '../assets/workedIcon/shrapnel.png'
import Bounce from 'react-reveal/Bounce'

export default function WorkedCard () {
  const workedData = [
    {
      icon: Workedimg2,
      twitter: 'https://twitter.com/project',
      website: 'https://project.com'
    },
    {
      icon: Workedimg1,
      twitter: 'https://twitter.com/project',
      website: 'https://project.com'
    },
    {
      icon: Workedimg2,
      twitter: 'https://twitter.com/project',
      website: 'https://project.com'
    },
    {
      icon: Workedimg1,
      twitter: 'https://twitter.com/project',
      website: 'https://project.com'
    }
  ]
  return (
    <div className='w-full flex flex-wrap gap-3 justify-center'>
      {workedData.map((item, index) => {
        return (
          <div
            key={index}
            className='bg-white p-4 inline-block relative rounded-lg shadow-lg transition ease-in duration-200 hover:shadow-2xl cursor-pointer'
          >
            <Bounce top cascade>
              <img
                src={item.icon}
                alt='Shrapnel Logo'
                className='max-w-[256px] h-[180px] pb-10 my-auto'
              />
            </Bounce>

            <Bounce bottom cascade>
              <div className='flex flex-row text-white absolute bottom-0 w-full rounded-b-lg left-0 p-3 border-t-2 border-gray-200 gap-3 bg-[#303030] justify-center items-center'>
                <a
                  href={item.twitter}
                  className='text-[20px]'
                  aria-label='Twitter'
                >
                  <BsTwitterX />
                </a>
                <a
                  href={item.website}
                  className='text-[28px]'
                  aria-label='Website'
                >
                  <CgGlobeAlt />
                </a>
              </div>
            </Bounce>
          </div>
        )
      })}
    </div>
  )
}

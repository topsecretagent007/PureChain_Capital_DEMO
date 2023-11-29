import React, { useEffect, useState } from 'react'

export default function Donate () {
  const [currentMusic, setCurrentMusic] = useState('')
  useEffect(() => {
    setCurrentMusic('')
  }, [])

  return (
    <div className='w-full h-full p-3 flex flex-col justify-center items-center'>
      <div className='w-full justify-center items-center flex flex-row text-white font-semibold text-[16px]'>
        Donate
      </div>
      <div className='w-full h-full justify-center items-center flex flex-row'>
        <div className='w-full h-[calc(100%-140px)] flex flex-col gap-1 items-center justify-center object-cover overflow-hidden'>
          <audio src={currentMusic} controls className='w-full max-w-sm' />
          <div className='w-full  justify-center gap-7 items-center flex flex-row text-white font-semibold text-[16px]'>
            <div
              onClick={() => console.log('Public')}
              className='cursor-pointer'
            >
              Public
            </div>
            <div
              onClick={() => console.log('Private')}
              className='cursor-pointer'
            >
              Private
            </div>
          </div>
        </div>
      </div>
      <div className='w-full justify-center items-center flex flex-row text-white font-semibold text-[16px] cursor-pointer mb-10'>
        Upload Music
      </div>
    </div>
  )
}

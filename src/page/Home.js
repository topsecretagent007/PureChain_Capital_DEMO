import React, { useEffect, useState, useRef } from 'react'
import Loading from '../component/loading'
import AnimationText from '../component/animationText'
import AnimationToken from '../component/animationIcons'
import WorkedCard from '../component/Card'
import Zoom from 'react-reveal/Zoom'
import LightSpeed from 'react-reveal/LightSpeed'
import Roll from 'react-reveal/Roll'
import { Fade } from 'react-awesome-reveal'
import Slide from 'react-reveal/Slide'
import animationLogo from '../assets/img/pcc_logo.png'
import cardImg1 from '../assets/cardImg/cardImg1.png'
import cardImg2 from '../assets/cardImg/cardImg2.png'
import cardImg3 from '../assets/cardImg/cardImg3.png'
import cardImg4 from '../assets/cardImg/cardImg4.png'
import cardImg5 from '../assets/cardImg/cardImg5.png'
import cardImg6 from '../assets/cardImg/cardImg6.png'

export default function Home () {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const timeoutId = setTimeout(() => {
      // Emit the signal or perform any action here
      setLoading(false)
    }, 1000)

    console.log(timeoutId)
  }, [])

  const elecRef = useRef(null)

  const array = new Array(36).fill(null)

  return (
    <div
      ref={elecRef}
      className='w-full justify-center items-center flex flex-row bg-[#0e1111] relative '
    >
      <div className='absolute perspective top-32 min-h-screen w-full'>
        {array.map((key, id) => {
          return (
            <div
              className='cube_anim duration-[16s] absolute h-[240px] w-[240px] top-4 -left-5 3.5xs:h-[300px] 3.5xs:w-[300px] 3.5xs:top-5 3.5xs:-left-5 3xs:h-[350px] 3xs:w-[350px] 3xs:top-6 2xs:h-[390px] 2xs:w-[390px] 2xs:top-7 2xs:-left-6 xs:h-[490px] xs:w-[490px] xs:top-8 sm:h-[600px] sm:w-[600px] sm:top-10 2sm:h-[680px] 2sm:w-[680px] 2sm:top-16 md:h-[730px] md:w-[730px] md2:h-[800px] md2:w-[800px] path mask'
              style={{ '--i': id }}
            />
          )
        })}
      </div>
      <div className='container w-full h-full flex flex-col justify-center items-center'>
        <div className='w-full h-full min-h-screen flex flex-col items-center justify-center gap-6'>
          <AnimationText />
          <Roll top cascade>
            <div className='w-full text-white font-semibold text-[14px] xs:text-[16px] md:text-[20px] max-w-[968px] mx-auto px-3'>
              Discover innovative and ground-breaking technology in the
              blockchain industry with Purechain Capital.
            </div>
          </Roll>
          <Zoom bottom>
            <a
              href='#about'
              className='button-gradient text-white font-bold py-3 px-6 rounded-full transition ease-in duration-200 cursor-pointer'
            >
              Learn More
            </a>
          </Zoom>
        </div>
        <div
          id='about'
          className='w-full h-full min-h-[calc(100vh-150px)] flex justify-center items-center duration-300'
        >
          <div className='w-full flex flex-col md:flex-row h-full justify-center md:justify-between items-center gap-10'>
            <div className='w-full md:w-1/2 h-full flex flex-col text-white gap-4 text-start px-3'>
              <div className='text-[32px] sm:text-[40px] md:text-[48px] font-bold'>
                About Us
              </div>
              <Fade triggerOnce>
                <p className='text-[16px] md:text-[20px] leading-relaxed'>
                  Purechain Capital is a venture capital firm dedicated to
                  advancing the blockchain industry through strategic
                  investments in innovation and technology. Our expertise lies
                  in nurturing startups and accelerating their growth in the
                  fast-paced world of blockchain.
                </p>
              </Fade>
              <Slide direction='up' triggerOnce>
                <a
                  href='#portfolio'
                  className='button-gradient text-white font-bold py-3 px-6 rounded-full transition duration-200 hover:shadow-md w-[190px] cursor-pointer'
                >
                  View Our Portfolio
                </a>
              </Slide>
            </div>
            <div className='flex flex-row items-center justify-center gap-5'>
              <AnimationToken />
            </div>
          </div>
        </div>
        <div className='w-full py-16 h-full text-white'>
          <div className='px-4'>
            <LightSpeed left>
              <h2 className='text-start font-bold mb-20 text-[20px] 3.5xs:text-[24px] 3xs:text-[28px] 2xs:text-[30px] xs:text-[32px] sm:text-[36px] sm2:text-[40px] md:text-[44px] md2:text-[48px]'>
                Why Choose Purechain Capital?
              </h2>
            </LightSpeed>
            <div className='flex flex-col items-center space-y-4 md:space-y-0 md:flex-row justify-around text-[16px] xs:text-[20px] md:text-[24px]'>
              <div className='text-center'>
                <div
                  className='stat text-2xl xs:text-4xl md:text-5xl font-bold'
                  data-target='7'
                >
                  7
                </div>
                <div className='text-xl'>Years in Crypto</div>
              </div>
              <div className='text-center'>
                <div
                  className='stat text-2xl xs:text-4xl md:text-5xl font-bold'
                  data-target='130'
                >
                  130
                </div>
                <div className='text-xl'>Nodes Running</div>
              </div>
              <div className='text-center'>
                <div
                  className='stat text-2xl xs:text-4xl md:text-5xl font-bold'
                  data-target='10'
                >
                  10
                </div>
                <div className='text-xl'>Investments</div>
              </div>
            </div>
          </div>
        </div>

        <section id='key-features' className='py-16 text-white'>
          <div className='container mx-auto px-4 mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* <!-- Feature Item 1 --> */}
              <Zoom top>
                <div
                  className='flex items-start bg-[#1f2430] text-white rounded-lg transition ease-in duration-200 hover:shadow-2xl aos-init aos-animate h-[170px] border border-[#8b8f9b] shadow-md dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 max-w-sm cursor-pointer hover:text-[#1f2430]'
                  data-aos='fade-right'
                  data-aos-duration='1000'
                >
                  <img
                    src={cardImg1}
                    alt='cardImg1'
                    className='w-1/3 h-full rounded-l-lg object-cover'
                  />
                  <div className='p-3 text-start'>
                    <h3 className='text-xl font-semibold mb-3'>
                      Proven Expertise
                    </h3>
                    <p className='text-[14px] text-[#8b8f9b] font-semibold'>
                      Our decade-long leadership in blockchain shapes the
                      industry. We bring a wealth of expertise that sets us
                      apart..
                    </p>
                  </div>
                </div>
                {/* <!-- Feature Item 2 --> */}
                <div
                  className='flex items-start bg-[#1f2430] text-white rounded-lg transition ease-in duration-200 hover:shadow-2xl aos-init aos-animate h-[170px] border border-[#8b8f9b] shadow-md dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 max-w-sm cursor-pointer hover:text-[#1f2430]'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <img
                    src={cardImg2}
                    alt='cardImg2'
                    className='w-1/3 h-full rounded-l-lg object-cover'
                  />
                  <div className='p-3 text-start'>
                    <h3 className='text-xl font-semibold mb-3'>
                      Strategic Investments
                    </h3>
                    <p className='text-[14px] text-[#5b606b] font-semibold'>
                      Beyond capital, we offer deep industry connections and
                      insights, crafting strategies for project success.
                    </p>
                  </div>
                </div>
                {/* <!-- Feature Item 3 --> */}
                <div
                  className='flex items-start bg-[#1f2430] text-white rounded-lg transition ease-in duration-200 hover:shadow-2xl aos-init aos-animate h-[170px] border border-[#8b8f9b] shadow-md dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 max-w-sm cursor-pointer hover:text-[#1f2430]'
                  data-aos='fade-left'
                  data-aos-duration='1000'
                >
                  <img
                    src={cardImg3}
                    alt='cardImg3'
                    className='w-1/3 h-full rounded-l-lg object-cover'
                  />
                  <div className='p-3 text-start'>
                    <h3 className='text-xl font-semibold mb-3'>
                      Global Influence
                    </h3>
                    <p className='text-[14px] text-[#5b606b] font-semibold'>
                      Our reach spans the blockchain spectrum, influencing
                      sectors from DeFi to NFTs on a global scale.
                    </p>
                  </div>
                </div>
              </Zoom>
              {/* <!-- Feature Item 4 --> */}
              <Zoom bottom>
                <div
                  className='flex items-start bg-[#1f2430] text-white rounded-lg transition ease-in duration-200 hover:shadow-2xl aos-init aos-animate h-[170px] border border-[#8b8f9b] shadow-md dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 max-w-sm cursor-pointer hover:text-[#1f2430]'
                  data-aos='fade-up-right'
                  data-aos-duration='1500'
                >
                  <img
                    src={cardImg4}
                    alt='cardImg4'
                    className='w-1/3 h-full rounded-l-lg object-cover'
                  />
                  <div className='p-3 text-start'>
                    <h3 className='text-xl font-semibold mb-3'>
                      Success Stories
                    </h3>
                    <p className='text-[14px] text-[#5b606b] font-semibold'>
                      Our portfolio highlights growth and successful ventures,
                      reflecting our commitment to transformative blockchain
                      projects.
                    </p>
                  </div>
                </div>
                {/* <!-- Feature Item 5 --> */}
                <div
                  className='flex items-start bg-[#1f2430] text-white rounded-lg transition ease-in duration-200 hover:shadow-2xl aos-init aos-animate h-[170px] border border-[#8b8f9b] shadow-md dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 max-w-sm cursor-pointer hover:text-[#1f2430]'
                  data-aos='fade-up'
                  data-aos-duration='1500'
                >
                  <img
                    src={cardImg5}
                    alt='cardImg5'
                    className='w-1/3 h-full rounded-l-lg object-cover'
                  />
                  <div className='p-3 text-start'>
                    <h3 className='text-xl font-semibold mb-3'>
                      Future Vision
                    </h3>
                    <p className='text-[14px] text-[#5b606b] font-semibold'>
                      Focused on blockchain's horizon, we champion projects
                      pioneering the future of decentralized technology.
                    </p>
                  </div>
                </div>
                {/* <!-- Feature Item 6 --> */}
                <div
                  className='flex items-start bg-[#1f2430] text-white rounded-lg transition ease-in duration-200 hover:shadow-2xl aos-init aos-animate h-[170px] border border-[#8b8f9b] shadow-md dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 max-w-sm cursor-pointer hover:text-[#1f2430]'
                  data-aos='fade-up-left'
                  data-aos-duration='1500'
                >
                  <img
                    src={cardImg6}
                    alt='cardImg6'
                    className='w-1/3 h-full rounded-l-lg object-cover'
                  />
                  <div className='p-3 text-start'>
                    <h3 className='text-xl font-semibold mb-3'>
                      Innovation Drivers
                    </h3>
                    <p className='text-[14px] text-[#5b606b] font-semibold'>
                      As pioneers, we back projects pushing technological
                      boundaries, steering the blockchain toward a decentralized
                      future.
                    </p>
                  </div>
                </div>
              </Zoom>
              {/* <!-- Additional feature items as needed --> */}
            </div>
          </div>
        </section>

        <div className='w-full flex flex-col justify-center items-center py-20'>
          <div className='w-full h-full flex flex-row text-white font-bold text-4xl text-start px-3 text-[20px] 3.5xs:text-[24px] 3xs:text-[28px] 2xs:text-[30px] xs:text-[32px] sm:text-[36px] sm2:text-[40px] md:text-[44px] md2:text-[48px]'>
            <div className='w-full md:w-3/4 flex flex-col justify-start text-start'>
              <LightSpeed left cascade>
                <div className='mb-6'>Some of The Great Projects</div>
              </LightSpeed>
              <LightSpeed left cascade>
                <div className='mb-20'>We've Worked With...</div>
              </LightSpeed>
            </div>
            <div className='hidden md:w-1/4 md:flex flex-row justify-center items-center logo-coin'>
              <img
                className='z-[3] top-32 -mt-24 right-0  3xs:right-5 2xs:right-8 md:right-20  object-cover'
                src={animationLogo}
                alt='TokenIcon1 pannel'
                style={{ '--i': 1 }}
              />
            </div>
          </div>

          <WorkedCard />
          <Zoom bottom>
            <div className='button-gradient text-white font-bold py-3 px-6 mt-10 rounded-full transition ease-in duration-200 hover-effect cursor-pointer'>
              Learn More
            </div>
          </Zoom>
        </div>
      </div>
      {loading && <Loading />}
    </div>
  )
}

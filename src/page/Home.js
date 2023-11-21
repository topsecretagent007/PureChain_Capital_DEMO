import React, { useEffect, useState } from 'react'
import Loading from '../compoment/loading'
import AnimationText from '../compoment/animationText'
import AnimationToken from '../compoment/animationIcons'
import WorkedCard from '../compoment/Card'
import Zoom from 'react-reveal/Zoom'
import LightSpeed from 'react-reveal/LightSpeed'
import Roll from 'react-reveal/Roll'
import Bounce from 'react-reveal/Bounce'
import Slide from 'react-reveal/Slide'
import animationLogo from '../assets/img/pcc_logo.png'

export default function Home () {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const timeoutId = setTimeout(() => {
      // Emit the signal or perform any action here
      setLoading(false)
    }, 2000)

    console.log(timeoutId)
  }, [])

  return (
    <div className='w-full justify-center items-center flex flex-row bg-gradient-to-r from-blue-500 to-indigo-700'>
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
              className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition ease-in duration-200 hover-effect cursor-pointer'
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
              <LightSpeed left cascade>
                <div className='text-[20px] 3.5xs:text-[24px] 3xs:text-[28px] 2xs:text-[30px] xs:text-[32px] sm:text-[36px] sm2:text-[40px] md:text-[44px] md2:text-[48px] font-bold'>
                  About Us
                </div>
              </LightSpeed>
              <Bounce>
                <div className='w-full h-full text-[14px] xs:text-[16px] md:text-[24px] break-words'>
                  Purechain Capital is a venture capital firm dedicated to
                  advancing the blockchain industry through strategic
                  investments in innovation and technology. Our expertise lies
                  in nurturing startups and accelerating their growth in the
                  fast-paced world of blockchain.
                </div>
              </Bounce>
              <Slide bottom>
                <div className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition duration-200 w-[190px] cursor-pointer'>
                  View Our Portfolio
                </div>
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
              <Roll left>
                <div className='text-center'>
                  <div
                    className='stat text-2xl xs:text-4xl md:text-5xl font-bold'
                    data-target='7'
                  >
                    7
                  </div>
                  <div className='text-xl'>Years in Crypto</div>
                </div>
              </Roll>
              <Roll top>
                <div className='text-center'>
                  <div
                    className='stat text-2xl xs:text-4xl md:text-5xl font-bold'
                    data-target='130'
                  >
                    130
                  </div>
                  <div className='text-xl'>Nodes Running</div>
                </div>
              </Roll>
              <Roll right>
                <div className='text-center'>
                  <div
                    className='stat text-2xl xs:text-4xl md:text-5xl font-bold'
                    data-target='10'
                  >
                    10
                  </div>
                  <div className='text-xl'>Investments</div>
                </div>
              </Roll>
            </div>
          </div>
        </div>

        <section id='key-features' className='py-16 text-white'>
          <div className='container mx-auto px-4 mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* <!-- Feature Item 1 --> */}
              <Zoom top>
                <div
                  className='flex items-start bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg transition ease-in duration-200 hover:shadow-2xl aos-init aos-animate'
                  data-aos='fade-right'
                  data-aos-duration='1000'
                >
                  <div>
                    <h3 className='text-2xl font-semibold mb-3'>
                      Proven Expertise
                    </h3>
                    <p>
                      Our decade-long leadership in blockchain shapes the
                      industry. We bring a wealth of expertise that sets us
                      apart..
                    </p>
                  </div>
                </div>
              </Zoom>
              {/* <!-- Feature Item 2 --> */}
              <Zoom top>
                <div
                  className='flex items-start bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-6 rounded-lg shadow-lg transition ease-in duration-200 hover:shadow-2xl aos-init aos-animate'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <h3 className='text-2xl font-semibold mb-3'>
                      Strategic Investments
                    </h3>
                    <p>
                      Beyond capital, we offer deep industry connections and
                      insights, crafting strategies for project success.
                    </p>
                  </div>
                </div>
              </Zoom>
              {/* <!-- Feature Item 3 --> */}
              <Zoom top>
                <div
                  className='flex items-start bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg transition ease-in duration-200 hover:shadow-2xl aos-init aos-animate'
                  data-aos='fade-left'
                  data-aos-duration='1000'
                >
                  <div>
                    <h3 className='text-2xl font-semibold mb-3'>
                      Global Influence
                    </h3>
                    <p>
                      Our reach spans the blockchain spectrum, influencing
                      sectors from DeFi to NFTs on a global scale.
                    </p>
                  </div>
                </div>
              </Zoom>
              {/* <!-- Feature Item 4 --> */}
              <Zoom bottom>
                <div
                  className='flex items-start bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg transition ease-in duration-200 hover:shadow-2xl aos-init aos-animate'
                  data-aos='fade-up-right'
                  data-aos-duration='1500'
                >
                  <div>
                    <h3 className='text-2xl font-semibold mb-3'>
                      Success Stories
                    </h3>
                    <p>
                      Our portfolio highlights growth and successful ventures,
                      reflecting our commitment to transformative blockchain
                      projects.
                    </p>
                  </div>
                </div>
              </Zoom>
              {/* <!-- Feature Item 5 --> */}
              <Zoom bottom>
                <div
                  className='flex items-start bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-6 rounded-lg shadow-lg transition ease-in duration-200 hover:shadow-2xl aos-init aos-animate'
                  data-aos='fade-up'
                  data-aos-duration='1500'
                >
                  <div>
                    <h3 className='text-2xl font-semibold mb-3'>
                      Future Vision
                    </h3>
                    <p>
                      Focused on blockchain's horizon, we champion projects
                      pioneering the future of decentralized technology.
                    </p>
                  </div>
                </div>
              </Zoom>
              {/* <!-- Feature Item 6 --> */}
              <Zoom bottom>
                <div
                  className='flex items-start bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg transition ease-in duration-200 hover:shadow-2xl aos-init aos-animate'
                  data-aos='fade-up-left'
                  data-aos-duration='1500'
                >
                  <div>
                    <h3 className='text-2xl font-semibold mb-3'>
                      Innovation Drivers
                    </h3>
                    <p>
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
            <div className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 mt-10 rounded-full transition ease-in duration-200 hover-effect cursor-pointer'>
              Learn More
            </div>
          </Zoom>
        </div>
      </div>
      {loading && <Loading />}
    </div>
  )
}

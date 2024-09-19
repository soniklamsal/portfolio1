import React from 'react';
import heroImg from '../../assets/images/heroImg.png';
import CountUp from 'react-countup';
import TypingEffect from 'react-typing-effect';

export default function Hero() {
  return (
    <section className='pt-0 h-full' id='about'>
      <div className="container pt-14">
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          {/* Left content */}
          <div className="w-full md:basis-1/2">
            <h5 
              data-aos='fade-right' 
              data-aos-duration='1500' 
              className='text-headingColor font-[600] text-[16px]'
            >
              Hello, welcome
            </h5>

            <h1
              data-aos='fade-right'
              data-aos-duration='1500'
              className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
            >
              I'm Sonik Lamsal <br />
              <TypingEffect
                text={['Software Developer', 'Web Developer', 'React Enthusiast']}
                speed={100}
                eraseDelay={2000}
                cursorRenderer={(cursor) => <h1>{cursor}</h1>}
              />
            </h1>

            <div 
              data-aos='fade-right' 
              data-aos-duration='1800' 
              data-aos-delay='200' 
              className='flex items-center gap-6 mt-7'
            >
              <a href="mailto:your-email@example.com">
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 w-full rounded-[8px]'>
                  <i className="ri-mail-line"></i>Hire me
                </button>
              </a>
              <a 
                href="#portfolio" 
                className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'
              >
                See Portfolio
              </a>
            </div>

            {/* Updated paragraph for better flow */}
            <p 
              data-aos='fade-left' 
              data-aos-duration='1500' 
              className='flex mt-14 text-headingColor font-[500] text-[16px] leading-7 sm:pl-14 sm:pr-10'
            >
              <span><i className="ri-apps-line"></i></span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quis aspernatur molestiae in repellat sint. 
              Recusandae enim consequuntur cupiditate doloribus, saepe facilis, et fugit veniam. Possimus veritatis voluptatibus dolor non.
            </p>

            {/* Social Media Icons */}
            {/* <div className="flex items-center gap-6 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">Follow me:</span>
              <span>
                <a 
                  href="#youtube" 
                  className="text-smallTextColor text-[24px] font-[600] transition-transform duration-300 hover:text-red-500 hover:scale-110 hover:drop-shadow-lg"
                >
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a 
                  href="#whatsapp" 
                  className="text-smallTextColor text-[24px] font-[600] transition-transform duration-300 hover:text-green-500 hover:scale-110 hover:drop-shadow-lg"
                >
                  <i className="ri-whatsapp-line"></i>
                </a>
              </span>
              <span>
                <a 
                  href="#facebook" 
                  className="text-smallTextColor text-[24px] font-[600] transition-transform duration-300 hover:text-blue-600 hover:scale-110 hover:drop-shadow-lg"
                >
                  <i className="ri-facebook-circle-fill"></i>
                </a>
              </span>
              <span>
                <a 
                  href="#instagram" 
                  className="text-smallTextColor text-[24px] font-[600] transition-transform duration-300 hover:text-pink-500 hover:scale-110 hover:drop-shadow-lg"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div> */}
          </div>
          {/* Left content ends */}

          {/* Hero image */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className='flex items-center justify-center'>
              <img src={heroImg} alt="Hero" className="w-full h-auto object-cover rounded-2xl" />
            </figure>
          </div>
          {/* Hero image end */}

          {/* Hero content right */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={6} duration={2} suffix='+' />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">Years of experience</h4>
            </div>
            <div className="mb-10">
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={200} duration={2} suffix='+' />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">Projects completed</h4>
            </div>
            <div className="mb-10">
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={150} duration={2} suffix='+' />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">Happy clients</h4>
            </div>
          </div>
          {/* Hero content right end */}
        </div>
      </div>
    </section>
  );
}

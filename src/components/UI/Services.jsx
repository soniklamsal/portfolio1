import React from 'react';

export default function Services() {
  return (
    <section id="services">
      <div className="container lg:pl-5">
        {/* Heading section */}
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            What do I help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores illo cum rerum excepturi eos natus itaque distinctio ullam sit earum ducimus veritatis dolore, provident ex nemo fugiat tempora error sapiente nam quasi quam, alias quibusdam officia perferendis! Ad, dignissimos?
          </p>
        </div>

        {/* Services section */}
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm text-semibold">
              
              {/* Vertical line running through the middle */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

              {/* Left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  
                  {/* Card content */}
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="m-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil facere accusantium recusandae aspernatur, temporibus libero consequuntur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              {/* left card end */}
              
              {/* Right card start  */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  
                  {/* Card content */}
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="m-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay='50'
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil facere accusantium recusandae aspernatur, temporibus libero consequuntur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              {/* Right card edn */}
              {/* Left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  
                  {/* Card content */}
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="m-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil facere accusantium recusandae aspernatur, temporibus libero consequuntur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              {/* left card end */}
              
              {/* Right card start  */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  
                  {/* Card content */}
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="m-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay='50'
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil facere accusantium recusandae aspernatur, temporibus libero consequuntur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              {/* Right card edn */}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

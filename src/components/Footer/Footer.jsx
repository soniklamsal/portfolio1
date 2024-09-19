import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
   <footer className='bg-[#12141e] pt-12'>
    {/* footer top */}
    <div className="container">
      <div className="sm:flex items-center justify-between md:gap-8">
        <div className='w-full sm:w-1/2'>
          <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
            Do you want to work with me?
          </h2>
          <a href="mailto:your-email@example.com">
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 w-full sm:w-auto rounded-[8px]'>
                  <i className="ri-mail-line"></i>Hire me
                </button>
              </a>
        </div>

         <div className="w-full sm:w-1/2">
          <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt id voluptate perferendis?</p>
          <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
            <span className='text-gray-300 font-[600] text-[15px] '>Follow me:</span>
            
            {/* Instagram */}
            <span className='w-[35px] h-[35px] bg-[#E4405F] p-1 rounded-[50px] cursor-pointer text-center hover:bg-[#ff4f7a] active:bg-[#c22949]'>
              <a href="#instagram" className='text-white font-[500] text-[18px] hover:text-gray-100 active:text-gray-300'>
               <i className="ri-instagram-line"></i>
              </a>
            </span>

            {/* Facebook */}
            <span className='w-[35px] h-[35px] bg-[#1877F2] p-1 rounded-[50px] cursor-pointer text-center hover:bg-[#3b92ff] active:bg-[#145db7]'>
              <a href="#facebook" className='text-white font-[500] text-[18px] hover:text-gray-100 active:text-gray-300'>
               <i className="ri-facebook-line"></i>
              </a>
            </span>

            {/* WhatsApp */}
            <span className='w-[35px] h-[35px] bg-[#25D366] p-1 rounded-[50px] cursor-pointer text-center hover:bg-[#3aea74] active:bg-[#1da954]'>
              <a href="#whatsapp" className='text-white font-[500] text-[18px] hover:text-gray-100 active:text-gray-300'>
               <i className="ri-whatsapp-line"></i>
              </a>
            </span>
          </div>
         </div>
      </div>
    </div>
    {/* footer top end */}
    
    {/* footer bottom */}
    <div className='bg-[#1b1e29] py-3 mt-14'>
        <div className="container">
          <div className="flex items-center sm:justify-between">
            <div className="hidden sm:block">
              <div className='flex items-center gap-[10px]'>
                  <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center'>S</span>
                  <div className='leading-[20px]'> {/* Adjusted leading value */}
                    <h2 className='text-gray-200 font-[500] text-[18px]'>Sonik</h2>
                    <p className='text-gray-400 text-[14px] font-[500]'>Personal</p>
                  </div>
              </div>
            </div>
            <div>
              <p className='text-gray-400 text-[14px] '>Copyright {year} developed by Sonik - All right reserved.</p>
            </div>
          </div>
        </div>
    </div>
    {/* footer bottom end */}
   </footer>
  )
}

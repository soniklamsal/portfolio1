import React, { useState, useRef } from 'react';

export default function Header() {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const panelRef = useRef(null);

  const handleMouseEnter = () => {
    // Clear existing timeout to prevent hiding the panel while hovering
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsPanelVisible(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide the panel after 3 seconds
    const id = setTimeout(() => {
      setIsPanelVisible(false);
    }, 3000);
    setTimeoutId(id);
  };

  const handleClick = () => {
    // Show the panel when the button is clicked
    setIsPanelVisible(true);
    // Clear any existing timeout to keep the panel visible
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return (
    <header className='w-full h-[80px] leading-[80px] flex items-center'>
      <div className='container'>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              S
            </span>
            <div className="leading-[20px]">
              <h2 className='text-xl text-smallTextColor font-[700]'>Sonik</h2>
              <p className='text-smallTextColor text-[18px] font-[500]'>Lamsal</p>
            </div>
          </div>
          {/* Logo end */}

          {/* Menu */}
          <div className="menu">
            <ul className='flex items-center gap-10'>
              <li><a className='text-smallTextColor font-[600]' href="#about">About</a></li>
              <li><a className='text-smallTextColor font-[600]' href="#services">Services</a></li>
              <li><a className='text-smallTextColor font-[600]' href="#portfolio">Portfolio</a></li>
              <li><a className='text-smallTextColor font-[600]' href="#contact">Contact</a></li>
            </ul>
          </div>
          {/* Menu end */}

          {/* Menu right */}
          <div className="relative flex items-center gap-4">
            <button 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-700'
            >
              <i className="ri-send-plane-line"></i> Let's Talk
            </button>

            {/* Toggle social icons panel */}
            <div 
              ref={panelRef}
              className={`absolute top-full right-0 mt-2 p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center gap-4 transition-opacity duration-1000 ${isPanelVisible ? 'opacity-100' : 'opacity-0'}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href="#youtube" 
                className="text-smallTextColor text-[24px] font-[600] transition-transform duration-300 hover:text-red-500 hover:scale-110 hover:drop-shadow-lg"
              >
                <i className="ri-youtube-line"></i>
              </a>
              <a 
                href="#whatsapp" 
                className="text-smallTextColor text-[24px] font-[600] transition-transform duration-300 hover:text-green-500 hover:scale-110 hover:drop-shadow-lg"
              >
                <i className="ri-whatsapp-line"></i>
              </a>
              <a 
                href="#facebook" 
                className="text-smallTextColor text-[24px] font-[600] transition-transform duration-300 hover:text-blue-600 hover:scale-110 hover:drop-shadow-lg"
              >
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a 
                href="#instagram" 
                className="text-smallTextColor text-[24px] font-[600] transition-transform duration-300 hover:text-pink-500 hover:scale-110 hover:drop-shadow-lg"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>
          {/* Menu right end */}
        </div>
      </div>
    </header>
  );
}

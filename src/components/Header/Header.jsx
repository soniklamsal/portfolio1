import React, { useState, useRef, useEffect } from 'react';

export default function Header() {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky_header');
    } else {
      headerRef.current.classList.remove('sticky_header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyHeaderFunc);

    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  }, []);

  const scrollToSection = e => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: 'smooth',
    });
  };

  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const panelRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsPanelVisible(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsPanelVisible(false);
    }, 800);
    setTimeoutId(id);
  };

  const handlePanelClick = () => {
    setIsPanelVisible(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return (
    <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              S
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Sonik</h2>
              <p className="text-smallTextColor text-[18px] font-[500]">Lamsal</p>
            </div>
          </div>
          {/* Logo end */}

          {/* Menu */}
          <div className={`menu hidden md:block`}>
            <ul className="flex items-center gap-10">
              <li>
                <a onClick={scrollToSection} className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a onClick={scrollToSection} className="text-smallTextColor font-[600]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a onClick={scrollToSection} className="text-smallTextColor font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a onClick={scrollToSection} className="text-smallTextColor font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Menu end */}

          {/* Social Panel */}
          <div className="relative flex items-center gap-4">
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handlePanelClick}
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-700"
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
        </div>
      </div>
    </header>
  );
}

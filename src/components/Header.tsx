import React, { useState, useEffect } from 'react';

// Custom smooth easing for premium feel
const smoothTransition = 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)';

const Header: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPillMode, setIsPillMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const triggerPoint = heroHeight * 0.2;
      
      setIsScrolled(scrollY > 10);
      setIsPillMode(scrollY > triggerPoint);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 ${isPillMode ? 'p-2' : 'p-4'}`}
      style={{ 
        transition: smoothTransition,
        willChange: 'padding'
      }}
    >
      <div 
        className={`mx-auto flex items-center justify-between text-white ${
          isPillMode 
            ? 'max-w-fit bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl' 
            : isScrolled 
              ? 'container bg-gray-900/80 backdrop-blur-md border-b border-gray-700' 
              : 'container bg-transparent'
        }`}
        style={{
          paddingLeft: isPillMode ? '24px' : '32px',
          paddingRight: isPillMode ? '24px' : '32px',
          paddingTop: isPillMode ? '12px' : '0px',
          paddingBottom: isPillMode ? '12px' : '0px',
          transition: smoothTransition,
          willChange: 'padding, max-width, background-color, border-radius'
        }}
      >
        <div 
          className="flex items-center" 
          style={{
            gap: isPillMode ? '4px' : '8px',
            marginRight: isPillMode ? '16px' : '32px',
            transition: smoothTransition
          }}
        >
          <img
            src="/assets/logo.png"
            alt="Scopy AI Logo"
            className="object-contain brightness-0 invert"
            style={{
              height: isPillMode ? '24px' : '32px',
              width: isPillMode ? '24px' : '32px',
              transition: smoothTransition
            }}
          />
          <span 
            className="font-semibold" 
            style={{
              fontSize: isPillMode ? '18px' : '20px',
              transition: smoothTransition
            }}
          >
            Scopy AI
          </span>
        </div>

        <div 
          className="flex-1 flex justify-center" 
          style={{
            paddingLeft: isPillMode ? '16px' : '32px',
            paddingRight: isPillMode ? '16px' : '32px',
            transition: smoothTransition
          }}
        >
          <nav 
            className="hidden items-center md:flex" 
            style={{
              gap: isPillMode ? '16px' : '32px',
              transition: smoothTransition
            }}
          >
            {['home', 'features', 'pricing' ,'testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className="relative py-2 cursor-pointer"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span 
                  className="capitalize text-base"
                  style={{ transition: 'color 150ms ease' }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                <div 
                  className={`absolute bottom-0 left-0 h-0.5 bg-white ${
                    hoveredItem === item ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                  style={{ transition: 'all 150ms ease' }}
                />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center relative">
          <div className="relative group">
            <div 
              className="bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:scale-105"
              style={{
                height: isPillMode ? '40px' : '48px',
                paddingLeft: isPillMode ? '16px' : '24px',
                paddingRight: isPillMode ? '16px' : '24px',
                marginLeft: '16px',
                transition: smoothTransition
              }}
            >
              <div 
                className="flex items-center" 
                style={{
                  gap: isPillMode ? '4px' : '8px',
                  transition: smoothTransition
                }}
              >
                <svg 
                  className="text-black"
                  style={{
                    width: isPillMode ? '12px' : '16px',
                    height: isPillMode ? '12px' : '16px',
                    transition: smoothTransition
                  }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M4 20L20 4M13 4h7v7" 
                  />
                </svg>
                <span 
                  className="text-black font-medium whitespace-nowrap"
                  style={{
                    fontSize: isPillMode ? '14px' : '16px',
                    transition: smoothTransition
                  }}
                >
                  Get Started
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
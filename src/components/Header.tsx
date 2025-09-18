import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPillMode, setIsPillMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const triggerPoint = heroHeight * 0.4;
      
      setIsScrolled(scrollY > 10);
      const progress = Math.min(scrollY / triggerPoint, 1);
      setScrollProgress(progress);
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

  const headerScale = 1 - (scrollProgress * 0.3);
  const headerOpacity = 0.8 + (scrollProgress * 0.2);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isPillMode ? 'p-2' : 'p-4'
    }`}>
      <div 
        className={`mx-auto flex items-center justify-between text-white transition-all duration-500 ease-out ${
          isPillMode 
            ? 'max-w-fit bg-gray-900 bg-opacity-90 backdrop-blur-md border border-gray-700 rounded-full px-6 py-3 shadow-2xl' 
            : isScrolled 
              ? 'container bg-gray-900 bg-opacity-80 backdrop-blur-md border-b border-gray-700' 
              : 'container bg-transparent'
        }`}
        style={{
          transform: isPillMode ? 'scale(1)' : `scale(${headerScale})`,
          opacity: headerOpacity,
        }}
      >
        <div className={`flex items-center transition-all duration-300 ${
          isPillMode ? 'space-x-1' : 'space-x-2'
        }`}>
          <img
            src="/assets/logo.png"
            alt="Scopy AI Logo"
            className={`object-contain brightness-0 invert transition-all duration-300 ${
              isPillMode ? 'h-6 w-6' : 'h-8 w-8'
            }`}
          />
          <span className={`font-semibold transition-all duration-300 ${
            isPillMode ? 'text-lg' : 'text-xl'
          }`}>
            Scopy AI
          </span>
        </div>

        <nav className={`hidden items-center md:flex transition-all duration-300 ${
          isPillMode ? 'space-x-4' : 'space-x-8'
        }`}>
          {['home', 'features', 'testimonials'].map((item) => (
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
              <span className={`capitalize hover:text-gray-300 transition-colors duration-300 ${
                isPillMode ? 'text-sm' : 'text-base'
              }`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-out ${
                  hoveredItem === item ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center relative">
          <div className="relative group">
            <div className={`bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:scale-105 ${
              isPillMode ? 'h-10 px-4' : 'h-12 px-6'
            }`}>
              <div className={`flex items-center transition-all duration-300 ${
                isPillMode ? 'space-x-1' : 'space-x-2'
              }`}>
                <svg 
                  className={`text-black transition-all duration-300 ${
                    isPillMode ? 'w-3 h-3' : 'w-4 h-4'
                  }`}
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
                <span className={`text-black font-medium whitespace-nowrap transition-all duration-300 ${
                  isPillMode ? 'text-sm' : 'text-lg'
                }`}>
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
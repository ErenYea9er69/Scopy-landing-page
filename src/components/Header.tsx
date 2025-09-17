import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900 bg-opacity-80 backdrop-blur-md border-b border-gray-700' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between text-white">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/assets/logo.png"
            alt="Scopy AI Logo"
            className="h-8 w-8 object-contain brightness-0 invert"
          />
          <span className="text-xl font-semibold">Scopy AI</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden items-center space-x-8 md:flex">
          {['features', 'howitworks', 'testimonials', 'resources'].map((item) => (
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
              <span className="capitalize hover:text-gray-300 transition-colors duration-300">
                {item === 'howitworks' ? 'How It Works' : item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              {/* Animated underline */}
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-out ${
                  hoveredItem === item ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Get Started Button */}
        <div className="flex items-center relative">
          <div className="relative group">
            <div className="h-12 bg-white rounded-full flex items-center justify-center px-6 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:scale-105">
              <span className="text-black text-lg font-medium whitespace-nowrap">
                <span className="text-black bg-transparent">↗</span> Get Started
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
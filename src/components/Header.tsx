import React, { useState } from 'react';

const Header: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4">
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
          {['features', 'solutions', 'pricing', 'resources', 'about'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative py-2"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="capitalize hover:text-gray-300 transition-colors duration-300">
                {item}
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
          <div 
            className="h-20 w-45 bg-white rounded-full flex items-center justify-center"
            style={{ width: '180px' }}
          >
            <span className="text-black text-lg font-medium whitespace-nowrap">
              ↗ Get Started Now
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
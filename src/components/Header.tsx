import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-white px-6 py-4 absolute top-0 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section - Left with margin */}
        <div className="flex items-center space-x-2 ml-4">
          <img 
            src="/assets/logo.png" 
            alt="Scopy AI Logo" 
            className="w-8 h-8 object-contain brightness-0 invert"
          />
          <span className="text-xl font-semibold text-white">Scopy AI</span>
        </div>

        {/* Navigation Menu - Right to Left order */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            About
          </a>
          <a 
            href="#resources" 
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            Resources
          </a>
          <a 
            href="#pricing" 
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            Pricing
          </a>
          <a 
            href="#solutions" 
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            Solutions
          </a>
          <a 
            href="#features" 
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            Features
          </a>
        </nav>

        {/* Get Started Button - Extreme right with margin */}
        <div className="flex items-center space-x-4 mr-4">
          <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full transition-colors duration-200 flex items-center space-x-2">
            <span>↗</span>
            <span>Get Started Now</span>
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
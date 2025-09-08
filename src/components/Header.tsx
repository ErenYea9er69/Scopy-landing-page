import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-white px-6 py-4 absolute top-0 w-full z-50">
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

        {/* Navigation Menu - Right to Left order: Features, Solutions, Pricing, Resources, About */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Features
          </a>
          <a 
            href="#solutions" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Solutions
          </a>
          <a 
            href="#pricing" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Pricing
          </a>
          <a 
            href="#resources" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            Resources
          </a>
          <a 
            href="#about" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            About
          </a>
        </nav>

        {/* Get Started Button - Extreme right with margin */}
        <div className="flex items-center space-x-4 mr-4">
          <button 
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 transition-colors duration-200 flex items-center justify-center font-medium border-0 cursor-pointer"
            style={{ 
              backgroundColor: '#ffffff', 
              color: '#000000',
              borderRadius: '9999px',
              minWidth: '180px'
            }}
          >
            <span className="mr-2">↗</span>
            <span>Get Started Now</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
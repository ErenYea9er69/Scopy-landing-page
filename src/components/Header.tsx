import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          <span className="text-xl font-semibold">Scopy AI</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Features
          </a>
          <a 
            href="#solutions" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Solutions
          </a>
          <a 
            href="#pricing" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Pricing
          </a>
          <a 
            href="#resources" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Resources
          </a>
          <a 
            href="#about" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            About
          </a>
        </nav>

        {/* Get Started Button */}
        <div className="flex items-center space-x-4">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors duration-200 flex items-center space-x-2">
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
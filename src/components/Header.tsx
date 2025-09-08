import React from 'react';

const Header: React.FC = () => {
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
          <a href="#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="#solutions" className="hover:text-gray-300">
            Solutions
          </a>
          <a href="#pricing" className="hover:text-gray-300">
            Pricing
          </a>
          <a href="#resources" className="hover:text-gray-300">
            Resources
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
        </nav>

        {/* Get Started Button */}
        <div className="flex items-center">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white !bg-white text-black !text-black px-6 py-3 font-medium shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white border-0" style={{backgroundColor: '#ffffff', color: '#000000'}}>
            <span>↗</span>
            <span>Get Started Now</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
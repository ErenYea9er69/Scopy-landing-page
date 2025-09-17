import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const words = ["Build", "Profitable", "Business", "Systems", "with", "AI"];
  
  return (
    <section className="flex min-h-screen items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12 py-12">
        {/* Text content on the left */}
        <div className="flex-1 text-white pr-0 lg:pr-16 pl-4 lg:pl-8 mb-12 lg:mb-0">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="inline-block mr-2"
                >
                  {word}{" "}
                </motion.span>
              ))}
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl mb-8"
            >
              Scopy AI helps entrepreneurs solve the three critical problems of business: what to sell, how to find buyers, and how to maximize revenue. Built on proven frameworks from the $100M Offers methodology.
            </motion.p>
            
            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Primary Pill Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative group"
              >
                <div className="h-14 bg-white rounded-full flex items-center justify-center px-8 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:scale-105 overflow-hidden relative">
                  <span className="text-black text-lg font-semibold whitespace-nowrap relative z-10">
                    <span className="text-black bg-transparent">↗</span> Get Started Free
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                </div>
              </motion.div>
              
              {/* Secondary Button with Play Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="relative group"
              >
                <div className="h-14 bg-transparent border-2 border-white rounded-full flex items-center justify-center px-8 cursor-pointer transition-all duration-300 hover:bg-white hover:scale-105 group">
                  <div className="flex items-center space-x-2">
                    <svg 
                      className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    <span className="text-white text-lg font-semibold whitespace-nowrap group-hover:text-black transition-colors duration-300">
                      Watch Demo
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Video on the right */}
        <div className="flex-1 flex justify-center items-center pr-0 lg:pr-8">
          <div className="w-full max-w-lg">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              style={{
                mixBlendMode: 'screen',
                filter: 'contrast(1.2) brightness(1.1)'
              }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/bg0.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
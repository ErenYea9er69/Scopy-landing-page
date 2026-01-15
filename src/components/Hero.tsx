import React from 'react';
import { motion } from 'framer-motion';
import FloatingLines from './FloatingLines';

const Hero: React.FC = () => {
  const words = ["Build", "Profitable", "Business", "Systems", "with", "AI"]; //Scopy Your AI Growth Team 

  return (
    <section id="home" className="relative flex min-h-screen items-center bg-black overflow-hidden">
      {/* Animated Floating Lines Background */}
      <FloatingLines
        linesGradient={['#ffffff', '#9ca3af', '#6b7280', '#4b5563', '#374151']}
        enabledWaves={['top', 'middle', 'bottom']}
        lineCount={[8, 6, 10]}
        lineDistance={[4, 5, 3]}
        animationSpeed={0.8}
        interactive={true}
        bendRadius={4.0}
        bendStrength={-0.4}
        mouseDamping={0.03}
        parallax={true}
        parallaxStrength={0.15}
        mixBlendMode="screen"
      />

      <div className="container relative z-10 mx-auto flex flex-col justify-center px-6 lg:px-12 py-20 min-h-screen pointer-events-none">
        {/* Text content */}
        <div className="w-full max-w-4xl text-white mb-12">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
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
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10"
          >
            Scopy AI helps entrepreneurs solve the three critical problems of business: what to sell, how to find buyers, and how to maximize revenue.
          </motion.p>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Primary Pill Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative group"
            >
              <div className="h-14 bg-white rounded-full flex items-center justify-center px-8 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:scale-105 overflow-hidden relative shadow-[0_0_20px_rgba(255,255,255,0.3)] pointer-events-auto">
                <div className="flex items-center space-x-2 relative z-10">
                  <svg
                    className="w-5 h-5 text-black"
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
                  <span className="text-black text-lg font-semibold whitespace-nowrap">
                    Get Started Free
                  </span>
                </div>
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
              <div className="h-14 bg-transparent border border-white/30 backdrop-blur-sm rounded-full flex items-center justify-center px-8 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-105 group pointer-events-auto">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  <span className="text-white text-lg font-semibold whitespace-nowrap group-hover:text-white transition-colors duration-300">
                    Watch Demo
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
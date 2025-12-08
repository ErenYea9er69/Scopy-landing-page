import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section 
      className="min-h-screen relative flex items-center justify-center bg-blend-overlay"
      style={{
        backgroundImage: 'url("/assets/bb.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.5)' 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          
          <div className="flex-1 text-left">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-tight"
            >
              step beyond the known.
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-2">
                join us to
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
                Build Profitable Business
              </p>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Start the Conversation
            </motion.button>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center lg:items-end mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center lg:text-right"
            >
              <div className="w-32 h-32 mb-6 mx-auto lg:mx-0 flex items-center justify-center">
                <img 
                  src="/assets/logo.png" 
                  alt="ScopyAI Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                ScopyAI
              </h2>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
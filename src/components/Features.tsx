
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Features: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const features = [
    {
      icon: '🎁',
      title: 'The Offer Architect',
      subtitle: 'Answer: "What should I sell?" Build irresistible offers.',
      bullets: [
        'Value Equation: Maximize dream outcomes, minimize effort.',
        'Grand Slam Offers: Step-by-step construction.',
        'Enhancements: Guarantees, pricing psychology, bonuses & scarcity.'
      ],
      cta: 'Design Your Offer'
    },
    {
      icon: '📣',
      title: 'Lead Generation Specialist',
      subtitle: 'Answer: "How do I find buyers?" Capture intent-driven leads.',
      bullets: [
        'Four Channels: Warm outreach, content, cold, paid ads.',
        'Lead Magnets: Create free resources for opt-ins.',
        'Deliverables: Audits, scripts, 90-day roadmaps.'
      ],
      cta: 'Generate Leads'
    },
    {
      icon: '💰',
      title: 'Money Model Architect',
      subtitle: 'Answer: "How to maximize revenue?" Build self-funding systems.',
      bullets: [
        'Four Offers: Attraction, upsell, downsell, continuity.',
        'Economics: CAC/CLV modeling for profitability.',
        'Blueprints: Journey maps, pricing, scaling roadmaps.'
      ],
      cta: 'Architect Revenue'
    }
  ];

  useEffect(() => {
    if (isAutoplay && !isHovered) {
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % features.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isAutoplay, isHovered, features.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
    setIsAutoplay(false);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoplay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
  };

  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-white text-center mb-16"
        >
          Solve Business Challenges with AI
        </motion.h2>

        <div
          className="relative w-full max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col lg:flex-row items-center bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-2xl border border-gray-700/50"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-6xl lg:text-8xl mb-6 lg:mb-0 lg:mr-12 flex-shrink-0"
              >
                {features[currentSlide].icon}
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-white">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-bold mb-2"
                >
                  {features[currentSlide].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-lg text-gray-300 mb-6"
                >
                  {features[currentSlide].subtitle}
                </motion.p>
                <ul className="space-y-2 mb-8">
                  {features[currentSlide].bullets.map((bullet, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                      className="flex items-start text-gray-200"
                    >
                      <span className="text-teal-400 mr-3 text-sm">•</span>
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                    {features[currentSlide].cta}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-700/50 hover:bg-gray-600 text-white p-2 rounded-full transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-700/50 hover:bg-gray-600 text-white p-2 rounded-full transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-teal-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

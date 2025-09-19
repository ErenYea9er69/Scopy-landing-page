// features.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Features: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const features = [
    {
      id: 'offer-architect',
      title: 'Offer Architect',
      description: 'Solve the question: "What should I sell?" by building offers so compelling people cant say no.',
      coreFunction: 'Design, evaluate, and improve your offers using a specific formula for value.',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 8L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      frameworks: [
        {
          title: 'The Value Equation',
          description: 'Value = (Dream Outcome × Likelihood of Success) ÷ (Time Delay × Effort and Sacrifice). Maximize the top part and minimize the bottom part.'
        },
        {
          title: 'Grand Slam Offer Construction',
          description: 'Step-by-step process to build your offer by identifying customer dream outcomes, listing problems, and creating solutions.'
        },
        {
          title: 'Offer Enhancement Tools',
          description: 'Includes guarantees, pricing psychology, bonuses, scarcity, urgency, and offer naming techniques.'
        }
      ]
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation Specialist',
      description: 'Answer: "How do I find buyers?" with strategies that capture real intent, not just attention.',
      coreFunction: 'Generate and capture leads from prospects who show real intent to buy.',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 16L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 8L12 8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      frameworks: [
        {
          title: 'The Four Core Channels',
          description: 'Warm outreach, free content marketing, cold outreach, and paid advertising strategies.'
        },
        {
          title: 'Lead Magnet Creation',
          description: 'Guides you in creating valuable free resources that solve specific problems for your ideal customer.'
        },
        {
          title: 'Actionable Deliverables',
          description: 'Complete audit, channel-specific action plans, outreach scripts, email templates, and a 90-day implementation roadmap.'
        }
      ]
    },
    {
      id: 'money-model',
      title: 'Money Model Architect',
      description: 'Answer: "How do I get them to buy?" by designing a complete model that maximizes customers and revenue.',
      coreFunction: 'Design a system where profit from one customer exceeds the cost of acquiring several new ones.',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 8L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 16L12 16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      frameworks: [
        {
          title: 'The Four Offer Types',
          description: 'Attraction, upsell, downsell, and continuity offers that work together as a complete sales system.'
        },
        {
          title: 'Economic Modeling',
          description: 'Calculate and track critical business metrics like CAC and CLV to ensure profitability.'
        },
        {
          title: 'Strategic Deliverables',
          description: 'Complete blueprint, customer journey map, pricing recommendations, and scaling roadmap.'
        }
      ]
    }
  ];

  // Handle auto-rotation
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % features.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, features.length]);

  // Handle manual navigation
  const goToFeature = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      id="features" 
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden min-h-screen"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Three Critical Business Problems.
            <br />
            One AI Solution.
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Scopy AI doesn't just give advice — it builds your entire business system with precision, logic, and emotional intelligence.
          </motion.p>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mb-12">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToFeature(index)}
              className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-500 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to ${features[index].title}`}
            />
          ))}
        </div>

        {/* Full-width feature content */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Logo and title at top left */}
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-xl shadow-lg mr-6">
                  <div className="text-white">
                    {features[currentIndex].icon}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {features[currentIndex].title}
                </h3>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                  {features[currentIndex].description}
                </p>
                
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700">
                  <h4 className="text-blue-400 font-semibold text-lg mb-3">Core Function</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {features[currentIndex].coreFunction}
                  </p>
                </div>
              </div>
              
              {/* Key Frameworks */}
              <div>
                <h4 className="text-2xl font-semibold text-white mb-6">Key Frameworks</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features[currentIndex].frameworks.map((framework, idx) => (
                    <motion.div 
                      key={idx} 
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <div className="flex items-start mb-3">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        </div>
                        <h5 className="font-semibold text-white text-lg">
                          {framework.title}
                        </h5>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {framework.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Auto-rotation indicator */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            {isHovered 
              ? "Hover to pause rotation" 
              : `Auto-rotating every 5 seconds...`}
          </p>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-lg">
            Stop guessing. Start building profitable systems with AI-guided clarity.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('pricing');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
          >
            <span>See How It Works</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
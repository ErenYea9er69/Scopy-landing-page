// src/components/Features.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the structure for a single feature's data
interface Feature {
  id: string;
  icon: string;
  tabName: string;
  title: string;
  description: string;
  keyPoints: string[];
  videoSrc: string;
}

// Array containing the data for all features for clean code and scalability
const featuresData: Feature[] = [
  {
    id: 'offer',
    icon: '🎁',
    tabName: 'Create Offers',
    title: 'The Offer Architect',
    description: 'Your specialist for creating irresistible products and services. This AI helps you construct offers so compelling, people feel they can\'t say no.',
    keyPoints: [
      'The Value Equation: Maximize dream outcomes while minimizing effort.',
      'Grand Slam Offer: A step-by-step process to build your core offer.',
      'Enhancement Tools: Use guarantees, pricing psychology, and scarcity.',
      'Offer Naming: Generate clear and desirable names for your products.',
    ],
    videoSrc: '/assets/bg0.mp4',
  },
  {
    id: 'leads',
    icon: '📣',
    tabName: 'Find Buyers',
    title: 'The Lead Generation Specialist',
    description: 'Your expert on finding customers. This AI provides actionable strategies to generate and capture leads who show real intent to buy.',
    keyPoints: [
      'The Four Core Channels: Master warm/cold outreach, content, and paid ads.',
      'Lead Magnet Creation: Build valuable free resources to capture contacts.',
      'Actionable Deliverables: Get outreach scripts, email templates, and roadmaps.',
      'System Audits: Receive a complete analysis of your current lead generation.',
    ],
    videoSrc: '/assets/bg0.mp4',
  },
  {
    id: 'money',
    icon: '💰',
    tabName: 'Maximize Revenue',
    title: 'The Money Model Architect',
    description: 'Your revenue system designer. This AI builds a complete model to maximize customer acquisition and lifetime value, making your growth self-funding.',
    keyPoints: [
      'The Four Offer Types: Design attraction, upsell, downsell, and continuity offers.',
      'Economic Modeling: Calculate and track CAC and CLV for profitability.',
      'Customer Journey Map: Visualize how customers move through your sales system.',
      'Scaling Roadmap: Get a clear plan to grow once your model is proven.',
    ],
    videoSrc: '/assets/bg0.mp4',
  },
];

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(featuresData[0].id);

  const activeFeature = featuresData.find((feature) => feature.id === activeTab);

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Your AI-Powered Business System
          </h2>
          <p className="text-lg lg:text-xl text-gray-300">
            Scopy AI provides a structured approach to solve the three most fundamental business challenges, turning complexity into a clear, actionable plan.
          </p>
        </div>

        {/* Tab Navigator */}
        <div className="flex justify-center border-b border-gray-700 mt-12">
          {featuresData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-3 sm:px-6 lg:px-8 text-sm sm:text-base font-medium transition-colors duration-300 focus:outline-none ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.tabName}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-white"
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Display Area */}
        <div className="mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature ? activeFeature.id : 'empty'}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {activeFeature && (
                <>
                  {/* Left Side: Textual Content */}
                  <div className="text-white">
                    <h3 className="text-2xl lg:text-4xl font-bold mb-4">
                      {activeFeature.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                      {activeFeature.description}
                    </p>
                    <ul className="space-y-4">
                      {activeFeature.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <span className="text-gray-200">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Side: Visual Content */}
                  <div className="flex justify-center items-center">
                    <div className="w-full max-w-md">
                      <video
                        className="w-full h-auto rounded-lg shadow-2xl"
                        style={{
                          mixBlendMode: 'screen',
                          filter: 'contrast(1.2) brightness(1.1)',
                          boxShadow: '0 0 40px 10px rgba(79, 70, 229, 0.4)', // A blue glow to match the orb
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={activeFeature.videoSrc}
                        key={activeFeature.videoSrc} // Important for React to re-render the video element on change
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Features;
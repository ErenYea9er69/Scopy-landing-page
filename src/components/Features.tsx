// features.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const features = [
    {
      id: 1,
      title: "The Offer Architect",
      emoji: "🎁",
      description: "Create compelling products and services that customers can't refuse",
      color: "from-blue-500 to-indigo-600",
      features: [
        "Value Equation: Maximize perceived value with our proprietary formula",
        "Grand Slam Offer Construction: Step-by-step offer building process",
        "Guarantees, Pricing Psychology & Scarcity: Advanced offer enhancement tools",
        "Offer Naming: Clear, desirable naming strategies"
      ]
    },
    {
      id: 2,
      title: "The Lead Generation Specialist",
      emoji: "📣",
      description: "Find and capture high-intent prospects who are ready to buy",
      color: "from-purple-500 to-pink-600",
      features: [
        "Four Core Channels: Warm outreach, content marketing, cold outreach, paid ads",
        "Lead Magnet Creation: High-converting free resources",
        "Actionable Deliverables: Outreach scripts, email templates, 90-day roadmap",
        "Intent-Based Lead Definition: Focus on prospects who take action"
      ]
    },
    {
      id: 3,
      title: "The Money Model Architect",
      emoji: "💰",
      description: "Build a revenue system that funds its own growth",
      color: "from-green-500 to-teal-600",
      features: [
        "Four Offer Types: Attraction, Upsell, Downsell, and Continuity offers",
        "Economic Modeling: CAC/CLV calculations for profitability",
        "Customer Journey Mapping: Complete purchase pathway blueprint",
        "Scaling Roadmap: Proven strategies for business expansion"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your AI Growth Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three specialized AI assistants to solve your business's fundamental challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 transition-all duration-300 hover:border-gray-500"
            >
              <div className={`bg-gradient-to-r ${feature.color} p-6`}>
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{feature.emoji}</span>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-100">{feature.description}</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => toggleCard(index)}
                  className="text-white font-medium flex items-center group"
                >
                  {expandedCard === index ? 'Show less' : 'Learn more'}
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${expandedCard === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </button>
                
                {expandedCard === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 pt-4 border-t border-gray-700"
                  >
                    <p className="text-gray-400 text-sm">
                      This AI assistant provides actionable frameworks and step-by-step guidance 
                      to help you build offers that convert. With our proven methodologies, 
                      you'll create products and services that customers actively seek out.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Each assistant works independently or together to create a complete business growth system. 
            Start with one and expand as your needs grow.
          </p>
          <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: "🎁",
      title: "The Offer Architect",
      subtitle: "What Should I Sell?",
      description: "Design irresistible offers using proven value equations and psychological frameworks.",
      mainBenefit: "Create offers so compelling people feel they can't say no",
      keyFeatures: [
        {
          name: "Value Equation Framework",
          detail: "Maximize dream outcomes while minimizing time delay and effort"
        },
        {
          name: "Grand Slam Offer Construction", 
          detail: "Step-by-step process to build customer-focused offers"
        },
        {
          name: "Risk-Free Guarantees",
          detail: "Craft money-back and results-based promises"
        },
        {
          name: "Pricing Psychology",
          detail: "Price based on value delivered, not just costs"
        }
      ],
      gradient: "from-purple-600 to-blue-600",
      hoverGradient: "from-purple-500 to-blue-500"
    },
    {
      id: 2,
      icon: "📣",
      title: "Lead Generation Specialist", 
      subtitle: "How Do I Find These People?",
      description: "Generate qualified leads through proven channels and systematic outreach strategies.",
      mainBenefit: "Find prospects who show real intent to buy, not just viewers",
      keyFeatures: [
        {
          name: "Four Core Channels",
          detail: "Warm outreach, content marketing, cold outreach, paid ads"
        },
        {
          name: "Lead Magnet Creation",
          detail: "Valuable free resources that capture contact information"
        },
        {
          name: "Outreach Scripts & Templates",
          detail: "Proven email templates and conversation starters"
        },
        {
          name: "90-Day Implementation Roadmap",
          detail: "Complete action plan with measurable milestones"
        }
      ],
      gradient: "from-green-600 to-teal-600",
      hoverGradient: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      icon: "💰",
      title: "Money Model Architect",
      subtitle: "How Do I Get Them to Buy?",
      description: "Build a complete revenue system that makes customer acquisition self-funding.",
      mainBenefit: "Profit from one customer pays for acquiring several new ones",
      keyFeatures: [
        {
          name: "Four Offer Types System",
          detail: "Attraction, upsell, downsell, and continuity offers working together"
        },
        {
          name: "Economic Modeling",
          detail: "Track CAC and CLV to ensure profitable growth"
        },
        {
          name: "Customer Journey Mapping", 
          detail: "Complete blueprint showing how customers move through offers"
        },
        {
          name: "Scaling Roadmap",
          detail: "Strategic plan for growth once your model is proven"
        }
      ],
      gradient: "from-orange-600 to-red-600", 
      hoverGradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 lg:px-12 text-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Three AI Specialists.{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              One Complete System.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Each AI specialist focuses on one critical business challenge, working together to build your complete growth system.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className={`
                relative h-full p-8 rounded-2xl border border-gray-700 
                backdrop-blur-sm transition-all duration-500 ease-out
                ${hoveredCard === feature.id ? 'border-gray-500 scale-105' : 'hover:border-gray-600'}
                bg-gradient-to-br ${hoveredCard === feature.id ? feature.hoverGradient : feature.gradient} 
                bg-opacity-10 hover:bg-opacity-15
              `}>
                
                {/* Floating Icon */}
                <div className="mb-6">
                  <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center text-3xl
                    bg-gradient-to-br ${feature.gradient} shadow-lg
                    transform transition-transform duration-300
                    ${hoveredCard === feature.id ? 'scale-110 rotate-3' : 'group-hover:scale-105'}
                  `}>
                    {feature.icon}
                  </div>
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className={`
                    text-sm font-medium uppercase tracking-wider mb-3
                    bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent
                  `}>
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Main Benefit Highlight */}
                <div className="mb-6 p-4 rounded-xl bg-black bg-opacity-30 border border-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className={`
                      w-2 h-2 rounded-full mt-2 flex-shrink-0
                      bg-gradient-to-r ${feature.gradient}
                    `}></div>
                    <p className="text-white font-medium text-sm leading-relaxed">
                      {feature.mainBenefit}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">Key Features:</h4>
                  {feature.keyFeatures.map((keyFeature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-start space-x-3 group/feature"
                    >
                      <div className={`
                        w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-all duration-300
                        bg-gradient-to-r ${feature.gradient}
                        ${hoveredCard === feature.id ? 'scale-125' : 'group-hover/feature:scale-110'}
                      `}></div>
                      <div className="min-w-0">
                        <p className="font-medium text-white text-sm mb-1">
                          {keyFeature.name}
                        </p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {keyFeature.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive CTA */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className={`
                    flex items-center justify-between p-3 rounded-xl cursor-pointer
                    transition-all duration-300 border border-transparent
                    ${hoveredCard === feature.id ? `border-gray-500 bg-gradient-to-r ${feature.gradient} bg-opacity-20` : 'hover:border-gray-600 hover:bg-gray-800 hover:bg-opacity-50'}
                  `}>
                    <span className="text-sm font-medium text-gray-200">
                      Explore {feature.title}
                    </span>
                    <svg 
                      className={`
                        w-4 h-4 text-gray-400 transition-all duration-300
                        ${hoveredCard === feature.id ? 'translate-x-1 text-white' : 'group-hover:translate-x-0.5'}
                      `}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2"
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                </div>

                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 rounded-2xl opacity-5 pointer-events-none">
                  <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-2xl`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-gray-600">
            <div className="text-2xl">🚀</div>
            <div className="text-left">
              <p className="text-white font-semibold">Ready to build your complete business system?</p>
              <p className="text-gray-300 text-sm">Get started with all three AI specialists working together.</p>
            </div>
            <div className="flex-shrink-0">
              <div className="h-12 bg-white rounded-full flex items-center justify-center px-6 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                <span className="text-black font-medium whitespace-nowrap">
                  Start Free Trial
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
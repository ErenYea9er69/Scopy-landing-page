import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('features');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const features = [
    {
      icon: "🎁",
      title: "The Offer Architect",
      subtitle: "Create Irresistible Offers",
      problem: "What should I sell?",
      description: "Transform your ideas into compelling offers that customers can't refuse using proven value frameworks.",
      frameworks: [
        "Value Equation Formula",
        "Grand Slam Offer Construction", 
        "Risk-Free Guarantees",
        "Pricing Psychology"
      ],
      deliverables: [
        "Complete offer blueprint",
        "Pricing recommendations",
        "Guarantee structures",
        "Bonus & scarcity strategies"
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500 to-pink-500",
      hoverGradient: "from-purple-500/30 to-pink-500/30"
    },
    {
      icon: "📣",
      title: "Lead Generation Specialist", 
      subtitle: "Find Your Ideal Customers",
      problem: "How do I find these people?",
      description: "Generate qualified leads through four proven channels that convert prospects into paying customers.",
      frameworks: [
        "Four Core Channels System",
        "Lead Magnet Creation",
        "Warm & Cold Outreach",
        "Content Marketing Strategy"
      ],
      deliverables: [
        "90-day implementation roadmap",
        "Channel-specific action plans",
        "Outreach scripts & templates",
        "Lead generation audit"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500 to-cyan-500",
      hoverGradient: "from-blue-500/30 to-cyan-500/30"
    },
    {
      icon: "💰",
      title: "Money Model Architect",
      subtitle: "Maximize Revenue Systems", 
      problem: "How do I get them to buy?",
      description: "Build a complete revenue model where customer profit exceeds acquisition costs, making growth self-funding.",
      frameworks: [
        "Four Offer Types System",
        "Economic Modeling (CAC/CLV)",
        "Customer Journey Mapping",
        "Scaling Strategy Blueprint"
      ],
      deliverables: [
        "Complete money model blueprint",
        "Customer journey map",
        "Pricing optimization",
        "Scaling roadmap"
      ],
      gradient: "from-green-500/20 to-emerald-500/20", 
      borderGradient: "from-green-500 to-emerald-500",
      hoverGradient: "from-green-500/30 to-emerald-500/30"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Three Critical Business Problems.
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              One AI Solutions.
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every successful business must solve these fundamental challenges. Scopy provide clear, 
            actionable frameworks to build your profitable growth system.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Container */}
              <div 
                className={`
                  relative p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm
                  transition-all duration-500 ease-out cursor-pointer
                  bg-gradient-to-br ${feature.gradient}
                  ${activeCard === index ? `bg-gradient-to-br ${feature.hoverGradient} scale-105` : 'hover:scale-102'}
                `}
                style={{
                  background: activeCard === index 
                    ? `linear-gradient(135deg, ${feature.hoverGradient.replace('from-', '').replace('to-', '').replace('/30', '').split(' ').join(', ')})` 
                    : undefined
                }}
              >
                {/* Animated Border */}
                <div 
                  className={`
                    absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
                    bg-gradient-to-r ${feature.borderGradient} p-[1px]
                    ${activeCard === index ? 'opacity-100' : 'group-hover:opacity-50'}
                  `}
                >
                  <div className="w-full h-full rounded-2xl bg-gray-900"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Header */}
                  <div className="mb-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-lg text-gray-300 mb-3">{feature.subtitle}</p>
                    <div className="text-sm font-medium text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full inline-block">
                      {feature.problem}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Frameworks */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                      Key Frameworks
                    </h4>
                    <div className="space-y-2">
                      {feature.frameworks.map((framework, idx) => (
                        <div key={idx} className="text-sm text-gray-400 flex items-center">
                          <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {framework}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Deliverables */}
                  <motion.div
                    initial={false}
                    animate={{ height: activeCard === index ? 'auto' : 0, opacity: activeCard === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-700/50 pt-4">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r ${feature.borderGradient} rounded-full mr-2"></span>
                        What You Get
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {feature.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center bg-gray-800/30 px-3 py-2 rounded-lg">
                            <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <div className="mt-6">
                    <button className={`
                      w-full py-3 rounded-xl font-semibold text-white
                      bg-gradient-to-r ${feature.borderGradient} 
                      hover:shadow-lg hover:shadow-${feature.borderGradient.split(' ')[0].replace('from-', '').replace('-500', '')}-500/25
                      transition-all duration-300 transform hover:scale-105
                      ${activeCard === index ? 'animate-pulse' : ''}
                    `}>
                      Explore {feature.title}
                    </button>
                  </div>
                </div>

                {/* Hover Effect Background */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
                  bg-gradient-to-br ${feature.gradient}
                  ${activeCard === index ? 'opacity-20' : 'group-hover:opacity-10'}
                `}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Ready to solve all three business challenges?
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl">
            Start Building Your Growth System
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
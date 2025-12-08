import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Pricing: React.FC = () => {
  // Create refs for different sections to trigger animations independently
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  
  // Check if elements are in view
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-50px" });

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: [
        "Access to 1 AI Persona (Leads, Money Model, or Offers)",
        "Basic Lead Generation Templates",
        "Simple Offer Value Calculator",
        "Limited to 3 Conversations per Month"
      ],
      highlighted: false
    },
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      features: [
        "Access to All 3 AI Personas (Leads, Money Model, Offers)",
        "Complete Lead Generation System (Magnets, Scripts, Funnels)",
        "Basic Money Model Blueprint & Unit Economics",
        "Offer Architecture & Value Equation Calculator",
        "Monthly Action Plans & Audits"
      ],
      highlighted: false
    },
    {
      name: "Plus",
      price: "$99",
      period: "/month",
      features: [
        "Unlimited Conversations with All Personas",
        "Advanced Money Model Design (Multi-Offer Systems)",
        "Complete Lead Scoring & Management System",
        "Irresistible Offer Creation with Guarantee Builder",
        "Revenue Forecasting & KPI Tracking Dashboard",
        "Priority Support & 90-Day Growth Roadmaps"
      ],
      highlighted: true
    },
    {
      name: "Pro",
      price: "$299",
      period: "/month",
      features: [
        "All Features + Dedicated Growth Strategist",
        "Custom AI Training on Your Business Data",
        "Advanced Analytics & Conversion Optimization",
        "White-label Solution for Agencies",
        "API Access for Custom Integrations",
        "Weekly Strategy Sessions with Expert"
      ],
      highlighted: false
    }
  ];

  const springConfig = { 
    type: "spring" as const, 
    damping: 20, 
    stiffness: 200, 
    mass: 0.8 
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#111111] via-[#0D0D0D] to-[#0D0D0D] min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={headerInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
          transition={{ 
            duration: 1.2, // Increased from 0.8
            ease: "easeOut",
            staggerChildren: 0.3, // Increased from 0.2
            delayChildren: 0.5 // Increased from 0.3
          }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }} // Increased from 0.6 and 0.2
          >
            Pricing & Plans
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }} // Increased from 0.6 and 0.4
          >
            Pick the plan that suits you best
            <span className="block mt-2 text-sm text-gray-500">
              All plans include a free trial.
            </span>
          </motion.p>
        </motion.div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ 
                opacity: 0, 
                y: 100,
                scale: 0.7,
                rotateX: -30
              }}
              animate={cardsInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateX: 0
              } : {
                opacity: 0, 
                y: 100,
                scale: 0.7,
                rotateX: -30
              }}
              transition={{ 
                ...springConfig, 
                delay: cardsInView ? index * 0.25 : 0, 
                duration: 1.2, 
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col ${
                plan.highlighted 
                  ? 'bg-white/5 border-2 border-white/40 shadow-[0_0_30px_rgba(156,163,175,0.3)] backdrop-blur-sm hover:border-white/50 hover:shadow-[0_0_40px_rgba(156,163,175,0.4)]'
                  : plan.name === 'Free'
                    ? 'border border-gray-700/50 bg-[#1a1a1c] shadow-lg hover:border-gray-600/50'
                    : 'border border-gray-600/50 bg-[#181818] shadow-lg hover:border-gray-500/50'
              }`}
            >
              {plan.highlighted && (
                <motion.div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.5, y: -20 }}
                  animate={cardsInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: -20 }}
                  transition={{ delay: cardsInView ? index * 0.25 + 0.5 : 0 }} // Increased delays
                >
                  <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Most Popular
                  </span>
                </motion.div>
              )}
              
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <motion.h3 
                    className={`text-2xl font-bold ${
                      plan.name === 'Free' ? 'text-gray-400' : 'text-white'
                    }`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: cardsInView ? index * 0.25 + 0.4 : 0 }}
                  >
                    {plan.name}
                  </motion.h3>
                  <motion.span 
                    className={`text-xs px-2 py-1 rounded-full ${
                      plan.name === 'Free'
                        ? 'bg-[#2a2a2c] text-gray-500'
                        : 'bg-[#4a4a4c] text-gray-300'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: cardsInView ? index * 0.25 + 0.5 : 0 }}
                  >
                    Beta
                  </motion.span>
                </div>
                <div className="flex items-baseline">
                  <motion.span 
                    className={`text-4xl font-bold ${
                      plan.name === 'Free' ? 'text-gray-400' : 'text-white'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: cardsInView ? index * 0.25 + 0.5 : 0 }}
                  >
                    {plan.price}
                  </motion.span>
                  <motion.span 
                    className="text-gray-400 ml-1"
                    initial={{ opacity: 0 }}
                    animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: cardsInView ? index * 0.25 + 0.6 : 0 }}
                  >
                    {plan.period}
                  </motion.span>
                </div>
              </div>
              
              <ul className={`space-y-3 ${plan.name === 'Free' ? 'mb-8 flex-grow' : 'mb-8'}`}>
                {plan.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    className={`flex items-start text-sm ${
                      plan.name === 'Free' ? 'text-gray-500' : 'text-gray-300'
                    }`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: cardsInView ? index * 0.25 + featureIndex * 0.12 + 0.8 : 0 }}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 ${
                      plan.name === 'Free' 
                        ? 'bg-gray-600/20' 
                        : 'bg-green-500/20'
                    }`}>
                      <svg className={`w-3 h-3 ${
                        plan.name === 'Free' ? 'text-gray-500' : 'text-green-400'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              {plan.name === 'Free' && (
                <motion.div 
                  className="mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: cardsInView ? index * 0.25 + 0.8 : 0 }}
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.4 }} // Increased from default
                    className="w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 bg-white text-black hover:bg-gray-200"
                  >
                    Try it for Free
                  </motion.button>
                </motion.div>
              )}
              
            </motion.div>
            
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
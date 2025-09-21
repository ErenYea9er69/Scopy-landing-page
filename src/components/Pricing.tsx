import React from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
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

  const springConfig = { type: "spring" as const, damping: 25, stiffness: 300, mass: 0.5 };

  return (
    <section className="py-20 px-4 bg-[#0D0D0D] min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Pricing & Plans
          </h2>
          <p className="text-xl text-gray-400">
            Pick the plan that suits you best
            <span className="block mt-2 text-sm text-gray-500">
              All plans include a free trial.
            </span>
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: index * 0.1 }}
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
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className={`text-2xl font-bold ${
                    plan.name === 'Free' ? 'text-gray-400' : 'text-white'
                  }`}>
                    {plan.name}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    plan.name === 'Free'
                      ? 'bg-[#2a2a2c] text-gray-500'
                      : 'bg-[#4a4a4c] text-gray-300'
                  }`}>
                    Beta
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className={`text-4xl font-bold ${
                    plan.name === 'Free' ? 'text-gray-400' : 'text-white'
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className={`space-y-3 ${plan.name === 'Free' ? 'mb-8 flex-grow' : 'mb-8'}`}>
                {plan.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    className={`flex items-start text-sm ${
                      plan.name === 'Free' ? 'text-gray-500' : 'text-gray-300'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
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
                <div className="mt-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 bg-white text-black hover:bg-gray-200"
                  >
                    Try it for Free
                  </motion.button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
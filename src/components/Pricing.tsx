import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Check, Crown, Sparkle, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "/month",
      features: [
        "100 AI Generations",
        "Basic Support",
        "1 User",
        "Export to PDF",
      ],
      highlighted: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited Generations",
        "Priority Support",
        "5 Users",
        "Export to All Formats",
        "API Access",
        "Custom Branding"
      ],
      highlighted: true,
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Everything in Pro",
        "Dedicated Support",
        "Unlimited Users",
        "Custom Integration",
        "SLA Agreement"
      ],
      highlighted: false,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 0 0 rgba(59, 130, 246, 0)",
      "0 0 20px 5px rgba(59, 130, 246, 0.3)",
      "0 0 0 0 rgba(59, 130, 246, 0)"
    ],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  };

  return (
    <section className="py-20 px-4 bg-[#0D0D0D] min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <motion.div 
              animate={floatingAnimation}
              className="mr-3"
            >
              <Sparkle className="w-6 h-6 text-blue-400" />
            </motion.div>
            <h3 className="text-lg font-semibold text-gray-400 tracking-wider uppercase">PRICING PLANS</h3>
            <motion.div 
              animate={floatingAnimation}
              className="ml-3"
            >
              <Sparkle className="w-6 h-6 text-blue-400" />
            </motion.div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
            Simple, Transparent
            <br />
            <span className="relative">
              Pricing
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. All plans include our core AI features with no hidden fees.
          </p>
        </motion.div>
        
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`relative rounded-3xl p-1 transition-all duration-500 ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-blue-500/10 to-purple-500/10 border border-blue-500/30 shadow-2xl shadow-blue-500/5'
                  : 'bg-[#181818]/80 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50'
              }`}
            >
              {/* Plan Card Background Animation */}
              {plan.highlighted && (
                <motion.div
                  animate={glowAnimation}
                  className="absolute inset-0 rounded-3xl"
                />
              )}
              
              {/* Most Popular Badge */}
              {plan.highlighted && (
                <motion.div 
                  className="absolute -top-5 left-1/2 transform -translate-x-1/2"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-md opacity-75 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                      <Crown className="w-4 h-4" />
                      <span>MOST POPULAR</span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Card Content */}
              <div className="p-8 rounded-2xl bg-[#121212] h-full relative overflow-hidden">
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-20 h-20">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500/30 rounded-full"></div>
                  <div className="absolute top-4 left-4 w-1 h-1 bg-blue-500/20 rounded-full"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20">
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-500/30 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-purple-500/20 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${plan.color} mr-3`}></div>
                      <h3 className="text-3xl font-bold text-white">{plan.name}</h3>
                    </div>
                    <div className="flex items-end">
                      <span className="text-5xl md:text-6xl font-black text-white tracking-tight">{plan.price}</span>
                      <span className="text-gray-400 text-xl ml-2 mb-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mr-4 transform transition-transform group-hover:scale-110`}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 10px 25px -5px rgba(59, 130, 246, ${plan.highlighted ? '0.5' : '0.2'})`
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-8 rounded-xl font-bold text-sm transition-all duration-300 relative overflow-hidden group ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                        : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-gray-600/50 hover:border-gray-500/50'
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started
                      {plan.highlighted && (
                        <Star className="ml-2 w-4 h-4 text-yellow-300 fill-current" />
                      )}
                    </span>
                    {plan.highlighted && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Particles */}
        <div className="hidden md:block absolute -z-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-500/30 rounded-full absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() > 0.5 ? 20 : -20, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
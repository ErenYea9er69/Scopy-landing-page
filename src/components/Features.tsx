import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      title: "The Lead Generation Specialist 📣",
      description: "Find qualified prospects through Warm Outreach, Free Content Marketing, Cold Outreach, and Paid Advertising. Get complete channel action plans, outreach scripts, and a 90-day implementation roadmap.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      isMain: true
    },
    {
      title: "The Offer Architect 🎁",
      description: "Create irresistible Grand Slam Offers using the Value Equation. Get AI-generated names, deliverables, guarantees, bonuses, and value-based pricing strategies.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      isMain: true
    },
    {
      title: "The Money Model Architect 💰",
      description: "Design a complete revenue system with Attraction, Upsell, Downsell, and Continuity Offers. Model your customer journey and maximize Customer Lifetime Value.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      isMain: true
    },
    {
      title: "Lead Magnet Creation",
      description: "Design high-converting lead magnets that solve specific problems for your ideal customers, encouraging them to opt-in and show real buying intent.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      isMain: false
    },
    {
      title: "Value Equation Optimization",
      description: "Maximize your offer's perceived value by increasing Dream Outcome and Likelihood of Success while minimizing Time Delay and Effort/Sacrifice.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      isMain: false
    },
    {
      title: "Complete Funnel Modeling",
      description: "Visualize your entire customer journey from awareness to repeat purchase. Model revenue potential and optimize conversion at every stage.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      isMain: false
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Solve Your Business Growth Challenges
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Scopy AI helps you create irresistible offers, find qualified leads, and maximize revenue with proven frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className={`relative group cursor-pointer`}
              whileHover={{ 
                scale: 1.03,
                rotate: feature.isMain ? 0.5 : 0
              }}
              whileTap={{ scale: 0.98 }}
              tabIndex={0}
              aria-label={`${feature.title}. ${feature.description}`}
            >
              <div 
                className={`
                  h-full bg-gradient-to-br from-slate-800 to-slate-900 
                  rounded-3xl p-8 border border-slate-700 
                  transition-all duration-700 relative overflow-hidden
                  shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.05)]
                  ${feature.isMain ? 'md:col-span-1 md:row-span-1' : 'md:col-span-1'}
                `}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl p-[1px]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 via-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm animate-border-pulse"></div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 via-violet-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[2px]"></div>
                </div>
                
                {/* Inner content */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className={`
                      inline-flex items-center justify-center p-3 rounded-2xl
                      ${feature.isMain 
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                        : 'bg-gradient-to-br from-violet-500 to-purple-500'}
                      text-white shadow-lg
                      ${feature.isMain ? 'group-hover:animate-pulse-slow' : ''}
                    `}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className={`
                    text-xl font-bold mb-4
                    ${feature.isMain 
                      ? 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500' 
                      : 'bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-500'}
                  `}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-300 font-medium">
                    {feature.description}
                  </p>
                </div>
                
                {/* Focus ring for accessibility */}
                <div className="absolute inset-0 rounded-3xl ring-2 ring-cyan-500 ring-opacity-0 group-focus-within:ring-opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Custom animations */}
      <style >{`
        @keyframes border-pulse {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-border-pulse {
          background-size: 200% 200%;
          animation: border-pulse 3s ease infinite;
        }
        @keyframes pulse-slow {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .group-hover\\:animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;
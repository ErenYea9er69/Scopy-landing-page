// features.tsx
import React from 'react';
import { motion } from 'framer-motion';

// Helper component for the icons to reduce repetition
const IconWrapper: React.FC<{ children: React.ReactNode; colorClasses: string; }> = ({ children, colorClasses }) => (
  <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 mb-4 shadow-lg ${colorClasses} flex-shrink-0 mx-auto`}>
    <div className="absolute inset-0 rounded-2xl opacity-20 blur-md bg-current"></div>
    {children}
  </div>
);

// Define the features for the grid, now with descriptions
const gridFeatures = [
  {
    title: 'Offer Architect',
    description: 'Answers "What should I sell?" by helping you construct an irresistible product or service.',
    colorClasses: 'text-orange-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.5L12 8l4.5-4.5M12 8v13" />
        <circle cx="12" cy="4" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'The Value Equation',
    description: 'Maximizes your offers appeal by boosting the dream outcome while minimizing customer effort and delay.',
    colorClasses: 'text-green-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 16h6M9 8h6"/>
      </svg>
    ),
  },
  {
    title: 'Grand Slam Offer',
    description: 'A step-by-step process that bundles solutions to every customer problem into a single, high-value package.',
    colorClasses: 'text-blue-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7L9 19l-5.5-5.5"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v6.5M8.5 4.5L12 8l3.5-3.5"/>
        <circle cx="12" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h6M21 12h-6"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7l2 2-2 2M8 7L6 9l2 2"/>
      </svg>
    ),
  },
  {
    title: 'Lead Generation',
    description: 'Answers "How do I find customers?" by designing strategies to attract prospects who show real intent to buy.',
    colorClasses: 'text-purple-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6z"/>
        <circle cx="12" cy="12" r="3"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v6M23 12h-6M12 17v6M1 12h6"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6M15 9l-6 6" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: 'Four Core Channels',
    description: 'Builds actionable plans across four proven marketing channels: warm & cold outreach, content, and paid ads.',
    colorClasses: 'text-yellow-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8"/>
        <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="6" cy="18" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'AI Lead Magnets',
    description: 'Creates valuable free content, like guides or checklists, to capture contact information from your ideal customers.',
    colorClasses: 'text-teal-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 4.21l4.5 2.6 4.5-2.6M12 6.81V17.5"/>
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v3M10.5 12h3"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 8l8 8M16 8l-8 8" opacity="0.2"/>
      </svg>
    ),
  },
  {
    title: 'Money Model',
    description: 'Answers "How do I get them to buy?" by designing a complete, profitable sales system for your business.',
    colorClasses: 'text-pink-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v2M10 9h4"/>
        <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l2-2 2 2M13 13l2-2 2 2"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6h6M9 14h6" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: 'Customer Journey Maps',
    description: 'Creates a visual blueprint of the path a customer takes, ensuring a seamless and profitable experience.',
    colorClasses: 'text-indigo-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2l6 3 5.447-2.724A1 1 0 0121 3.618v10.764a1 1 0 01-.553.894L15 18l-6-3z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 2v18M15 5v13"/>
        <circle cx="6" cy="8" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
        <circle cx="18" cy="12" r="1.5" fill="currentColor"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l6 2M12 10l6 2"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15h4M13 17h4" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Scale with CAC & CLV',
    description: 'Uses data (Customer Acquisition Cost & Lifetime Value) to provide a clear roadmap for sustainable growth.',
    colorClasses: 'text-red-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l4-4 4 4 6-6"/>
        <circle cx="7" cy="16" r="2" fill="currentColor" opacity="0.7"/>
        <circle cx="11" cy="12" r="2" fill="currentColor" opacity="0.7"/>
        <circle cx="15" cy="16" r="2" fill="currentColor" opacity="0.7"/>
        <circle cx="21" cy="10" r="2" fill="currentColor"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 6l4 4-4 4"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 20v-8M11 20v-12M15 20v-8M19 20v-16" opacity="0.3"/>
      </svg>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <section 
      id="features" 
      className="py-20 bg-gradient-to-b from-gray-900 to-[#111111] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
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
            Scopy AI doesn't just give advice, it builds your entire business system with precision, logic, and emotional intelligence.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative flex flex-col text-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-gray-300 hover:shadow-[0_0_20px_rgba(156,163,175,0.8)] hover:bg-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconWrapper colorClasses={feature.colorClasses}>
                {feature.icon}
              </IconWrapper>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'The Value Equation',
    description: 'Maximizes your offer’s appeal by boosting the dream outcome while minimizing customer effort and delay.',
    colorClasses: 'text-green-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Grand Slam Offer',
    description: 'A step-by-step process that bundles solutions to every customer problem into a single, high-value package.',
    colorClasses: 'text-blue-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M4 17v4m-2-2h4m11-4v4m-2-2h4M12 3a9 9 0 019 9h-3a6 6 0 00-6-6V3zM12 3a9 9 0 00-9 9H0a6 6 0 016-6V3z" />
      </svg>
    ),
  },
  {
    title: 'Lead Generation',
    description: 'Answers "How do I find customers?" by designing strategies to attract prospects who show real intent to buy.',
    colorClasses: 'text-purple-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Four Core Channels',
    description: 'Builds actionable plans across four proven marketing channels: warm & cold outreach, content, and paid ads.',
    colorClasses: 'text-yellow-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 11.25v2.572a1.5 1.5 0 00.72 1.3l5.25 3.03a1.5 1.5 0 001.56 0l5.25-3.03a1.5 1.5 0 00.72-1.3V11.25m-1.5 0V7.5a1.5 1.5 0 00-1.5-1.5h-9a1.5 1.5 0 00-1.5 1.5v3.75m1.5 0h9" />
      </svg>
    ),
  },
  {
    title: 'AI Lead Magnets',
    description: 'Creates valuable free content, like guides or checklists, to capture contact information from your ideal customers.',
    colorClasses: 'text-teal-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Money Model',
    description: 'Answers "How do I get them to buy?" by designing a complete, profitable sales system for your business.',
    colorClasses: 'text-pink-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0h.75A.75.75 0 015.25 6v.75m0 0v-.75A.75.75 0 015.25 4.5h-.75m0 0V3.75c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125V4.5m-3.75 0h3.75M3 12h18M3 15h18" />
      </svg>
    ),
  },
  {
    title: 'Customer Journey Maps',
    description: 'Creates a visual blueprint of the path a customer takes, ensuring a seamless and profitable experience.',
    colorClasses: 'text-indigo-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75V12m0 0V2.25" />
      </svg>
    ),
  },
  {
    title: 'Scale with CAC & CLV',
    description: 'Uses data (Customer Acquisition Cost & Lifetime Value) to provide a clear roadmap for sustainable growth.',
    colorClasses: 'text-red-400',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <section 
      id="features" 
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
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
            Scopy AI doesn't just give advice — it builds your entire business system with precision, logic, and emotional intelligence.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative flex flex-col text-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
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
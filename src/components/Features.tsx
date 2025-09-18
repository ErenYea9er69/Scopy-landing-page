// features.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      title: "Offer Architect",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M17 7h.01M7 12h.01M17 12h.01M7 17h.01M17 17h.01M7 22h.01M17 22h.01" />
        </svg>
      ),
      description: "Design irresistible offers that make customers feel they can't say no.",
      framework: "Value Equation: (Dream Outcome × Likelihood) ÷ (Time Delay × Effort)",
      tools: [
        "Grand Slam Offer Builder",
        "Pricing Psychology",
        "Guarantee Generator",
        "Bonus & Urgency Planner",
        "Offer Naming Formula"
      ],
      cta: "Build My Offer"
    },
    {
      title: "Lead Generation Specialist",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.336 2.146" />
        </svg>
      ),
      description: "Find high-intent customers who are ready to buy — not just see your content.",
      framework: "Four Core Channels: Warm Outreach, Free Content, Cold Outreach, Paid Ads",
      tools: [
        "Lead Magnet Creator",
        "Channel Audit Tool",
        "Outreach Scripts",
        "Email Templates",
        "90-Day Roadmap"
      ],
      cta: "Generate Leads"
    },
    {
      title: "Money Model Architect",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      description: "Create a self-funding revenue system where profit exceeds acquisition cost.",
      framework: "Four Offer Types: Attraction, Upsell, Downsell, Continuity",
      tools: [
        "Customer Lifetime Value Calculator",
        "CAC vs CLV Analyzer",
        "Revenue Funnel Map",
        "Pricing Strategy Engine",
        "Scaling Blueprint"
      ],
      cta: "Optimize Revenue"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful AI Agents That Solve the Core Problems of Business
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Scopy AI doesn’t just give advice — it builds systems. Three expert AI assistants work together to help you build, attract, and convert.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-10 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                
                {/* Framework Highlight */}
                <div className="bg-black bg-opacity-30 rounded-lg p-3 mb-6 w-full">
                  <p className="text-xs text-blue-300 font-mono tracking-wide">{feature.framework}</p>
                </div>

                {/* Tools List */}
                <ul className="space-y-3 mb-6">
                  {feature.tools.map((tool, i) => (
                    <li key={i} className="flex items-center text-gray-200 text-sm">
                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {tool}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-full hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-md">
                  {feature.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
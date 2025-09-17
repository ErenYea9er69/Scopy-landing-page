import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Create Your Offer",
      description: "Answer simple questions about your customer's dream outcome and problems. Get a complete offer in minutes.",
      icon: "1"
    },
    {
      title: "Choose Lead Channel",
      description: "Select one lead generation channel. Get a step-by-step plan with templates and scripts.",
      icon: "2"
    },
    {
      title: "Model Your Funnel",
      description: "Build a simple two-step funnel with attraction and upsell offers. See revenue potential instantly.",
      icon: "3"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 bg-opacity-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Scopy AI Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Get actionable business strategies in three simple steps. No guesswork, just proven frameworks.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-blue-500 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold mb-6 z-10 relative">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
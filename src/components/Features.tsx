// features.tsx
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-based animation triggers
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], ['100%', '0%']);

  // Icons (SVG components)
  const IconOffer = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 8L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const IconLead = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 16L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 8L12 8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const IconMoney = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 8L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 16L12 16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const FeatureCard = ({ title, description, icon, features }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: Array<{ label: string; detail: string }>;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300 group"
    >
      <div className="flex items-center mb-4">
        <div className="text-blue-400 mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((f, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-start"
          >
            <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="ml-2 text-gray-300 text-sm">{f.label} — <span className="text-gray-400">{f.detail}</span></span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="features" className="relative py-24 bg-black overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        style={{
          y,
          opacity: 0.3,
        }}
        className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 pointer-events-none"
      />

      {/* Subtle floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powered by Three AI Assistants
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Scopy AI doesn't just give advice — it builds your entire business system with precision, logic, and emotional intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Offer Architect */}
          <FeatureCard
            title="Offer Architect 🎁"
            description="Solve the question: 'What should I sell?' by building offers so compelling people can’t say no."
            icon={<IconOffer />}
            features={[
              {
                label: "Value Equation",
                detail: "Maximizes value using (Dream × Likelihood) ÷ (Delay × Effort)"
              },
              {
                label: "Grand Slam Offers",
                detail: "Step-by-step creation of irresistible product packages"
              },
              {
                label: "Offer Enhancements",
                detail: "Guarantees, pricing psychology, bonuses & naming"
              }
            ]}
          />

          {/* Lead Generation Specialist */}
          <FeatureCard
            title="Lead Generation Specialist 📣"
            description="Answer: 'How do I find buyers?' with strategies that capture real intent, not just attention."
            icon={<IconLead />}
            features={[
              {
                label: "Four Core Channels",
                detail: "Warm outreach, free content, cold outreach, paid ads"
              },
              {
                label: "Lead Magnet Creator",
                detail: "Build high-value free resources to capture emails"
              },
              {
                label: "Actionable Deliverables",
                detail: "Audit, scripts, templates, and 90-day roadmap"
              }
            ]}
          />

          {/* Money Model Architect */}
          <FeatureCard
            title="Money Model Architect 💰"
            description="Answer: 'How do I get them to buy?' by designing a self-funding revenue engine."
            icon={<IconMoney />}
            features={[
              {
                label: "Four Offer Types",
                detail: "Attraction, upsell, downsell, continuity offers"
              },
              {
                label: "Economic Modeling",
                detail: "CAC, CLV, and profit-driven scaling strategy"
              },
              {
                label: "Strategic Blueprint",
                detail: "Customer journey map, pricing, and growth plan"
              }
            ]}
          />
        </div>

        {/* CTA below features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Stop guessing. Start building profitable systems with AI-guided clarity.
          </p>
          <button
            onClick={() => window.location.href = '#pricing'}
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            See How It Works
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
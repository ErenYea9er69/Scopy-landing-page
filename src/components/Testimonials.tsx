import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Entrepreneur",
      content: "Scopy AI helped me create my first profitable offer in days. My revenue increased by 340% in the first month!",
      avatar: "https://placehold.co/80x80/4F46E5/FFFFFF?text=SJ"
    },
    {
      name: "Michael Chen",
      role: "SaaS Founder",
      content: "The lead channel planner gave me a clear roadmap. I went from 10 leads to 150 qualified leads per month.",
      avatar: "https://placehold.co/80x80/4F46E5/FFFFFF?text=MC"
    },
    {
      name: "Jessica Williams",
      role: "Business Coach",
      content: "The funnel modeler helped me double my average order value. My clients are seeing incredible results too.",
      avatar: "https://placehold.co/80x80/4F46E5/FFFFFF?text=JW"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Business Leaders
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Entrepreneurs and founders are transforming their businesses with Scopy AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
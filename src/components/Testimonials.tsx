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
    <section id="testimonials" className="py-20 px-6">
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
              className="group cursor-pointer relative"
              whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-transparent transition-all duration-500 relative overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="absolute inset-1 rounded-xl bg-gray-800 bg-opacity-50 backdrop-blur-lg"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
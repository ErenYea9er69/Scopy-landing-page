import React from 'react';

const Pricing: React.FC = () => {
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
      highlighted: false
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
      highlighted: true
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
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400">Choose the plan that's right for you</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-blue-600 to-blue-800 border-2 border-blue-400 shadow-xl transform hover:-translate-y-1'
                  : 'bg-gray-800 border border-gray-700 hover:border-gray-600'
              } transition-all duration-300`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
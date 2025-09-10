import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-screen items-center justify-center text-white pt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Unleash AI's True Power with Scopy
          </h1>
          <p className="text-lg text-gray-300 md:text-xl lg:text-2xl leading-relaxed">
            Transform your creative workflow with our revolutionary AI platform. Generate compelling content, craft stunning visuals, and automate complex tasks—all in one seamless experience.
          </p>
          <div className="flex space-x-4 pt-4">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors duration-300">
              Start Creating Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side - Circular Video */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Breathing Shadow Effect */}
            <div 
              className="absolute -inset-8 rounded-full opacity-40"
              style={{
                background: `
                  radial-gradient(circle, rgba(107, 114, 128, 0.6) 0%, rgba(75, 85, 99, 0.4) 40%, transparent 70%)
                `,
                filter: 'blur(20px)',
                animation: 'breathe 3s ease-in-out infinite'
              }}
            />
            
            {/* Video Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <video
                className="w-full h-full rounded-full object-cover shadow-2xl border-2 border-gray-600"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  filter: 'contrast(1.1) brightness(0.95)'
                }}
              >
                <source src="/assets/vd1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
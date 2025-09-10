import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-screen items-center justify-center text-white">
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

        {/* Right Side - Video */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg lg:max-w-xl">
            {/* Animated Border */}
            <div className="absolute -inset-1 rounded-3xl opacity-75">
              <div 
                className="w-full h-full rounded-3xl"
                style={{
                  background: `
                    conic-gradient(
                      from 0deg,
                      #dc2626 0deg,
                      #7f1d1d 60deg,
                      #374151 120deg,
                      #6b7280 180deg,
                      #374151 240deg,
                      #dc2626 300deg,
                      #dc2626 360deg
                    )
                  `,
                  animation: 'spin 4s linear infinite'
                }}
              />
            </div>
            {/* Inner Glow */}
            <div 
              className="absolute -inset-0.5 rounded-3xl"
              style={{
                background: `
                  radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%),
                  linear-gradient(45deg, rgba(107, 114, 128, 0.4) 0%, rgba(55, 65, 81, 0.4) 100%)
                `,
                filter: 'blur(1px)'
              }}
            />
            {/* Video Container */}
            <div className="relative bg-black rounded-3xl p-1">
              <video
                className="w-full h-auto rounded-3xl shadow-2xl"
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
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-screen items-center">
      <div className="container mx-auto flex items-center px-6 lg:px-12">
        {/* Text content on the left */}
        <div className="flex-1 text-white pr-12 lg:pr-16 pl-4 lg:pl-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              AI Coach Generated $2.3M Using Emotional Triggers
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl mb-8">
              Our AI coach targets your customer's emotional decision center. We studied 10,000 sales conversations. Emotional triggers beat logic by 347%. Companies using our method close 73% more deals. Get specific scripts that bypass skepticism and create urgency.
            </p>
            
            {/* Buttons Section */}
            <div className="flex items-center space-x-4">
              {/* Primary Pill Button */}
              <div className="relative group">
                <div className="h-14 bg-white rounded-full flex items-center justify-center px-8 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                  <span className="text-black text-lg font-semibold whitespace-nowrap">
                    ↗ Get Scripts Now
                  </span>
                </div>
              </div>
              
              {/* Secondary Button with Play Icon */}
              <div className="relative group">
                <div className="h-14 bg-transparent border-2 border-white rounded-full flex items-center justify-center px-8 cursor-pointer transition-all duration-300 hover:bg-white hover:scale-105 group">
                  <div className="flex items-center space-x-2">
                    <svg 
                      className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    <span className="text-white text-lg font-semibold whitespace-nowrap group-hover:text-black transition-colors duration-300">
                      See $2.3M Results
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video on the right */}
        <div className="flex-1 flex justify-center items-center pr-4 lg:pr-8">
          <div className="w-full max-w-lg">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              style={{
                mixBlendMode: 'screen', // This will blend the video with background, making dark areas transparent
                filter: 'contrast(1.2) brightness(1.1)' // Enhance the blue sphere
              }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/bg0.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
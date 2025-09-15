import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-screen items-center">
      <div className="container mx-auto flex items-center">
        {/* Text content on the left */}
        <div className="flex-1 text-white pr-8">
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Unlock the Full Potential of AI with Scopy
          </h1>
          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            Generate content, create stunning visuals, and streamline your workflow with our all-in-one creative platform.
          </p>
        </div>
        
        {/* Video on the right */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-lg">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
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
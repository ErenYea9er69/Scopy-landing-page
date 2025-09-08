import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-screen items-center justify-center text-center text-white">
      <div className="max-w-3xl px-4">
        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Unlock the Full Potential of AI with Scopy
        </h1>
        <p className="mt-6 text-lg text-gray-300 md:text-xl">
          Generate content, create stunning visuals, and streamline your workflow with our all-in-one creative platform.
        </p>
      </div>
    </section>
  );
};

export default Hero;
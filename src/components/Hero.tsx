import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-screen items-center justify-center text-white pt-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl max-w-4xl">
          Unleash AI's True Power with Scopy
        </h1>
        <p className="text-lg text-gray-300 md:text-xl lg:text-2xl leading-relaxed max-w-3xl">
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
    </section>
  )
}

export default Hero
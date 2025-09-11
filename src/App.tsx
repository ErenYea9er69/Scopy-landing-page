import { useState, useRef, useEffect } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      console.log('Video loaded successfully');
    };

    const handleError = (e: Event) => {
      const error = (e.target as HTMLVideoElement).error;
      setVideoError(error ? error.message : 'Video failed to load');
      console.error('Video error:', error);
    };

    const handleCanPlay = () => {
      video.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    // Force load the video
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/assets/vd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Loading indicator */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="text-white text-xl">Loading video...</div>
        </div>
      )}
      
      {/* Error message */}
      {videoError && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="text-red-500 text-center">
            <div className="text-xl mb-2">Video Error</div>
            <div className="text-sm">{videoError}</div>
            <div className="text-xs mt-2 text-gray-400">
              Make sure vd.mp4 is in public/assets/vd.mp4
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="relative z-20 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">S</span>
          </div>
          <span className="text-white text-2xl font-bold">Scopy AI</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Features', 'Solutions', 'Pricing', 'Resources', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white hover:text-gray-300 transition-colors duration-300 py-2"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item}
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-out ${
                  hoveredItem === item ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2">
          <span>Get Started Now</span>
          <span>↗</span>
        </button>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Unleash AI's True Power with Scopy
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto">
          Transform your creative workflow with our revolutionary AI platform. Generate compelling content, craft stunning visuals, and automate complex tasks—all in one seamless experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors duration-300 w-full sm:w-auto">
            Start Creating Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="relative min-h-screen">
      <VideoBackground />
      <Header />
      <Hero />
    </div>
  );
};

export default App;
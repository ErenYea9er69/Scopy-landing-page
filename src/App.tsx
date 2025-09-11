import React, { useState, useRef, useEffect } from 'react';

const DebugPanel = ({ videoRef }) => {
  const [debugInfo, setDebugInfo] = useState({
    videoSrc: '/assets/vd.mp4',
    videoWidth: 0,
    videoHeight: 0,
    videoDuration: 0,
    videoState: 'loading',
    error: null
  });

  useEffect(() => {
    const updateVideoInfo = () => {
      if (videoRef.current) {
        setDebugInfo(prev => ({
          ...prev,
          videoWidth: videoRef.current.videoWidth,
          videoHeight: videoRef.current.videoHeight,
          videoDuration: videoRef.current.duration,
          videoState: videoRef.current.readyState > 2 ? 'ready' : 'loading'
        }));
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', updateVideoInfo);
      videoRef.current.addEventListener('canplay', updateVideoInfo);
      videoRef.current.addEventListener('error', (e) => {
        setDebugInfo(prev => ({
          ...prev,
          videoState: 'error',
          error: videoRef.current.error ? videoRef.current.error.message : 'Unknown error'
        }));
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', updateVideoInfo);
        videoRef.current.removeEventListener('canplay', updateVideoInfo);
      }
    };
  }, [videoRef]);

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-70 text-white p-4 rounded-lg text-xs max-w-xs z-50">
      <h3 className="font-bold mb-2">Video Debug Info</h3>
      <ul>
        <li>Source: {debugInfo.videoSrc}</li>
        <li>Dimensions: {debugInfo.videoWidth} × {debugInfo.videoHeight}</li>
        <li>Duration: {debugInfo.videoDuration.toFixed(2)}s</li>
        <li>State: {debugInfo.videoState}</li>
        {debugInfo.error && <li className="text-red-400">Error: {debugInfo.error}</li>}
      </ul>
      <div className="mt-2">
        <button 
          className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded mr-2"
          onClick={() => videoRef.current.play()}
        >
          Play
        </button>
        <button 
          className="bg-gray-500 hover:bg-gray-600 px-2 py-1 rounded"
          onClick={() => videoRef.current.pause()}
        >
          Pause
        </button>
      </div>
    </div>
  );
};

const Background = () => {
  const videoRef = useRef(null);
  const [showDebug, setShowDebug] = useState(true);

  return (
    <div className="fixed inset-0 z-0">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* Try multiple sources for better compatibility */}
        <source src="/assets/vd.mp4" type="video/mp4" />
        <source src="/assets/vd.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Debug toggle button */}
      <button 
        className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full z-50"
        onClick={() => setShowDebug(!showDebug)}
      >
        🐞
      </button>
      
      {/* Debug panel */}
      {showDebug && <DebugPanel videoRef={videoRef} />}
    </div>
  );
};

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex items-center justify-between text-white">
        <div className="flex items-center space-x-2">
          <img
            src="/assets/logo.png"
            alt="Scopy AI Logo"
            className="h-8 w-8 object-contain brightness-0 invert"
          />
          <span className="text-xl font-semibold">Scopy AI</span>
        </div>

        <nav className="hidden items-center space-x-8 md:flex">
          {['features', 'solutions', 'pricing', 'resources', 'about'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative py-2"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="capitalize hover:text-gray-300 transition-colors duration-300">
                {item}
              </span>
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-out ${
                  hoveredItem === item ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center relative">
          <img
            src="/assets/pill.png"
            alt="Get Started Button"
            className="h-20 w-45 object-contain brightness-130 contrast-100"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-black text-lg font-medium whitespace-nowrap">
              ↗ Get Started Now
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
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
  );
};

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </div>
  );
};

export default App;
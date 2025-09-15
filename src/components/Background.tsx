import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{ backgroundColor: '#249924' }} // Fallback color
      >
        <source src="/assets/vd1.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
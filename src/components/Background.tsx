import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/vd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </div>
  );
};

export default Background;
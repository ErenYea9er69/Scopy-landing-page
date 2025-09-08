import React from 'react';

const Background: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url('/assets/bg1.png')`,
        backgroundColor: '#242424' // Fallback color
      }}
    />
  );
};

export default Background;
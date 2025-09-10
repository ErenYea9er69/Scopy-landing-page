import React from 'react';

const Background: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-[-1]"
      style={{
        background: `
          linear-gradient(90deg, #000000 0%, #000000 30%, #1f2937 60%, #374151 80%, #4b5563 100%),
          radial-gradient(circle at 80% 50%, rgba(75, 85, 99, 0.2) 0%, transparent 60%),
          radial-gradient(circle at 20% 80%, rgba(31, 41, 55, 0.3) 0%, transparent 50%)
        `
      }}
    />
  );
};

export default Background;
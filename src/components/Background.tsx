import React from 'react';

const Background: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-[-1] bg-gradient-to-br from-black via-gray-900 to-gray-700"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(75, 85, 99, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(55, 65, 81, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(31, 41, 55, 0.5) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #1f2937 50%, #374151 100%)
        `
      }}
    />
  );
};

export default Background;
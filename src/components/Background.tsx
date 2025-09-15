import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <div className="w-full h-full bg-gradient-to-r from-black via-gray-900 to-blue-900"></div>
    </div>
  );
};

export default Background;
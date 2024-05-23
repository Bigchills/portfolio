import React from 'react';

const BackgroundLines = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Vertical Lines */}
      <div className="absolute inset-0 grid grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-full w-px bg-gray-300 animate-lineMove"></div>
        ))}
      </div>
      {/* Horizontal Lines */}
      <div className="absolute inset-0 grid grid-rows-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="w-full h-px bg-gray-300 animate-lineMove"></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundLines;

import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min- bg-gradient-to-b from-green-100 to-green-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl md:text-8xl font-bold text-green-900 mb-8 animate-bounce">
        wawamewon
      </h1>
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Watermelon Body */}
        <div className="absolute inset-0 bg-green-600 rounded-full shadow-2xl" />
        <div className="absolute inset-2 bg-white rounded-full" />
        <div className="absolute inset-4 bg-green-500 rounded-full" />
        <div className="absolute inset-6 bg-white rounded-full" />
        <div className="absolute inset-8 bg-green-400 rounded-full" />
        {/* Watermelon Seeds */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-black rounded-full"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="relative w-24 h-24">
        {/* Cercle extérieur avec dégradé tournant */}
        <div className="absolute inset-0 rounded-full border-4 border-t-indigo-500 border-r-transparent border-b-indigo-500 border-l-transparent animate-spin"></div>

        {/* Cercle intérieur */}
        <div className="absolute inset-4 rounded-full border-2 border-indigo-700 opacity-50"></div>

        {/* Points tournants */}
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-indigo-600 rounded-full animate-spin origin-[50%_120%]"></div>
        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-indigo-400 rounded-full animate-spin origin-[50%_-20%] animation-delay-1500"></div>

        {/* Centre */}
        <div className="absolute inset-10 rounded-full bg-indigo-900 opacity-80"></div>
      </div>
    </div>
  );
};

export default Loader;

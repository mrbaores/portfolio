import React, { useState, useEffect } from 'react';

const Loader: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Chargement en cours...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100); // vitesse de la machine à écrire
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white dark:bg-gray-900 z-50">
      {/* Cercle qui tourne */}
      <svg
        className="animate-spin -ml-1 mr-3 h-20 w-20 text-indigo-600 dark:text-indigo-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>

      {/* Texte machine à écrire */}
      <p className="mt-6 text-indigo-600 dark:text-indigo-400 text-lg font-mono tracking-widest select-none">
        {displayedText}
        <span className="blink">|</span>
      </p>

      {/* Animation CSS pour le curseur clignotant */}
      <style>{`
        .blink {
          animation: blink 1s step-start 0s infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Loader;

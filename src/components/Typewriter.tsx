import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number; // ms par caractère (optionnel)
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  // Curseur qui clignote
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="font-mono text-indigo-500 text-lg flex items-center justify-center">
      {displayedText}
      <span className={`inline-block w-1 h-6 bg-indigo-500 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
    </div>
  );
};

export default Typewriter;

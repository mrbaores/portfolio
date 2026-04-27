import React, { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  /** Array of strings to cycle through */
  texts: string[];
  /** Typing speed in ms per character */
  speed?: number;
  /** Erase speed in ms per character */
  eraseSpeed?: number;
  /** Pause at end of each word before erasing (ms) */
  pauseMs?: number;
  className?: string;
}

type Phase = 'typing' | 'pausing' | 'erasing' | 'switching';

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  speed = 80,
  eraseSpeed = 40,
  pauseMs = 1800,
  className = '',
}) => {
  const [displayed, setDisplayed] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const indexRef = useRef(0);
  const phaseRef = useRef<Phase>('typing');
  const charRef = useRef(0);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typewriter state machine
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentText = texts[indexRef.current % texts.length];
      const phase = phaseRef.current;

      if (phase === 'typing') {
        charRef.current += 1;
        setDisplayed(currentText.slice(0, charRef.current));
        if (charRef.current >= currentText.length) {
          phaseRef.current = 'pausing';
          timeoutId = setTimeout(tick, pauseMs);
        } else {
          timeoutId = setTimeout(tick, speed);
        }
      } else if (phase === 'pausing') {
        phaseRef.current = 'erasing';
        timeoutId = setTimeout(tick, eraseSpeed);
      } else if (phase === 'erasing') {
        charRef.current -= 1;
        setDisplayed(currentText.slice(0, charRef.current));
        if (charRef.current <= 0) {
          phaseRef.current = 'switching';
          timeoutId = setTimeout(tick, 300);
        } else {
          timeoutId = setTimeout(tick, eraseSpeed);
        }
      } else {
        // switching
        indexRef.current += 1;
        charRef.current = 0;
        phaseRef.current = 'typing';
        timeoutId = setTimeout(tick, speed);
      }
    };

    timeoutId = setTimeout(tick, speed);
    return () => clearTimeout(timeoutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={className}>
      {displayed}
      <span
        className={`inline-block w-0.5 h-[1em] align-middle ml-0.5 bg-current transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
      />
    </span>
  );
};

export default Typewriter;

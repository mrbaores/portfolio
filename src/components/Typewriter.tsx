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

  // Keep latest prop values accessible inside the long-lived timer callbacks
  const textsRef = useRef(texts);
  const speedRef = useRef(speed);
  const eraseRef = useRef(eraseSpeed);
  const pauseRef = useRef(pauseMs);
  useEffect(() => { textsRef.current = texts; }, [texts]);
  useEffect(() => { speedRef.current = speed; }, [speed]);
  useEffect(() => { eraseRef.current = eraseSpeed; }, [eraseSpeed]);
  useEffect(() => { pauseRef.current = pauseMs; }, [pauseMs]);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typewriter state machine — runs once on mount intentionally;
  // the texts/speed/eraseSpeed/pauseMs props are read at call-time via refs
  // so changing them mid-render would restart from a clean state automatically.
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentText = textsRef.current[indexRef.current % textsRef.current.length];
      const phase = phaseRef.current;

      if (phase === 'typing') {
        charRef.current += 1;
        setDisplayed(currentText.slice(0, charRef.current));
        if (charRef.current >= currentText.length) {
          phaseRef.current = 'pausing';
          timeoutId = setTimeout(tick, pauseRef.current);
        } else {
          timeoutId = setTimeout(tick, speedRef.current);
        }
      } else if (phase === 'pausing') {
        phaseRef.current = 'erasing';
        timeoutId = setTimeout(tick, eraseRef.current);
      } else if (phase === 'erasing') {
        charRef.current -= 1;
        setDisplayed(currentText.slice(0, charRef.current));
        if (charRef.current <= 0) {
          phaseRef.current = 'switching';
          timeoutId = setTimeout(tick, 300);
        } else {
          timeoutId = setTimeout(tick, eraseRef.current);
        }
      } else {
        // switching
        indexRef.current += 1;
        charRef.current = 0;
        phaseRef.current = 'typing';
        timeoutId = setTimeout(tick, speedRef.current);
      }
    };

    timeoutId = setTimeout(tick, speedRef.current);
    return () => clearTimeout(timeoutId);
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

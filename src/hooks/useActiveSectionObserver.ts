import { useState, useEffect, RefObject } from 'react';

interface Section {
  id: string;
  ref: RefObject<HTMLElement>;
}

export const useActiveSectionObserver = (sections: Section[]): string => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = section.ref.current;
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return activeSection;
};

export default useActiveSectionObserver;
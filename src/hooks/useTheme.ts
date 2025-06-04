import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if theme is saved in local storage
    const savedTheme = localStorage.getItem('theme');
    
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Return true if saved theme is dark or if no saved theme and user prefers dark
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  // Update the DOM when theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleTheme };
};

export default useTheme;
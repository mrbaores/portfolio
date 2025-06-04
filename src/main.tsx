import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Apply dark mode from localStorage if saved
const savedTheme = localStorage.getItem('theme');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
  document.documentElement.classList.add('dark');
}

// Update page title
document.title = "Thomas Dupont | Portfolio";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
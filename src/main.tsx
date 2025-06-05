import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ ajout
import App from './App.tsx';
import './index.css';

// Appliquer le dark mode depuis localStorage si présent
const savedTheme = localStorage.getItem('theme');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
  document.documentElement.classList.add('dark');
}

// Titre de la page
document.title = "Mohamed Bouremani | Portfolio"; // ✅ Ton nom ici

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio/">  {/* ✅ très important */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
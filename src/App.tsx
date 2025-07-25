import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Citation from './components/Citation';
import TicTacToe from './components/TicTacToe';
import Loader from './components/Loader';

import { useActiveSectionObserver } from './hooks/useActiveSectionObserver';

function App() {
  // State pour afficher/cacher le loader
  const [loading, setLoading] = useState(true);

  // State pour afficher/cacher le jeu
  const [showGame, setShowGame] = useState(false);

  // Timer pour enlever le loader au bout de 2 secondes
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Create refs for each section
  const homeRef = useRef<HTMLElement>(null);
  const projetsRef = useRef<HTMLElement>(null);
  const competencesRef = useRef<HTMLElement>(null);
  const aproposRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Track active section for navigation
  const sections = [
    { id: 'home', ref: homeRef },
    { id: 'projets', ref: projetsRef },
    { id: 'competences', ref: competencesRef },
    { id: 'apropos', ref: aproposRef },
    { id: 'contact', ref: contactRef }
  ];

  const activeSection = useActiveSectionObserver(sections);
  const [activeSectionState, setActiveSectionState] = useState(activeSection);

  // Update state when hook returns new active section
  useEffect(() => {
    setActiveSectionState(activeSection);
  }, [activeSection]);

  if (loading) {
    return <Loader />;  // Affiche le loader tant que loading = true
  }

  return (
    <div className="font-sans relative">
      <Navbar 
        activeSection={activeSectionState}
        setActiveSection={setActiveSectionState}
      />
      <main>
        <Home id="home" />
        <Citation />
        <Projects id="projets" />
        <Skills id="competences" />
        <About id="apropos" />
        <Contact id="contact" />
      </main>
      <Footer />

      {/* Bouton discret pour activer le jeu */}
      <button
        onClick={() => setShowGame(true)}
        className="fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full shadow-lg opacity-30 hover:opacity-100 transition"
        title="Un petit jeu secret..."
      >
        🎮
      </button>

      {/* Modal du jeu Morpion */}
      {showGame && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={() => setShowGame(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl font-bold"
              title="Fermer"
            >
              ×
            </button>
            <TicTacToe />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

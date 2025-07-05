import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Citation from './components/Citation'; // Import du composant Citation
import { useActiveSectionObserver } from './hooks/useActiveSectionObserver';

function App() {
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
  React.useEffect(() => {
    setActiveSectionState(activeSection);
  }, [activeSection]);

  return (
    <div className="font-sans">
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
    </div>
  );
}

export default App;

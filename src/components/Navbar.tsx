import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-section py-0">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Portfolio
          </a>
          
          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {['home', 'projets', 'competences', 'apropos', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section === 'home' ? 'Accueil' : 
                 section === 'projets' ? 'Projets' : 
                 section === 'competences' ? 'Compétences' : 
                 section === 'apropos' ? 'À propos' : 'Contact'}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            {['home', 'projets', 'competences', 'apropos', 'contact'].map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  activeSection === section 
                    ? 'bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                } transition-colors duration-200 animate-fade-in animate-delay-${index * 100}`}
              >
                {section === 'home' ? 'Accueil' : 
                 section === 'projets' ? 'Projets' : 
                 section === 'competences' ? 'Compétences' : 
                 section === 'apropos' ? 'À propos' : 'Contact'}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
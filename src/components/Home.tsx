import React, { useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import photoMohamed from '../asset/photo-mohamed.jpg';

interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id={id}
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className={`container-section text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-500 mb-6 shadow-lg">
            <img
               src={photoMohamed}
               alt="Photo de Mohamed"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4"> M.Bouremani
            <span className="inline-block ml-2 animate-wave">👋</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Étudiant en informatique
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg max-w-2xl mx-auto mb-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-blue-600 mb-2 text-center">
             💼 Alternance dans le domaine de la Data
              </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-center">
             <strong>📍 Lieu :</strong> Île-de-France<br />
            <strong>🗓️ Période :</strong> Septembre 2025 → Août 2027 (24 mois)<br />
            <strong>🏢 Rythme :</strong><br />
            • 1ère année : <em>2 jours entreprise</em> (lundi & mardi)<br />
            • 2e année : <em>3 jours entreprise</em> (mercredi → vendredi)<br />
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#contact" className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a 
              href="#projets" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Voir mes projets
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Me contacter
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a 
            href="#projets"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Défiler vers le bas"
          >
            <ChevronDown size={32} className="text-gray-400 dark:text-gray-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
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
      className="min-h-screen flex items-center justify-center relative hero-bg"
    >
      <div className={`container-section text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="mb-8">
          <div className="animate-float mx-auto w-40 h-40 gradient-ring mb-6 shadow-2xl shadow-violet-500/20">
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-950">
              <img
                 src={photoMohamed}
                 alt="Photo de Mohamed Adem Bouremani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">M.Bouremani</span>
            <span className="inline-block ml-2 animate-wave">👋</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Étudiant en informatique
          </h2>
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-2xl mx-auto mb-6 border border-violet-200/50 dark:border-violet-800/30">
            <h3 className="text-xl font-semibold mb-2 text-center gradient-text">
              💼 Alternance dans le domaine de la Data/IA
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
            <a href="https://github.com/mrbaores" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 hover:bg-violet-100 dark:bg-slate-800 dark:hover:bg-violet-900/40 transition-colors hover:text-violet-600 dark:hover:text-violet-400 border border-gray-200 dark:border-gray-700">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-adem-bouremani-ba7a88330/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 hover:bg-violet-100 dark:bg-slate-800 dark:hover:bg-violet-900/40 transition-colors hover:text-violet-600 dark:hover:text-violet-400 border border-gray-200 dark:border-gray-700">
              <Linkedin size={22} />
            </a>
            <a href="#contact" className="p-3 rounded-full bg-gray-100 hover:bg-violet-100 dark:bg-slate-800 dark:hover:bg-violet-900/40 transition-colors hover:text-violet-600 dark:hover:text-violet-400 border border-gray-200 dark:border-gray-700">
              <Mail size={22} />
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a 
              href="#projets" 
              className="btn btn-primary text-base px-6 py-3"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Voir mes projets
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary text-base px-6 py-3"
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
            <ChevronDown size={32} className="text-violet-400 dark:text-violet-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Typewriter from './Typewriter';
import photoMohamed from '../asset/photo-mohamed.jpg';

interface HomeProps {
  id: string;
}

// ---------- Animated counter ----------
interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  active: boolean;
}

const CountUp: React.FC<CountUpProps> = ({ end, suffix = '', duration = 1400, active }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    setCount(0);
    const startTime = Date.now();
    const frame = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [active, end, duration]);
  return <>{count}{suffix}</>;
};

// ---------- Stats data ----------
const STATS = [
  { value: 8,  suffix: '',  label: 'Projets réalisés', icon: '🚀' },
  { value: 10, suffix: '+', label: 'Compétences tech', icon: '⚙️' },
  { value: 2,  suffix: '',  label: 'Certifications',   icon: '🏆' },
  { value: 24, suffix: 'm', label: 'Durée alternance', icon: '📅' },
];

const Home: React.FC<HomeProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, once: true });

  return (
    <section 
      id={id}
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative hero-bg"
    >
      <div className={`container-section text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="mb-8">
          {/* Avatar */}
          <div className="animate-float mx-auto w-40 h-40 gradient-ring mb-6 shadow-2xl shadow-violet-500/20">
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-950">
              <img
                 src={photoMohamed}
                 alt="Photo de Mohamed Adem Bouremani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            <span className="gradient-text">M.Bouremani</span>
            <span className="inline-block ml-2 animate-wave">👋</span>
          </h1>

          {/* Typewriter subtitle */}
          <h2 className="text-xl md:text-2xl text-violet-600 dark:text-violet-400 font-mono mb-6 min-h-[2rem]">
            <Typewriter
              texts={[
                'Étudiant BUT Informatique',
                'Futur développeur Data / IA',
                'Passionné IoT & Cybersécurité',
                'Open to alternance 2025–2027',
              ]}
              speed={70}
              eraseSpeed={35}
              pauseMs={2000}
            />
          </h2>

          {/* Alternance badge */}
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-2xl mx-auto mb-6 border border-violet-200/50 dark:border-violet-800/30">
            <h3 className="text-xl font-semibold mb-2 text-center gradient-text">
              💼 Alternance dans le domaine de la Data / IA
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-center">
              <strong>📍 Lieu :</strong> Île-de-France<br />
              <strong>🗓️ Période :</strong> Septembre 2025 → Août 2027 (24 mois)<br />
              <strong>🏢 Rythme :</strong><br />
              • 1ère année : <em>2 jours entreprise</em> (lundi & mardi)<br />
              • 2e année : <em>3 jours entreprise</em> (mercredi → vendredi)<br />
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-6">
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

          {/* CTA buttons */}
          <div className="flex justify-center gap-4 mb-10">
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

          {/* Animated stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-violet-200/40 dark:border-violet-800/30 shadow-md hover:shadow-violet-500/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold gradient-text">
                  <CountUp end={stat.value} suffix={stat.suffix} active={isVisible} />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
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
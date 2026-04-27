import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-gray-300 py-12 border-t border-violet-900/20">
      <div className="container-section py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Mohamed Bouremani</h3>
            <p className="mb-4 text-gray-400">
              Étudiant passionné en informatique et développeur web créatif, je conçois des expériences numériques modernes et intuitives.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/mrbaores" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-adem-bouremani-ba7a88330/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mohamed.bouremani@universite-paris-saclay.fr" className="hover:text-violet-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '#home' },
                { name: 'Projets', href: '#projets' },
                { name: 'Compétences', href: '#competences' },
                { name: 'À propos', href: '#apropos' },
                { name: 'Contact', href: '#contact' },
              ].map(item => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="hover:text-violet-400 transition-colors text-gray-400"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <p className="mb-2 text-gray-400">Paris, France</p>
            <p className="mb-2 text-gray-400 break-all">mohamed.bouremani@universite-paris-saclay.fr</p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center text-gray-500 text-sm">
            © {currentYear} M.Bouremani. Tous droits réservés. Créé avec <Heart size={14} className="mx-1 text-red-500" /> en React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
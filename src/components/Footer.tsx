import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container-section py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Mohamed Bouremani</h3>
            <p className="mb-4">
              Étudiant passionné en informatique et développeur web créatif, je conçois des expériences numériques modernes et intuitives.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mohamed-adem-bouremani-ba7a88330/" className="hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-adem-bouremani-ba7a88330/" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mohamed.bouremani@universite-paris-saclay.fr" className="hover:text-blue-400 transition-colors">
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
                    className="hover:text-blue-400 transition-colors"
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
            <p className="mb-2">Paris, France</p>
            <p className="mb-2">mohamed.bouremani@universite-paris-saclay.fr</p>
            
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center">
            © {currentYear} M.Bouremani. Tous droits réservés. Créé avec <Heart size={16} className="mx-1 text-red-500" /> en React & Tailwind à l'aide de codex.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
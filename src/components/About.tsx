import React, { useRef } from 'react';
import { education } from '../data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id={id}
      ref={sectionRef} 
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="container-section">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          À Propos de Moi
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className={`mb-12 ${isVisible ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-4">Biographie</h3>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <p className="mb-4">
                Passionné d'informatique depuis mon plus jeune âge, je suis actuellement étudiant en but informatique  
                à l’IUT d’Orsay , Université de Paris-Saclay.
              </p>
              <p className="mb-4">
                Je me spécialise dans le domaine de la data et ia , avec une 
                attention particulière portée à l'expérience utilisateur et à la performance. Mon approche 
                combine créativité et rigueur technique pour concevoir des solutions innovantes.
              </p>
              <p>
                En dehors de mes études, je contribue activement à des projets open-source et j'essaye d apprendre 
                pour élargir mes compétences dans le domaine de la data et rester à la pointe des nouvelles technologies.
              </p>
            </div>
          </div>
          
          <div className={isVisible ? 'animate-fade-in animate-delay-200' : 'opacity-0'}>
            <h3 className="text-2xl font-bold mb-4">Parcours Académique</h3>
            <div className="timeline-container">
              {education.map((edu, index) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-content bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <GraduationCap size={16} className="mr-1" />
                      <span className="text-sm">{edu.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{edu.startDate} - {edu.endDate}</span>
                    </div>
                    <p className="text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
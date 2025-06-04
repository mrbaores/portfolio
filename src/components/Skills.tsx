import React, { useRef, useEffect, useState } from 'react';
import { skills } from '../data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SkillsProps {
  id: string;
}

const Skills: React.FC<SkillsProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Get skills categories
  const categories = [
    { id: 'all', name: 'Toutes' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'other', name: 'Autres' }
  ];
  
  // Filter skills based on category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className="bg-white dark:bg-gray-900"
    >
      <div className="container-section">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Compétences
        </h2>
        <p className={`section-subtitle ${isVisible ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}>
          Mes compétences techniques acquises au cours de ma formation et de mes projets.
        </p>
        
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                ${activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          {filteredSkills.map((skill, index) => (
            <SkillBar 
              key={skill.name}
              skill={skill}
              isVisible={isVisible}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
    color: string;
  };
  isVisible: boolean;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, isVisible, delay }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    // Animate width when visible
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
      
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isVisible, skill.level, delay]);
  
  return (
    <div className={`mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${skill.color}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
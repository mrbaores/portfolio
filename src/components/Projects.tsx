import React, { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ProjectsProps {
  id: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  const [filter, setFilter] = useState<string>('all');
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className="bg-gray-100/80 dark:bg-slate-900"
    >
      <div className="container-section">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Mes Projets
        </h2>
        <span className={`section-title-underline ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} />
        <p className={`section-subtitle ${isVisible ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}>
          Découvrez une sélection de mes projets les plus significatifs en développement web et applications.
        </p>
        
        <div className={`flex flex-wrap justify-center gap-2 mb-10 ${isVisible ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
          <button
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all
              ${filter === 'all' 
                ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'}`}
            onClick={() => setFilter('all')}
          >
            Tous
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all
                ${filter === tag 
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isVisible={isVisible} 
              delay={300 + index * 100} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isVisible, delay }) => {
  return (
    <div 
      className={`project-card rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-md 
        ${isVisible ? `animate-fade-in animate-delay-${delay}` : 'opacity-0'}`}
    >
      <div className="h-48 overflow-hidden relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center" role="img" aria-label="Image du projet non disponible">
            <span aria-hidden="true" className="text-4xl">🚀</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span 
              key={`${project.id}-${tag}`} 
              className="px-2 py-1 bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 text-xs font-medium rounded-full border border-violet-200/50 dark:border-violet-700/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink size={16} className="mr-1" /> Démo
            </a>
          )}
          {project.codeUrl && (
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Github size={16} className="mr-1" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
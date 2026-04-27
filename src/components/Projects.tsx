import React, { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
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
  
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();
  
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
          Découvrez une sélection de mes projets les plus significatifs en développement, data et IoT.
        </p>
        
        {/* Filter tags */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 ${isVisible ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
          <button
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all
              ${filter === 'all' 
                ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'}`}
            onClick={() => setFilter('all')}
          >
            Tous ({projects.length})
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
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Max characters shown before "Lire plus"
const DESC_LIMIT = 140;

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(
    cardRef as React.RefObject<Element>,
    { threshold: 0.15, once: true }
  );
  const [expanded, setExpanded] = useState(false);

  const needsTruncation = project.description.length > DESC_LIMIT;
  const shownDesc = needsTruncation && !expanded
    ? project.description.slice(0, DESC_LIMIT).trimEnd() + '…'
    : project.description;

  // A project is "featured" when its data entry has featured: true
  const isFeatured = project.featured === true;

  return (
    <div
      ref={cardRef}
      className={`project-card rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-md flex flex-col
        ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden relative flex-shrink-0">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        ) : (
          <div
            className="w-full h-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center"
            role="img"
            aria-label="Image du projet non disponible"
          >
            <span aria-hidden="true" className="text-5xl">🚀</span>
          </div>
        )}
        {/* Featured badge */}
        {isFeatured && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            ⭐ Projet phare
          </span>
        )}
        {/* In progress badge */}
        {project.inProgress && (
          <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
            ⚙️ En cours
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2 capitalize">{project.title}</h3>

        {/* Description with expand/collapse */}
        <p className="text-gray-600 dark:text-gray-300 mb-1 text-sm leading-relaxed flex-1">
          {shownDesc}
        </p>
        {needsTruncation && (
          <button
            onClick={() => setExpanded(e => !e)}
            className="flex items-center gap-1 text-violet-600 dark:text-violet-400 text-xs font-medium mb-3 hover:underline focus:outline-none self-start"
            aria-expanded={expanded}
          >
            {expanded ? <><ChevronUp size={14} /> Réduire</> : <><ChevronDown size={14} /> Lire plus</>}
          </button>
        )}
        {!needsTruncation && <div className="mb-3" />}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span 
              key={`${project.id}-${tag}`} 
              className="px-2 py-0.5 bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 text-xs font-medium rounded-full border border-violet-200/50 dark:border-violet-700/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary text-xs"
            >
              <ExternalLink size={14} className="mr-1" /> Démo
            </a>
          )}
          {project.codeUrl && (
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary text-xs"
            >
              <Github size={14} className="mr-1" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
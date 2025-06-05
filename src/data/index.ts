import { Project, Skill, Education } from '../types';
import imgJeuVideo from '../asset/jeu.jpg';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'AC-Motor',
    description:
      "Conception et modélisation d’une base de données relationnelle pour AC-Motors, avec MySQL pour la gestion des tables et l'optimisation des requêtes, afin de gérer efficacement produits, clients et commandes.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ['Mysql', 'mocodo', 'looping','SQLite'],
    demoUrl: 'https://example.com/demo1',
    codeUrl: 'https://github.com/example/project1',
  },
  {
    id: 'project-2',
    title: 'Développement Jeu Vidéo',
    description:
      "Concevoir un jeu 2D intégrant la gestion des personnages, des ennemis et des collisions en c++ , Nous avons appris à gérer les entités, les collisions, et vu l’importance des mathématiques dans les jeux.",
    image: imgJeuVideo,
    tags: ['C++', 'POO', 'Jeux', 'iA','CodeBlocks'],
    demoUrl: 'https://example.com/demo2',
    codeUrl: 'https://github.com/example/project2',
  },
  {
    id: 'project-3',
    title: 'site web pour un escape game ',
    description:
      "Développement d’un site responsive en HTML/CSS, utilisant Flexbox pour une navigation fluide et une présentation optimale des services de l'agence , des services .",
    image: "https://images.pexels.com/photos/7948060/pexels-photo-7948060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ['html', 'css', 'Visual-code'],
    demoUrl: 'https://example.com/demo3',
    codeUrl: 'https://github.com/example/project3',
  },
  {
    id: 'project-4',
    title: 'Installation d’un poste de travail - Debian',
    description:
      "Installation et configuration d’un poste sur Raspberry Pi avec système d’exploitation, SQL, Python et packages adaptés, renforçant mes compétences en systèmes embarqués et outils techniques.",
    image: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ['linux', 'mariadb', 'sql', 'protocole ssh'],
    demoUrl: 'https://example.com/demo4',
    codeUrl: 'https://github.com/example/project4',
  },
];

export const skills: Skill[] = [
  { name: 'HTML/CSS', level: 90, category: 'frontend', color: 'bg-orange-500' },
  { name: 'JavaScript', level: 85, category: 'frontend', color: 'bg-yellow-500' },
  { name: 'c++', level: 70, category: 'frontend', color: 'bg-blue-500' },
  { name: 'java', level: 60, category: 'frontend', color: 'bg-blue-600' },
  { name: 'Python', level: 70, category: 'backend', color: 'bg-blue-800' },
  { name: 'SQL', level: 75, category: 'backend', color: 'bg-blue-400' },
  { name: 'MongoDB', level: 70, category: 'backend', color: 'bg-green-600' },
  { name: 'Git', level: 85, category: 'other', color: 'bg-orange-600' },
  { name: 'Figma', level: 70, category: 'other', color: 'bg-purple-500' },
  { name: 'Jupyter', level: 60, category: 'other', color: 'bg-purple-500'}

];

export const education: Education[] = [
  
  {
    id: 'edu-3',
    degree: " BUT en Informatique",
    institution: " iut Orsay , Université de Paris-Saclay",
    location: "Orsay, France",
    startDate: "2024",
    endDate: "2027",
    description: "Formation généraliste en informatique couvrant algorithmique, programmation, réseaux et bases de données."
  },
  {
    id: 'edu-2',
    degree: "Baccalauréat Scientifique",
    institution: "Lycée  Saint-Gabriel ",
    location: "Bagneux, France",
    startDate: "2021",
    endDate: "2024",
    description: "Option Mathématiques et physique-chimie."
  },
  {
    id: 'edu-1',
    degree: "Brevet des collèges mention Bien",
    institution: "college Saint-Gabriel",
    location: "Bagneux, France",
    startDate: "2018",
    endDate: "2021",
    description: "Premier debut à la programation : scratch "
  },
];
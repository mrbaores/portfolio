import { Project, Skill, Education } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Application de Gestion de Tâches',
    description:
      "Une application complète de gestion de tâches avec authentification, notifications et synchronisation en temps réel. Développée avec React, Node.js et MongoDB.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    demoUrl: 'https://example.com/demo1',
    codeUrl: 'https://github.com/example/project1',
  },
  {
    id: 'project-2',
    title: 'Portfolio E-commerce',
    description:
      "Plateforme e-commerce avec paiement sécurisé, gestion des stocks et interface admin. Implémentée avec Vue.js, Laravel et PostgreSQL.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ['Vue.js', 'Laravel', 'PostgreSQL', 'Stripe API', 'Docker'],
    demoUrl: 'https://example.com/demo2',
    codeUrl: 'https://github.com/example/project2',
  },
  {
    id: 'project-3',
    title: 'Système de Réservation',
    description:
      "Un système de réservation en ligne pour hôtels et restaurants avec gestion des disponibilités en temps réel. Construit avec React, GraphQL et PostgreSQL.",
    image: "https://images.pexels.com/photos/7948060/pexels-photo-7948060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ['React', 'GraphQL', 'PostgreSQL', 'Apollo', 'AWS'],
    demoUrl: 'https://example.com/demo3',
    codeUrl: 'https://github.com/example/project3',
  },
  {
    id: 'project-4',
    title: 'Application de Méditation',
    description:
      "Application mobile offrant des séances de méditation guidée, suivi de progression et statistiques personnalisées. Développée avec React Native et Firebase.",
    image: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ['React Native', 'Firebase', 'Redux', 'Audio API', 'Expo'],
    demoUrl: 'https://example.com/demo4',
    codeUrl: 'https://github.com/example/project4',
  },
];

export const skills: Skill[] = [
  { name: 'HTML/CSS', level: 90, category: 'frontend', color: 'bg-orange-500' },
  { name: 'JavaScript', level: 85, category: 'frontend', color: 'bg-yellow-500' },
  { name: 'React', level: 80, category: 'frontend', color: 'bg-blue-500' },
  { name: 'TypeScript', level: 75, category: 'frontend', color: 'bg-blue-600' },
  { name: 'Node.js', level: 80, category: 'backend', color: 'bg-green-500' },
  { name: 'Express', level: 75, category: 'backend', color: 'bg-gray-500' },
  { name: 'Python', level: 70, category: 'backend', color: 'bg-blue-800' },
  { name: 'Django', level: 65, category: 'backend', color: 'bg-green-700' },
  { name: 'SQL', level: 75, category: 'backend', color: 'bg-blue-400' },
  { name: 'MongoDB', level: 70, category: 'backend', color: 'bg-green-600' },
  { name: 'Git', level: 85, category: 'other', color: 'bg-orange-600' },
  { name: 'Docker', level: 65, category: 'other', color: 'bg-blue-700' },
  { name: 'AWS', level: 60, category: 'other', color: 'bg-yellow-600' },
  { name: 'UI/UX Design', level: 70, category: 'other', color: 'bg-purple-500' },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: "Master en Informatique",
    institution: "Université de Paris-Saclay",
    location: "Paris, France",
    startDate: "2022",
    endDate: "2024",
    description: "Spécialisation en Intelligence Artificielle et Science des Données. Projets majeurs en apprentissage profond et analyse de données massives."
  },
  {
    id: 'edu-2',
    degree: "Licence en Informatique",
    institution: "Université Claude Bernard Lyon 1",
    location: "Lyon, France",
    startDate: "2019",
    endDate: "2022",
    description: "Formation généraliste en informatique couvrant algorithmique, programmation, réseaux et bases de données. Participation active aux hackathons universitaires."
  },
  {
    id: 'edu-3',
    degree: "Baccalauréat Scientifique",
    institution: "Lycée International de Lyon",
    location: "Lyon, France",
    startDate: "2016",
    endDate: "2019",
    description: "Option Mathématiques et Sciences de l'Ingénieur. Mention Très Bien avec félicitations du jury."
  }
];
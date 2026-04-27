import { Project, Skill, Education } from '../types';
import imgJeuVideo from '../asset/jeu.jpg';
import ACMOTORS from '../asset/A-C-MOTORS.jpg';
import raspi from '../asset/pi.jpg';
import lunnix from '../asset/linux.jpg';
import igbd from '../asset/igdb.jpg';
import domotique from '../asset/domotique.jpg';

export const projects: Project[] = [
  {
    id: 'projet-8',
    title: 'Application de reconnaissance faciale (IA & accessibilité)',
    description:
      "Application Python utilisant MediaPipe et OpenCV pour aider les personnes en situation de handicap à composer des mots grâce aux mouvements de leur tête. Hochement de tête pour sélectionner des lettres défilantes, synthèse vocale pour lire le résultat.",
    image: '',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'pyttsx3', 'IA'],
    demoUrl: '',
    codeUrl: 'https://github.com/mrbaores/reconnaissance-facial',
    featured: true,
    inProgress: true,
  },
  {
    id: 'projet-6',
    title: 'Exploitation de base de données IGDB',
    description:
      "Gestion complète d'une base de données inspirée d'IGDB : modélisation, alimentation et requêtes SQL/PL-SQL. Analyse statistique avec Python (pandas, matplotlib) et tableaux de bord interactifs sous Jupyter Notebook.",
    image: igbd,
    tags: ['Python', 'SQL', 'PL/SQL', 'pandas', 'matplotlib', 'Jupyter'],
    demoUrl: '',
    codeUrl: 'https://github.com/mrbaores/Projet-S104-Base-Donnee',
    featured: true,
  },
  {
    id: 'projet-7',
    title: 'Domotique complète avec Home Assistant',
    description:
      "Déploiement d'une solution domotique complète via Home Assistant : protocoles Zigbee, Wi-Fi, MQTT et Node-RED pour automatiser éclairage, capteurs et équipements connectés.",
    image: domotique,
    tags: ['IoT', 'Zigbee', 'MQTT', 'Node-RED', 'Home Assistant'],
    demoUrl: '',
    codeUrl: 'https://github.com/mrbaores/Projet-Domotique-Personel',
  },
  {
    id: 'projet-5',
    title: 'Infrastructure réseau Linux complète',
    description:
      "Installation d'un serveur Linux (persistant/volatile), configuration réseau complète : DHCP, DNS, Apache, SSH sécurisé par clés, routage inter-sous-réseaux et connectivité Internet vérifiée.",
    image: lunnix,
    tags: ['Linux', 'SSH', 'DNS', 'DHCP', 'TCP/IP', 'Apache'],
    demoUrl: '',
    codeUrl: 'https://github.com/mrbaores/S203-RESAUX',
  },
  {
    id: 'project-4',
    title: 'Poste de travail sur Raspberry Pi — Debian',
    description:
      "Installation et configuration d'un poste embarqué sur Raspberry Pi : OS Debian, MariaDB, Python, connexion SSH. Renforcement des compétences en systèmes embarqués.",
    image: raspi,
    tags: ['Linux', 'MariaDB', 'SQL', 'SSH', 'Raspberry Pi'],
    demoUrl: 'https://www.lri.fr/~zema/S103/S103.html',
    codeUrl: '',
  },
  {
    id: 'project-1',
    title: 'AC-Motor — Base de données relationnelle',
    description:
      "Conception et modélisation d'une base de données MySQL pour AC-Motors : gestion des produits, clients et commandes, optimisation des requêtes, diagrammes Mocodo/Looping.",
    image: ACMOTORS,
    tags: ['MySQL', 'SQLite', 'Mocodo', 'Looping'],
    demoUrl: '',
    codeUrl: '',
  },
  {
    id: 'project-2',
    title: "Développement d'un jeu vidéo 2D en C++",
    description:
      "Jeu 2D intégrant gestion des personnages, ennemis et collisions en C++ orienté objet. Apprentissage des mathématiques pour les jeux (vecteurs, collisions AABB) avec CodeBlocks.",
    image: imgJeuVideo,
    tags: ['C++', 'POO', 'IA', 'CodeBlocks'],
    demoUrl: '',
    codeUrl: '',
  },
  {
    id: 'project-3',
    title: 'Site web pour un escape game',
    description:
      "Site responsive HTML/CSS pour une agence d'escape game : mise en page Flexbox, navigation fluide, présentation des services.",
    image:
      'https://images.pexels.com/photos/7948060/pexels-photo-7948060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['HTML', 'CSS', 'Flexbox', 'Responsive'],
    demoUrl: '',
    codeUrl: '',
  },
];

export const skills: Skill[] = [
  { name: 'HTML / CSS', level: 90, category: 'frontend', color: 'bg-orange-500' },
  { name: 'C++', level: 70, category: 'frontend', color: 'bg-blue-500' },
  { name: 'Java', level: 60, category: 'frontend', color: 'bg-blue-600' },
  { name: 'React / TypeScript', level: 55, category: 'frontend', color: 'bg-cyan-500' },
  { name: 'Python', level: 75, category: 'backend', color: 'bg-blue-800' },
  { name: 'pandas / matplotlib', level: 65, category: 'backend', color: 'bg-yellow-500' },
  { name: 'OpenCV / MediaPipe', level: 60, category: 'backend', color: 'bg-green-500' },
  { name: 'SQL / PL-SQL', level: 75, category: 'backend', color: 'bg-blue-400' },
  { name: 'MariaDB / MySQL', level: 70, category: 'backend', color: 'bg-green-600' },
  { name: 'Git', level: 85, category: 'other', color: 'bg-orange-600' },
  { name: 'Figma', level: 70, category: 'other', color: 'bg-purple-500' },
  { name: 'Jupyter Notebook', level: 65, category: 'other', color: 'bg-purple-500' },
  { name: 'IoT / Home Assistant', level: 65, category: 'electronique', color: 'bg-blue-600' },
  { name: 'Zigbee / MQTT', level: 60, category: 'electronique', color: 'bg-teal-500' },
];

export const education: Education[] = [
  {
    id: 'edu-3',
    degree: 'BUT en Informatique',
    institution: 'IUT Orsay, Université de Paris-Saclay',
    location: 'Orsay, France',
    startDate: '2024',
    endDate: '2027',
    description:
      'Formation généraliste en informatique couvrant algorithmique, programmation, réseaux et bases de données.',
  },
  {
    id: 'edu-2',
    degree: 'Baccalauréat Scientifique',
    institution: 'Lycée Saint-Gabriel',
    location: 'Bagneux, France',
    startDate: '2021',
    endDate: '2024',
    description: 'Option Mathématiques et Physique-Chimie.',
  },
  {
    id: 'edu-1',
    degree: 'Brevet des collèges — mention Bien',
    institution: 'Collège Saint-Gabriel',
    location: 'Bagneux, France',
    startDate: '2018',
    endDate: '2021',
    description: 'Premiers pas en programmation avec Scratch.',
  },
];

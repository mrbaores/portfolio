import { Project, Skill, Education } from '../types';
import imgJeuVideo from '../asset/jeu.jpg';
import ACMOTORS from '../asset/A-C-MOTORS.jpg';
import raspi from '../asset/pi.jpg';
import lunnix from '../asset/linux.jpg';
import igbd from '../asset/igdb.jpg';
import domotique from '../asset/domotique.jpg';


export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'AC-Motor',
    description:
      "Conception et modélisation d’une base de données relationnelle pour AC-Motors, avec MySQL pour la gestion des tables et l'optimisation des requêtes, afin de gérer efficacement produits, clients et commandes.",
    image: ACMOTORS,
    tags: ['MySQl', 'mocodo', 'looping','SQLite'],
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
    description:"Développement d’un site responsive en HTML/CSS, utilisant Flexbox pour une navigation fluide et une présentation optimale des services de l'agence , des services .",
    image: "https://images.pexels.com/photos/7948060/pexels-photo-7948060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ['html', 'css', 'Visual-code'],
    demoUrl: 'https://example.com/demo3',
    codeUrl: 'https://github.com/example/project3',
  },
  {
    id: 'project-4',
    title: 'Installation d’un poste de travail - Debian',
    description:"Installation et configuration d’un poste sur Raspberry Pi avec système d’exploitation, SQL, Python et packages adaptés, renforçant mes compétences en systèmes embarqués et outils techniques.",
    image:raspi,
    tags: ['linux', 'mariadb', 'sql', 'protocole ssh'],
    demoUrl: 'https://www.lri.fr/~zema/S103/S103.html',
    codeUrl: 'https://github.com/example/project4',
  },
  {   id :'projet-5',
    title:'configuration en linux de composants informatiques ',
    description:'installation et la configuration d’un serveur Linux, en mode persistant ou volatile selon les besoins, ainsi que la mise en place complète de l’infrastructure réseau. Cela inclut la configuration des routeurs, des interfaces réseau (adresses IP, passerelles, routes statiques), l’implémentation d’un serveur DHCP pour l’attribution dynamique des adresses IP, d’un serveur DNS pour la résolution des noms de domaine internes, et d’un serveur Web Apache pour l’hébergement des sites d’équipe. J’ai également mis en place des connexions SSH sécurisées par clés, configuré le routage inter-sous-réseaux et vers Internet, et vérifié la connectivité complète entre toutes les machines du réseau.',
    image: lunnix,
    tags:['protocole',' ssh','dns','dhcp','UDP','TC/IP'],
    demoUrl: '',
    codeUrl: 'https://github.com/mrbaores/S203-RESAUX',
  },
  {
    id:'projet-6',
    title:'Exploitation de Base de Données ',
    description:'Projet portant sur l exploitation dune base de données inspirée du site IGDB.  Le projet se divise en deux volets complémentaires : Gestion de la base de données : conception, modélisation, alimentation et interrogation de la base à l’aide du langage SQL et de requêtes PL/SQL. Analyse statistique et tableau de bord : utilisation de Jupyter Notebook avec Python, pandas, matplotlib et d’autres bibliothèques de visualisation pour le traitement des données et la création de tableaux de bord interactifs permettant une analyse claire des tendances et des données issues de la base.',
    image: igbd,
    tags:['jupyter','python','SQL/PLSQL'],
    demoUrl: '',
    codeUrl: 'https://github.com/mrbaores/Projet-S104-Base-Donnee',
  
  },
  { 
    id:'projet-7',
    title:'Electronique/informatique',
    description:'configuration d une domotique complete à laide de Home Asistant, configuration à la aide protocole (Zigbe,wifi, MQtt), pour automatiser l eclarage , les capteurs et autres equipements informatque ',
    image :domotique,
    tags:['ioT','Zigbee','Node-RED', 'Securite-Iot'],
    codeUrl:'https://github.com/mrbaores/Projet-Domotique-Personel',
    demoUrl:'',

}, 
 {
  id:'projet-8',
  title:'Application de reconnaisance faciale (en cours)',
  description:' Creation une application Python utilise MediaPipe et OpenCV pour permettre aux personnes en situation de handicap de composer des mots grâce aux mouvements de leur tête. Elle détecte un hochement pour sélectionner des lettres défilantes et utilise une synthèse vocale pour lire le mot final à haute voix.', 
  image:'',
  tags:['python','cv2','mediapipe', 'pytthx' ],
  demoUrl: '',
  codeUrl: 'https://github.com/mrbaores/reconnaissance-facial',
}
];

export const skills: Skill[] = [
  { name: 'HTML', level: 90, category: 'frontend', color: 'bg-orange-500' },
  { name: 'CSS', level: 85, category: 'frontend', color: 'bg-yellow-500' },
  { name: 'c++', level: 70, category: 'frontend', color: 'bg-blue-500' },
  { name: 'java', level: 60, category: 'frontend', color: 'bg-blue-600' },
  { name: 'Python', level: 70, category: 'backend', color: 'bg-blue-800' },
  { name: 'SQL', level: 75, category: 'backend', color: 'bg-blue-400' },
  { name: 'Mariadb', level: 70, category: 'backend', color: 'bg-green-600' },
  { name: 'Git', level: 85, category: 'other', color: 'bg-orange-600' },
  { name: 'Figma', level: 70, category: 'other', color: 'bg-purple-500' },
  { name: 'Jupyter', level: 60, category: 'other', color: 'bg-purple-500'},
  { name:'Iot automate ', level : 60 , category:'electronique',color:'bg-blue-600' },

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
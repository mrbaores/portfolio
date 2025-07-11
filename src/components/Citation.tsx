import React, { useState, useEffect } from 'react';

const citations = [
  {
    text: "Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme.",
    author: "Winston Churchill"
  },
  {
    text: "La seule façon de faire du bon travail est d’aimer ce que vous faites.",
    author: "Steve Jobs"
  },
  {
    text: "Je ne cherche pas à être parfait, je cherche à progresser chaque jour, avec rigueur et passion.",
    author: "Moi"
  },
  {
    text: "Les ordinateurs ne peuvent pas mentir. Mais les programmes peuvent, eux.",
    author: " inconnu "
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: " Alan Kay "
  }

];

const Citation: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // démarre la disparition
      setTimeout(() => {
        setIndex(prev => (prev + 1) % citations.length);
        setVisible(true); // réapparition avec la nouvelle citation
      }, 500); // durée de la transition d'opacité (500ms)
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const { text, author } = citations[index];

  return (
    <section id="citation" className="container-section my-12 text-center">
      <h3 className="mb-6 text-xl font-semibold text-gray-800 dark:text-gray-200">
        Citation inspirante
      </h3>
      <blockquote
        className={`relative max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md italic text-lg text-gray-700 dark:text-gray-300 border-l-4 border-indigo-500 transition-opacity duration-500 ease-in-out`}
        style={{ opacity: visible ? 1 : 0 }}
      >
        <p>&ldquo;{text}&rdquo;</p>
        <footer className="mt-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
          — {author}
        </footer>
      </blockquote>
    </section>
  );
};

export default Citation;

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  { id: 1, title: "Portfolio React", category: "Web", description: "Un portfolio interactif avec React et animations." },
  { id: 2, title: "Gestion d'école", category: "Application", description: "Une plateforme complète pour gérer les écoles et les élèves." },
  { id: 3, title: "E-commerce", category: "Web", description: "Un site de vente de livres en ligne avec React et Firebase." },
  { id: 4, title: "App mobile", category: "Mobile", description: "Une application mobile iOS et Android pour les profs." },
  { id: 5, title: "Robot éviteur d'obstacles", category: "Robotique", description: "Un robot intelligent qui évite les obstacles." }
];

const categories = ["Tous", "Web", "Application", "Mobile", "Robotique"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Filtrer les projets
  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <h2>Mes Projets</h2>
      <p>Voici quelques projets que j'ai réalisés :</p>

      {/* Boutons de filtrage */}
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Liste des projets filtrés */}
      <ul>
        {filteredProjects.map((project) => (
          <motion.li 
            key={project.id} 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <strong>{project.title}</strong> - {project.description}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Projects;


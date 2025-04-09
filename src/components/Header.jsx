import React from "react";
import "./Header.css";

const Header = ({ toggleDarkMode, darkMode }) => {
  // Fonction pour gérer le défilement fluide
  const handleScroll = (e, id) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <h1>Mon Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#home" onClick={(e) => handleScroll(e, "#home")}>Accueil</a></li>
          <li><a href="#about" onClick={(e) => handleScroll(e, "#about")}>À propos</a></li>
          <li><a href="#projects" onClick={(e) => handleScroll(e, "#projects")}>Projets</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</a></li>
        </ul>
        {/* Bouton de mode sombre */}
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;



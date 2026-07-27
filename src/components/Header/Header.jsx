import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Header.css";

const Header = ({ toggleDarkMode, darkMode }) => {

  const handleScroll = (e, id) => {
    e.preventDefault();

    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  };


  return (
    <header className="header">

      <div className="logo">
        Ange<span>.</span>
      </div>


      <nav className="navbar">

        <ul>
          <li>
            <a href="#home" onClick={(e)=>handleScroll(e,"#home")}>
              Accueil
            </a>
          </li>

          <li>
            <a href="#about" onClick={(e)=>handleScroll(e,"#about")}>
              À propos
            </a>
          </li>

          <li>
            <a href="#projects" onClick={(e)=>handleScroll(e,"#projects")}>
              Projets
            </a>
          </li>

          <li>
            <a href="#skills">
              Compétences
            </a>
          </li>

          <li>
            <a href="#contact" onClick={(e)=>handleScroll(e,"#contact")}>
              Contact
            </a>
          </li>
        </ul>


        <button 
          className="theme-toggle"
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaSun/> : <FaMoon/>}
        </button>


      </nav>


    </header>
  );
};


export default Header;
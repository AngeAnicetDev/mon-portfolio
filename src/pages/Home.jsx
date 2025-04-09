import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenue sur mon Portfolio</h1>
      <h2>
        Je suis{" "}
        <TypeAnimation
          sequence={[
            "un développeur web 💻", 2000,
            "passionné du dévéloppement 🚀", 2000,
            "créatif 🎨", 2000,
            "un apprenant curieux 📚", 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h2>
      <p>Découvrez mes projets et compétences.</p>
    </div>
  );
};

export default Home;


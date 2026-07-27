import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Home.css";
import profile from "../assets/anicet.jpg";

const Home = () => {
  return (
    <section className="home">

      <div className="home-left">

        <p className="home-greeting">
          👋 Bonjour, je suis
        </p>

        <h1 className="home-name">
          Ange Anicet
        </h1>

        <h2 className="home-job">
          <TypeAnimation
            sequence={[
              "Développeur Frontend", 2000,
              "Développeur React", 2000,
              "Développeur Next.js", 2000,
              "Développeur Full Stack", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="home-description">
          Je développe des sites web modernes, rapides et responsives.
          Mon objectif est d'aider les entreprises et les particuliers
          à transformer leurs idées en applications web professionnelles.
        </p>

        <div className="home-buttons">

          <a href="#projects" className="btn btn-primary">
            Voir mes projets
          </a>

          <a href="#contact" className="btn btn-secondary">
            Me contacter
          </a>

        </div>

        <div className="socials">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaWhatsapp />
          </a>

        </div>

      </div>

      <div className="home-right">

        <div className="profile-circle">
          <img src={profile} alt="Ange Anicet" />
        </div>

      </div>

    </section>
  );
};

export default Home;
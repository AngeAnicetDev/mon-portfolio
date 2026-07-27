import React from "react";
import { motion } from "framer-motion";
import "./About.css";


const MotionDiv = motion.div;
const About = () => {
  return (
    <section className="about">

      <MotionDiv
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="section-title">
          À propos de moi
        </h2>


        <p className="about-text">
          Je suis <strong>Ange Anicet</strong>, développeur web passionné
          par la création d'applications modernes et performantes.
          J'aime transformer des idées en solutions numériques simples,
          élégantes et efficaces.
        </p>


        <p className="about-text">
          Je travaille avec des technologies modernes comme React,
          JavaScript, Next.js et les outils du développement web.
          Mon objectif est d'aider les entreprises et les particuliers
          à construire leur présence en ligne.
        </p>


        <div className="about-cards">

          <div className="about-card">
            <h3>🚀 Ma mission</h3>
            <p>
              Créer des expériences web modernes qui répondent
              aux besoins des utilisateurs.
            </p>
          </div>


          <div className="about-card">
            <h3>💡 Ma vision</h3>
            <p>
              Continuer à apprendre et proposer des solutions
              toujours plus professionnelles.
            </p>
          </div>


          <div className="about-card">
            <h3>🎯 Mon objectif</h3>
            <p>
              Collaborer avec des entreprises pour développer
              des projets utiles et innovants.
            </p>
          </div>

        </div>


      </MotionDiv>

    </section>
  );
};

export default About;
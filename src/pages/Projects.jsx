import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const MotionDiv = motion.div;

const projects = [
  {
    title: "Application de gestion scolaire",
    description:
      "Une application permettant de gérer des élèves, classes et notes avec une interface simple.",
    technologies: ["React", "Python", "Django"],
    link: "#",
  },

  {
    title: "Chatbot intelligent",
    description:
      "Un assistant conversationnel capable de répondre aux questions des utilisateurs.",
    technologies: ["React", "Flask", "JavaScript"],
    link: "#",
  },

  {
    title: "Site E-commerce",
    description:
      "Une plateforme permettant de présenter et vendre des produits en ligne.",
    technologies: ["React", "CSS", "API"],
    link: "#",
  },

];


const Projects = () => {
  return (

    <section className="projects">

      <h2 className="section-title">
        Mes projets
      </h2>


      <div className="projects-container">

        {projects.map((project, index) => (

          <MotionDiv
            className="project-card"
            key={index}

            initial={{
              opacity:0,
              y:50
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.5,
              delay:index * 0.2
            }}

            viewport={{
              once:true
            }}
          >


            <h3>
              {project.title}
            </h3>


            <p>
              {project.description}
            </p>


            <div className="technologies">

              {project.technologies.map((tech)=>(
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>


            <a href={project.link}>
              Voir le projet →
            </a>


          </MotionDiv>

        ))}


      </div>

    </section>

  );
};


export default Projects;
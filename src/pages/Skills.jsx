import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";
import { SiNextdotjs, SiDjango } from "react-icons/si";
import "./Skills.css";


const MotionDiv = motion.div;


const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "Django",
    icon: <SiDjango />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
];


const Skills = () => {

  return (

    <section className="skills">


      <h2 className="section-title">
        Mes compétences
      </h2>


      <div className="skills-container">


        {skills.map((skill, index)=>(

          <MotionDiv

            className="skill-card"

            key={skill.name}

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
              delay:index * 0.1
            }}

            viewport={{
              once:true
            }}

          >

            <div className="skill-icon">
              {skill.icon}
            </div>


            <h3>
              {skill.name}
            </h3>


          </MotionDiv>

        ))}


      </div>


    </section>

  );

};


export default Skills;
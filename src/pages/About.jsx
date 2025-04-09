import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      <h2>À propos de moi</h2>
      <p>Je suis Ange Anicet, un développeur passionné qui crée des sites web modernes.</p>
    </motion.div>
  );
};

export default About;


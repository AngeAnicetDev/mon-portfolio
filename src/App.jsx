import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";
import Skills from "./pages/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {

  document.body.classList.toggle("dark", darkMode);

  document.body.classList.toggle("light", !darkMode);

}, [darkMode]);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;





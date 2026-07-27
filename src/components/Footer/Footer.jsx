import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import "./Footer.css";


const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };


  return (

    <footer className="footer">

      <div className="footer-content">


        <div className="footer-brand">

          <h2>
            Ange Anicet
          </h2>

          <p>
            Développeur Web passionné par la création
            d'applications modernes et performantes.
          </p>

        </div>



        <div className="footer-socials">

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



      <div className="footer-bottom">

        <p>
          © 2026 Ange Anicet. Tous droits réservés.
        </p>


        <button onClick={scrollTop}>
          <FaArrowUp />
        </button>


      </div>


    </footer>

  );

};


export default Footer;
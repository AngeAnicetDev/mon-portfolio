import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa";
import "./Contact.css";


const MotionDiv = motion.div;


const Contact = () => {

  const form = useRef();

  const [messageSent, setMessageSent] = useState(false);


  const sendEmail = (e) => {

    e.preventDefault();


    emailjs.sendForm(
  import.meta.env.VITE_EMAIL_SERVICE_ID,
  import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAIL_PUBLIC_KEY
)

    .then(() => {

      setMessageSent(true);

      form.current.reset();

    })

    .catch((error)=>{

      console.log("Erreur :", error);

    });

  };


  return (

    <section className="contact">


      <h2 className="section-title">
        Contactez-moi 📬
      </h2>


      <div className="contact-container">


        <MotionDiv

          className="contact-info"

          initial={{
            opacity:0,
            x:-50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.7
          }}

        >


          <h3>
            Travaillons ensemble 🚀
          </h3>


          <p>
            Vous avez un projet web ?
            Je serais ravi d'échanger avec vous
            et de transformer votre idée en solution numérique.
          </p>


          <div className="contact-links">

            <p>
              <FaEnvelope />
              Email : ibo.ange.dev1@gmail.com
            </p>


            <p>
              <FaWhatsapp />
              WhatsApp : +225 07 47 27 13 76
            </p>


            <p>
              <FaGithub />
              GitHub : AngeAnicet
            </p>


          </div>


        </MotionDiv>



        <MotionDiv

          className="contact-form"

          initial={{
            opacity:0,
            x:50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.7
          }}

        >


          {messageSent && (

            <p className="success-message">
              Message envoyé avec succès ! ✅
            </p>

          )}



          <form ref={form} onSubmit={sendEmail}>


            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              required
            />


            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
            />


            <textarea

              name="message"

              rows="6"

              placeholder="Votre message"

              required

            />


            <button type="submit">
              Envoyer le message
            </button>


          </form>


        </MotionDiv>


      </div>


    </section>

  );

};


export default Contact;
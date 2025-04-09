import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0wyl5fx", // Remplace par ton Service ID
        "template_3aj8xsr", // Remplace par ton Template ID
        form.current,
        "ypZmf3ue5kzNbCbPq" // Remplace par ton User ID
      )
      .then(
        (result) => {
          console.log("Message envoyé !", result.text);
          setMessageSent(true);
          form.current.reset(); // Réinitialiser le formulaire après l'envoi
        },
        (error) => {
          console.log("Erreur d'envoi :", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contacte-moi 📬</h2>
      {messageSent && <p className="success-message">Message envoyé avec succès ! ✅</p>}
      <form ref={form} onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Message</label>
        <textarea name="message" rows="5" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;



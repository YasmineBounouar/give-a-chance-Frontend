import React from "react";
import styles from "../styles/ContactForm.module.css";

function ContactForm() {
  return (
    <div className={styles.contactform}>
      <h2 className={styles.contactformtitle}>Contactez-nous</h2>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          
          <div className={styles.inputform}>
            <label for="name">Lastname</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Lastname"
            ></input>

            <label for="name">Fistname</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Firstname"
            ></input>

            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            ></input>
          </div>

          <div className={styles.message}>
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Got a question? Drop us a message!"
              className={styles.textarea}
            ></textarea>
          </div>
        </div>

        <button className={styles.button} type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

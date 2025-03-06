import React from 'react'
import styles from '../styles/ContactForm.module.css';


function ContactForm() {
  return (
<div className={styles.contactform}>
<h2>Contactez-nous</h2>

    <form>

<div className={styles.inputform}>
    <label  for="name">Lastname</label>
    <input type="text" id="name" name="name" placeholder="Lastname"></input>

    <label for="name">Fistname</label>
    <input type="text" id="name" name="name" placeholder="Firstname"></input>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Email"></input>
</div>

    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Message"></textarea>

    <button type="submit">Envoyer</button> 
</form>
</div>
  )
}

export default ContactForm
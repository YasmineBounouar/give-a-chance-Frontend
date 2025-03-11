import React from "react";
import styles from "../styles/ContactForm.module.css";

function ContactForm() {

const [lastname, setLastname] = useState('');
const [firstname, setFirstname] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [error, setError] = useState(false);

// Fonction exécutée lors de la soumission du formulaire
const handleSubmit = (e) => {
  e.preventDefault(); // Empêche le rechargement de la page



 // Vérification que tous les champs obligatoires sont remplis
 if (lastname === '' || firstname === '' || email === '' || message === '') {
  setError(true);
  return;
}

// Envoi des données au backend via une requête PUT
fetch('http://localhost:3000/update/Dev/:id', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      lastname,
      firstname,
      email,
      message
  })
})
.then((response) => response.json())
.then((data) => {
  console.log(data.updatedProfil); // Affiche la réponse du serveur dans la console

 
  
})
.catch((error) => {
  console.error('Error:', error); // Capture les erreurs en cas de problème
});
}



  return (
    <div className={styles.contactform}>
      <h2 className={styles.contactformtitle}>Contactez-nous</h2>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          
          <div className={styles.inputform}>
            <label for="name">Lastname</label>
            <input
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
              type="text"
              id="name"
              name="name"
              placeholder="Lastname"
            ></input>

            <label for="name">Fistname</label>
            <input
            onChange={(e) => setFirstname(e.target.value)} 
            value={firstname}
              type="text"
              id="name"
              name="name"
              placeholder="Firstname"
            ></input>

            <label for="email">Email</label>
            <input
             onChange={(e) => setEmail(e.target.value)} 
             value={email}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            ></input>
          </div>

          <div className={styles.message}>
            <label for="message">Message</label>
            <textarea
             onChange={(e) => setMessage(e.target.value)} 
              value={message}
              id="message"
              name="message"
              placeholder="Got a question? Drop us a message!"
              className={styles.textarea}
            ></textarea>
          </div>
        </div>


{/* Message d'erreur si un champ est manquant */}
{error && <p style={{ color: 'red' }}>Veuillez remplir tous les champs</p>}

        <button  onClick={(e) => handleSubmit(e)}  className={styles.button} type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

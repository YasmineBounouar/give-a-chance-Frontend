import React from 'react'
import styles from '../styles/Connexion.module.css'
import { useState } from 'react';

function SingIN() {
  // Déclaration des états locaux pour gérer les valeurs du formulaire et les erreurs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);  // Erreur si les champs sont vides
  const [errorEmail, setErrorEmail] = useState(false);  // Erreur pour un email invalide
  const [usernotfound, setUsernotfound] = useState(false);  // Erreur si l'utilisateur n'est pas trouvé
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expression régulière pour valider l'email

  // Fonction appelée lors du clic sur le bouton de soumission
  const handleClick = (e) => {
    e.preventDefault();  // Empêche le rechargement de la page par défaut lié à l'envoi du formulaire

    // Vérification si les champs email et mot de passe sont remplis
    if (email === '' || password === '') {
      setError(true);  // Si un champ est vide, afficher une erreur générale
      return;  // Stoppe l'exécution si un champ est vide
    }

    // Vérification si l'email est valide
    if (emailRegex.test(email) === false) {
      setErrorEmail(true);  // Si l'email est invalide, afficher une erreur pour l'email
      console.log(errorEmail);  // Affichage de l'erreur dans la console pour le débogage
      return;  // Stoppe l'exécution si l'email n'est pas valide
    }

    // Envoi des données à l'API pour l'authentification
    fetch('http://localhost:3000/create/signin', {  // Envoi des données à l'API pour se connecter
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then((response) => response.json())  // Attente de la réponse de l'API
    .then((data) => {
      console.log(data.user, data.role);  // Affichage des informations utilisateur et rôle dans la console

      // Si l'authentification est réussie, réinitialiser les champs
      if (data.result === true) {
        setPassword('');
        setEmail('');
      } else if (data.result === false) {
        // Si l'utilisateur n'est pas trouvé, afficher une erreur spécifique
        setUsernotfound(true);  // Cette erreur sera affichée si l'utilisateur n'existe pas dans la base de données
      }
    })
    .catch((error) => {
      console.error('Error:', error);  // Affiche une erreur dans la console si l'API échoue
    });
  }
  
  return (
    
    
    <div>

    <form className={styles.formsignin}>

    <h3 className={styles.titlesignin}>Sign in</h3>

   
    
    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" name="mdp" placeholder='email' className={styles.inputemail}/>
   {errorEmail && <p style={{color:'red'}}>Please enter a valid email.</p>}

    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" name="password" placeholder='password' className={styles.inputpassword}/>

    {usernotfound && <p style={{color:'red'}}>Utilisateur not found</p>}

    
    {error && <p style={{color:'red'}}>Please fill in all the fields.</p>}
  
   <button onClick={(e)=>{handleClick(e)}} type="submit" className={styles.buttonSubmmit}>Submit</button>
    
    

   
</form>

    </div>
  )
}

export default SingIN
import React from 'react'
import Singin from '../components/Singin';
import Signup from '../components/Signup';
import { useState } from 'react';
import styles from '../styles/Connexion.module.css'
import Image from 'next/Image';


function connexion() {
  
  // Déclaration de l'état pour basculer entre les deux formulaires (connexion et inscription)
  const [connexiontype, setConnexiontype] = useState(true); // true pour 'connexion', false pour 'inscription'
  
  // Texte pour lier à la page d'inscription si l'utilisateur est sur la page de connexion
  let SigninText = <p>Vous n’avez pas de compte ? <span onClick={() => { setConnexiontype(!connexiontype) }}>créer un compte</span> </p>
  
  // Texte pour lier à la page de connexion si l'utilisateur est sur la page d'inscription
  let signuptext = <p>Vous avez déjà un compte ? <span onClick={() => { setConnexiontype(!connexiontype) }}>connectez-vous</span> </p>

  return (
    <div> 
      {/* Affichage conditionnel du texte selon l'état de connexiontype */}
      {connexiontype ? SigninText : signuptext} 
      
      {/* Affichage conditionnel du formulaire de connexion ou d'inscription en fonction de connexiontype */}
      {connexiontype ? <Singin /> : <Signup />}
    </div>
  )
}

export default connexion;
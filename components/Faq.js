import React from 'react'
import styles from '../styles/Faq.module.css';
import {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // j'ai rajouter
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {

  // Création d'un état local "open" qui stocke l'index de la question actuellement ouverte
  const [open, setOpen] = useState(null)
  
  // Définition du composant FaqElement qui représente une seule question-réponse
  function FaqElement(props) {
  
    return (
      <section id='FAQ'>
      <div >
          <h4> {props.question} <span onClick={()=>{ setOpen(props.position)}}><span ><FontAwesomeIcon icon={faPlus} className={styles.addIconPlus}/></span></span> </h4>
          {open === props.position ? <p> {props.reponse}</p> : null}
      </div>
      </section>
    )
  }
  
    // Définition des questions-réponses sous forme d'un tableau d'objets
    const faqData = [
      {
        // Première question avec sa réponse et son index
        question: 'Comment créer un wrap pour une section de questions-réponses ?',
        answer: 'Pour créer un wrap pour une section de questions-réponses, vous devez créer un composant React qui enveloppe chaque question-réponse et réutiliser ce composant dans votre application.',
        index :0 //(position)
      },
      {
        // Deuxième question avec sa réponse et son index
        question: 'Quels sont les avantages d\'utiliser React ?',
        answer: 'React permet de créer des interfaces utilisateur interactives et réactives. Il facilite également la gestion de l\'état et la réutilisation des composants.',  
        index: 1 //(position)
      },
      {
        // Troisième question avec sa réponse et son index
        question: 'Quels sont les avantages d\'utiliser React ?',
        answer: 'React permet de créer des interfaces utilisateur interactives et réactives. Il facilite également la gestion de l\'état et la réutilisation des composants.',
        index: 2 //(position)
      },
    ];

    // Mapping du tableau faqData pour générer une liste de composants FaqElement dynamiques
    const myFaq= faqData.map((data, i)=>{

        return <FaqElement key={i} question={data.question} reponse={data.answer}  index={data.index}/>

    })

    return (
      // Conteneur qui affiche la liste de toutes les questions-réponses
       <div > {myFaq} </div>

    );
};


export default Faq;
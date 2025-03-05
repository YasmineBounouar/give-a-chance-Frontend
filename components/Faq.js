import React from 'react'
import styles from '../styles/Faq.module.css';
import FaqElement from './FaqElement';
import {useState} from 'react'

const Faq = () => {

  const [open, setOpen] = useState(null)
  
  function FaqElement(props) {
  
    return (
      <div>
          <h4> {props.question} <span onClick={()=>{ setOpen(props.position)}}>X</span> </h4>
          {open === props.position ? <p> {props.reponse}</p> : null}
      </div>
    )
  }
  
    const faqData = [
      {
        question: 'Comment créer un wrap pour une section de questions-réponses ?',
        answer: 'Pour créer un wrap pour une section de questions-réponses, vous devez créer un composant React qui enveloppe chaque question-réponse et réutiliser ce composant dans votre application.',
        index: 0
      },
      {
        question: 'Quels sont les avantages d\'utiliser React ?',
        answer: 'React permet de créer des interfaces utilisateur interactives et réactives. Il facilite également la gestion de l\'état et la réutilisation des composants.',  
        index: 1
      },
      {
        question: 'Quels sont les avantages d\'utiliser React ?',
        answer: 'React permet de créer des interfaces utilisateur interactives et réactives. Il facilite également la gestion de l\'état et la réutilisation des composants.',
        index: 2
      },
    ];

      const myFaq= faqData.map((data, i)=>{

        return <FaqElement key={i} question={data.question} reponse={data.answer}  position={i}/>

        })

    return (
   
       <div > {myFaq}</div>

        );
      };

export default Faq;
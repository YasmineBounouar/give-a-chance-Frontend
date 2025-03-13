import React from "react";
import styles from "../styles/Faq.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // j'ai rajouter
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  // Création d'un état local "open" qui stocke l'index de la question actuellement ouverte
  const [open, setOpen] = useState(null);

  // Définition du composant FaqElement qui représente une seule question-réponse
  function FaqElement(props) {
    return (
      <section className={styles.faqsection} id="FAQ">
        <div>
          <h4>
            {" "}
            {props.question}{" "}
            <span
              onClick={() => {
                setOpen(props.index);
              }}
            >
              <span>
                <FontAwesomeIcon icon={faPlus} className={styles.addIconPlus} />
              </span>
            </span>{" "}
          </h4>
          {open === props.index && <p> {props.reponse}</p>}
        </div>
      </section>
    );
  }

  // Définition des questions-réponses sous forme d'un tableau d'objets

  const faqData = [
    {
      // Première question avec sa réponse et son index
      question: "How can I update my developer profile?",
      answer:
        'Go to your dashboard, click on "My Profile," then on "Edit." You will then be able to update your skills, experiences, and work preferences.',

      index: 0, //(position)
    },
    {
      // Deuxième question avec sa réponse et son index
      question:
        "As a recruiter, how can I contact a developer that interests me?",

      answer:
        'Search for the developer via our directory, then use the "Contact" button on their profile to send a message directly from our platform.',

      index: 1, //(position)
    },
    {
      // Troisième question avec sa réponse et son index
      question: "What are the search criteria available in the directory?",

      answer:
        "You can filter profiles or job offers by technology, experience level, location, and contract type to quickly find the ideal candidate or position.",

      index: 2, //(position)
    },
    {
      // Troisième question avec sa réponse et son index
      question: " Can I update my profile after registration?",

      answer:
        "Yes, you can update your profile at any time. Whether it's to add new skills, modify your contact information, or add new projects, you have full access to manage your profile.",

      index: 3, //(position)
    },
  ];

  // Mapping du tableau faqData pour générer une liste de composants FaqElement dynamiques
  const myFaq = faqData.map((data, i) => {
    return (
      <FaqElement
        key={i}
        question={data.question}
        reponse={data.answer}
        index={data.index}
      />
    );
  });

  return (
    // Conteneur qui affiche la liste de toutes les questions-réponses
    <div className={styles.container}>
      <div>
        <h2 className={styles.faqHeading}>FAQ</h2>
        <div>
          <h3 className={styles.faqHeadingSub}>
            Key questions recruiters ask when hiring a junior developer for an
            apprenticeship, <br /> CDI or CDD
          </h3>
        </div>
      </div>{" "}
      {myFaq}{" "}
    </div>
  );
};

export default Faq;

import CardProfile from "./CardDev.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Faq from "./Faq.js";
import ContactForm from "./ContactForm.js";
import CardDev from "./CardDev.js";
import styles from "../styles/Home.module.css";
import Ccm from "./Ccm.js";
import React, { useState, useEffect } from "react";

function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profil/All/")
      .then((response) => response.json())
      .then((data) => {

  console.log("hi");

  const homecards = profiles.map((data, index) => {
    // pas de () dans le return car nous allons renvoyer que le compsant enfants.
    return (
      <CardDev
        key={index}
        username={data.username}
        firstname={data.firstname}
        hardskillstechnologies={data.hardskillstechnologies}
        presentation={data.presentation}
        location={data.location}
      />
    );
  });

        console.log(data.profils);
        // Ajout d'une logique pour mélanger aléatoirement les profils si nécessaire
        const shuffled = data.profils.sort(() => 0.5 - Math.random());
        setProfiles(shuffled.slice(0, 4)); // Prend les 4 premiers profils mélangés
      })
      .catch((error) => {
        console.error("Error:", error); // Affiche une erreur dans la console si l'API échoue
      });
  }, []);

  console.log("hi");

  const homecards = profiles.map((data, index) => {
    // pas de () dans le return car nous allons renvoyer que le compsant enfants.
    return (
      <CardDev
        key={index}
        username={data.username}
        firstname={data.firstname}
        lastname={data.lastname}
        info={data.info}

      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header className={styles.headercontainer} />

        <section className={styles.maincontent}>
          <h2 className={styles.titleemain}>
            Trouver des dévoppeurs juniors qualifié et motivé
          </h2>

          <p className={styles.textpresentation}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            blanditiis. Facilis ad itaque magni saepe repellendus quos dolorem
            neque voluptas odio, inventore, hic similique. Cum voluptatum
            perspiciatis quidem eveniet commodi.
          </p>

          <div className={styles.cardcontainer}>
            <div className={styles.card}>
<<<<<<< HEAD
              <CardProfile />
=======
     {homecards}
>>>>>>> ef7ff6c50dcfb4883bd1dcace80465985d715db4
            </div>

            <button className={styles.btncardprofil}>
              Parcourir les profiles
            </button>
          </div>
        </section>

        <section id="COMMENT" className={styles.commentCaMarche}>
          <Ccm />
        </section>

        <section id="FAQ" className={styles.faqcontainer}>
   
          <Faq />
        </section>

        <section id="CONTACT">
          <ContactForm />
        </section>

        <section className={styles.footercontainer}>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Home;

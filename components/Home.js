import CardProfile from "./CardDev.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Faq from "./Faq.js";
import ContactForm from "./ContactForm.js";
import CardDev from "./CardDev.js";
import styles from "../styles/Home.module.css";
import Ccm from "./Ccm.js";
import React, { useState, useEffect } from "react";
import { getprofils } from "../reducers/profils.js";
import { useDispatch } from "react-redux";

function Home() {
  const [profiles, setProfiles] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/profil/All/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.profils);
        // Ajout d'une logique pour mélanger aléatoirement les profils si nécessaire
        const shuffled = data.profils.sort(() => 0.5 - Math.random());
        setProfiles(shuffled.slice(0, 4)); // Prend les 4 premiers profils mélangés
        dispatch(getprofils(profiles));
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
        id={data._id}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header className={styles.headercontainer} />

        <section className={styles.maincontent}>
          <h2 className={styles.titleemain}>
            Find qualified and motivated junior developers
          </h2>

          <p className={styles.textpresentation}>
            Connect to the future: the ultimate junior tech recruitment
            platform! Welcome to GIVE A CHANCE, your means of connection between
            junior developers and recruiters in the tech sector. Create your
            profile, explore our directory, and establish direct contacts
            through our integrated messaging system. Get started today and shape
            the future of your career or your company!
          </p>

          <div className={styles.cardcontainer}>
            <div className={styles.card}>{homecards}</div>

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

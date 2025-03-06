import Link from "next/Link";
import Image from "next/Image";

import CardProfile from "./CardProfile.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Faq from "./Faq.js";
import ContactForm from "./ContactForm.js";
import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // j'ai rajouter
import { fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";

function Home() {
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
              <CardProfile />
              <CardProfile />
              <CardProfile />
              <CardProfile />
            </div>

            <button className={styles.btncardprofil}>
              Parcourir les profiles
            </button>
          </div>
        </section>

        <section className={styles.commentCaMarche}>
          <h2>Comment ça marche ?</h2>
          <div className={styles.commentCaMarcheContainer}>
            {/* j'ai rajouter les icon pour les commentCaMarche */}
            <div className={styles.commentCaMarcheCardONE}>
              <FontAwesomeIcon icon={fa1} />
              <p>texte</p>
            </div>
            <div className={styles.commentCaMarcheCardTWO}>
              <FontAwesomeIcon icon={fa2} />
              <p>texte</p>
            </div>
            <div className={styles.commentCaMarcheCardThree}>
              <FontAwesomeIcon icon={fa3} />
              <p>texte</p>
            </div>
          </div>
          <p className={styles.linkcommentCaMarche}>
            TROUVER DES DEVELOIPPEURS JUNIOR DEVOUÉ
          </p>
        </section>

        <section className={styles.faqcontainer}>
          <h2>FAQ</h2>
          <div>
            <h3>
              Questions principales que se posent les recruteurs pour recruter
              un développeur junior en alternance, en CDI ou en CDD ?
            </h3>
          </div>
          <Faq />
        </section>

        <div>
          <ContactForm />
        </div>
        <section className={styles.footercontainer}>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Home;

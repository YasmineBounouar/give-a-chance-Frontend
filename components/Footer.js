import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-solid-svg-icons"; // Changer l'importation ici
import styles from "../styles/Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/GIVE A CHANCE.png"
        width={250}
        height={150}
        alt="logo"
      ></Image>
      <Link href="#Home">
        <span className={styles.cgv}>Conditions générales</span>
      </Link>
      <Link href="">
        <span className={styles.mentions}>mentions légales</span>
      </Link>
      <Link href="#CONTACT">
        <span className={styles.contact}>Contact</span>
      </Link>
      <section className={styles.socialnetwork}>
        <Link href="/">
          <span>
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className={styles.IconfaSquareFacebook}
            />
            facebook
          </span>
        </Link>
        <Link href="/">
          <span>
            <FontAwesomeIcon
              icon={faLinkedin}
              className={styles.IconfaLinkedin}
            />
            Linkedin
          </span>
        </Link>
      </section>
    </footer>
  );
}
export default Footer;

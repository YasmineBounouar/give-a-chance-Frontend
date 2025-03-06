import React from "react";
import Link from "next/Link";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Footer.module.css";
import Image from "next/Image";

function Footer() {
  return (
    <footer className={styles}>
      <Image src="/GIVE A CHANCE.png" width={60} height={60} alt="logo"></Image>
      <Link href="">
        <span className={styles.cgv}>Conditions générales</span>
      </Link>
      <Link href="">
        <span className={styles.mentions}>mentions légales</span>
      </Link>
      <Link href="#CONTACT">
        <span className={styles.contact}>Contact</span>
      </Link>
      <span>
        <FontAwesomeIcon icon={faLinkedin} className={styles.IconeLinkedin} />
      </span>
    </footer>
  );
}
export default Footer;

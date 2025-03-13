import React from "react";
import Link from "next/link";

import styles from "../styles/Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/GIVE A CHANCE.png" width={150} height={100} alt="logo" />

      <span className={styles.cgv}>Terms and Conditions</span>
      <span className={styles.mentions}>Legal Notice</span>
      <span className={styles.contact}>Contact</span>
      <section className={styles.socialnetwork}>
        <span>
          <Image src={"/facebook.svg"} width={20} height={20}></Image>
        </span>
        <span>
          <Image src={"/linkedin.svg"} width={20} height={20}></Image>
        </span>

        <span>
          <Image src={"/twitter.svg"} width={20} height={20}></Image>
        </span>
      </section>
    </footer>
  );
}
export default Footer;

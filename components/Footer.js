import React from "react";
import Link from "next/Link";

import styles from "../styles/Footer.module.css";
import Image from "next/Image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/GIVE A CHANCE.png"
        width={250}
        height={150}
        alt="logo"
      />
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
            <Image src={'/facebook.svg'} width={20} height={20}></Image>
            
           
          </span>
        </Link>
        <Link href="/">
          <span>
          <Image src={'/linkedin.svg'} width={20} height={20} ></Image>
           
          </span>
        </Link>


        <Link href="/">
          <span>
          <Image src={'/twitter.svg'} width={20} height={20} ></Image>
           
          </span>
        </Link>


      </section>
    </footer>
  );
}
export default Footer;

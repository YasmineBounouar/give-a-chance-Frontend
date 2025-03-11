import React from "react";
import Link from "next/Link";
import Image from "next/Image";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // j'ai rajouter
import { faQuestion, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function DashboardHeader() {
  const [navmobile, Setnavmobile] = useState(false);

  return (
    <header className={styles.header}>
      <Image
        src="/GIVE A CHANCE.png"
        width={150}
        height={75}
        alt="logo"
        className={styles.logo}
      ></Image>

      <div className={styles.navLinks}>
        <Link href="/CardProfile">
          <span className={styles.profil}>Profil</span>
        </Link>
        
        <Link href="Pageannuaire">
          <span className={styles.profil}>Contact</span>
        </Link>

        <Link href="/">
          <button className={styles.btnconnexion}>LOGOUT</button>
        </Link>

        
      </div>

      {navmobile && (
        <div className={styles.navLinksForMobile}>
          <Link href="/CardProfile">
            <span className={styles.profil}>Profil</span>
          </Link>
         
          <Link href="#CONTACT">
            <span className={styles.contact}>Contact</span>
          </Link>

          <Link href="/Pageannuaire">
            <button className={styles.btnLogout}>LOGOUT</button>
          </Link>
        </div>
      )}

      <span
        className={styles.IconBars}
        onClick={() => {
          Setnavmobile(!navmobile); // On et Off pour afficher le wrap de navigation mobile.
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </span>
    </header>
  );
}

export default DashboardHeader;

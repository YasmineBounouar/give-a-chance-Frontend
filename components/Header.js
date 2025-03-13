import React from "react";
import Link from "next/Link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // j'ai rajouter
import { faQuestion, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user";
import { useRouter } from "next/router";

function Header() {
  const [navmobile, Setnavmobile] = useState(false);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(user);

  function hundleConnet() {
    if (!user.token) {
      router.push("/connexion");
    } else {
      dispatch(logout());
    }
  }

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
        <Link href="/">
          <span className={styles.profil}>Profil</span>
        </Link>
        <Link href="#COMMENT">
          <span className={styles.commentcamarche}>Comment ça marche</span>
        </Link>
        <Link href="#CONTACT">
          <span className={styles.contact}>Contact</span>
        </Link>

        <button className={styles.btnconnexion} onClick={() => hundleConnet()}>
          {!user.token ? "CONNEXION" : "LOGOUT"}
        </button>

        <Link href="#FAQ">
          <span className={styles.IconQuestion}>
            <FontAwesomeIcon icon={faQuestion} />
          </span>
        </Link>
      </div>

      {navmobile && (
        <div className={styles.navLinksForMobile}>
          <Link href="/">
            <span className={styles.profil}>Profil</span>
          </Link>
          <Link href="#COMMENT">
            <span className={styles.commentcamarche}>Comment ça marche</span>
          </Link>
          <Link href="#CONTACT">
            <span className={styles.contact}>Contact</span>
          </Link>

          <Link href="/connexion">
            <button className={styles.btnconnexion}>CONNEXION</button>
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

export default Header;

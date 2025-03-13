import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // j'ai rajouter
import { faQuestion, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user";
import Router, { useRouter } from "next/router";

function DashboardHeader() {
  const [navmobile, Setnavmobile] = useState(false);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const router = useRouter();

  function handleLogOut() {
    dispatch(logout());
    router.push("/");
  }
let link 
user.role==="developer" ? link = "/dashboardDeveloper" : link = "/DashboardRecruteur";


  return (
    <header className={styles.header}>
      <Image
        onClick={() => Router.push("/")}
        src="/GIVE A CHANCE.png"
        width={150}
        height={75}
        alt="logo"
        className={styles.logo}
      ></Image>

      <div className={styles.navLinks}>
        <Link href={link}>
          <span className={styles.profil}>Profil</span>
        </Link>

        <Link href="/#CONTACT">
          <span className={styles.profil}>Contact</span>
        </Link>
        <Link href="/Pageannuaire">
          <span className={styles.contact}>Explore</span>
        </Link>
        <Link href="/Onboarding">
          <span className={styles.contact}>Edit profil</span>
        </Link>

        <button
          onClick={() => {
            handleLogOut();
          }}
          className={styles.btnconnexion}
        >
          LOGOUT
        </button>
      </div>

      {navmobile && (
        <div className={styles.navLinksForMobile}>
          <Link href="/CardProfile">
            <span className={styles.profil}>Profile</span>
          </Link>

          <Link href="/">
            <span className={styles.contact}>Explore</span>
          </Link>
          <Link href="/">
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

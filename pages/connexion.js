import React from "react";
import Singin from "../components/Singin";
import Signup from "../components/Signup";
import { useState } from "react";
import styles from "../styles/Connexion.module.css";
import Image from "next/image";
import Link from "next/Link";

function connexion() {
  const [connexiontype, setConnexiontype] = useState(true);

  let SigninText = (
    <p className={styles.SigninText}>
      Don't you have an account ?
      <span
        className={styles.connexiontype}
        onClick={() => {
          setConnexiontype(!connexiontype);
        }}
      >
        Create an account.
      </span>{" "}
    </p>
  );
  let signuptext = (
    <p className={styles.signuptext}>
      Do you already have an account ?{" "}
      <span
        className={styles.connexiontype2}
        onClick={() => {
          setConnexiontype(!connexiontype);
        }}
      >
        Sign in 
      </span>
    </p>
  );

  return (
    <div className={styles.mainconnexion}>
      <header className={styles.headerconnexion}>
        {/* <Link href={"/"}> */}{" "}
        <Image
          className={styles.logoheader}
          src="/unnamed.jpg"
          height={80}
          width={80}
        />
        {/* </Link> */}
        <button type="submit" className={styles.buttongoogle}>
          SIGN WITH GOOGLE{" "}
          <Image src="/icon.svg" height={20} width={30}></Image>
        </button>
      </header>

      {/* affichage conditionnel */}
      {connexiontype ? <Singin /> : <Signup />}
      {connexiontype ? SigninText : signuptext}

      <footer></footer>
    </div>
  );
}
export default connexion;

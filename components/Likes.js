import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/CardDev.module.css";
import CardDev from './CardDev';

function Likes() {

const likes = useSelector((state) => state.likes.value);

    let cards = <h1>Developper you liked</h1> ;
  if (likes.length > 0) {
    cards = likes.map((data, i) => {
      return <CardDev key={i} {...data} isliked />;
    });
  }

  return (

    <section  className={styles.iconlike}>
      {CardDev}
    </section>
  )
}

export default Likes
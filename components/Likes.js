import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/likes.module.css";
import CardDev from "./CardDev";
import user from "../reducers/user";

function Likes() {
  const likes = useSelector((state) => state.likes.value);
  const user = useSelector((state) => state.user.value);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/create/RecruteurLikes/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setProfiles(data.alllikes.likedDev);
        }
      });
  }, [user.token]);

  // let cards = <h1>Developper you liked</h1>;
  // if (likes.length > 0) {

  // }

  // return <section className={styles.iconlike}>{CardDev}</section>;

  const homecards = profiles.map((data, index) => {
    // pas de () dans le return car nous allons renvoyer que le compsant enfants.
    return (
      <CardDev
        key={index}
        username={data.username}
        firstname={data.firstname}
        lastname={data.lastname}
        info={data.info}
        id={data._id}
        isLiked={true}
      />
    );
  });

  return <section className={styles.container}>{homecards}</section>;
}

export default Likes;

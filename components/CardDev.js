import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faShareNodes,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/CardDev.module.css";
import Link from "next/Link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Likes from "./Likes";
import { removeLikes, addLikes } from "../reducers/likes";

import { useRouter } from "next/router";

function CardDev(props) {
  let router = useRouter();
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(props.isliked);
  const [iconLike, setIconLike] = useState({ color: "red" });

  const likes = useSelector((state) => state.likes.value);
  const user = useSelector((state) => state.user.value);

  const handlelikesClick = (infolike) => {
    if (!user.token) {
      return;
    }

    if (user.role === "developer") {
      return;
    }

    if (!likes.includes(user.token)) {
      fetch(`http://localhost:3000/create/Addlikes`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: infolike.id, token: user.token }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            dispatch(addLikes(user.token));
          }
        });
    } else {
      dispatch(removeLikes(user.token));
    }
  };
console.log(user);

  function handleClick(e) {
    console.log(e);

if(user.token){

  console.log(e);
  
  router.push(`/profil?id=${e.id}`);
  
}
else{router.push('/connexion') }


    
  }

  let style = {
    color: "#e7ef06",
  };

  return (
    <section className={styles.card}>
      <div className={styles.cardImage}>
        <img
          style={{ objectFit: "cover" }}
          src={props.info?.profilpicture}
          alt="profil"
          height={150}
          width={250}
        ></img>

        <Link href="/">
          <span className={styles.iconpartage}>
            <FontAwesomeIcon
              icon={faShareNodes}
              className={styles.shareIconStyle}
            />
          </span>
        </Link>

        <span className={styles.iconlike}>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => {
              handlelikesClick(props);
            }}
            className={styles.heartIconStyle}
          />
        </span>
      </div>

      <div className={styles.cardDescription}>
        <h5 className={styles.name}>
          {props.firstname} {props.lastname}
        </h5>
        <h6 className={styles.specialities}>
          {props.info?.hardskillstechnologies.slice(0,20) + " ..."}
        </h6>
        <p className={styles.description}>{props.info?.presentation.slice(0,70)+ " ..."}</p>

        <div className={styles.locationcard}>
          <span>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.LocationIconStyle}
            />
          </span>
          <span className={styles.locationname}>{props.info?.location}</span>
        </div>
      </div>
     {user.token && (
        <button
          className={styles.btnconnexion}
          onClick={() => {
            handleClick(props);
          }}
        > 
          See more
        </button>
      )}

      <div className={styles.cardRating}>
        {/* j'ai rajouter les icone stars, mais il faudra faire un .map pour les rendre dynamique */}
        <span>
          <FontAwesomeIcon
            icon={faStar}
            style={style}
            className={styles.starsIconStyle}
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={faStar}
            style={style}
            className={styles.starsIconStyle}
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={faStar}
            style={style}
            className={styles.starsIconStyle}
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={faStar}
            style={style}
            className={styles.starsIconStyle}
          />
        </span>
        <span>
          <FontAwesomeIcon icon={faStar} className={styles.starsIconStyle} />
        </span>
        <span className={styles.stylecounter}>(4/5)</span>
        {/* quand on arrive pas a dissocier entre un titre ou un paragraphe , et pour l'icone */}
      </div>
    </section>
  );
}

export default CardDev;

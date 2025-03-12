import Image from "next/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // j'ai rajouter
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
import { removeLikes, addLikes  } from "../reducers/likes";

function CardDev(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isLiked, setIsLiked] = useState(props.isliked);
  const [iconLike, setIconLike] = useState({ color: "red" });

  useEffect(() => {
    if (props.isliked !== isLiked) {
      setIsLiked(props.isliked);
      setIconLike(props.isliked ? { color: "red" } : { color: "grey" });
    }
  }, [props.isliked]);

  const handlelikesClick = () => {
    if (!user.token) {
      return;
    }

    fetch(`http://localhost:3000/create/Recruteur/${user.token}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          if (props.isliked) {
            dispatch(addLikes(props));
            setIsLiked(false);
            setIconLike({ color: "#E9BE59" });
          } else {
            dispatch(removeLikes(props));
            setIsLiked(true);
            setIconLike({ color: "#E9BE59" });
          }
        }
      });
    }

  return (
    <section className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src="/profildev.jpg"
          alt="profil"
          height={120}
          width={250}
        ></Image>
        <Link href="/">
          <span className={styles.iconpartage}>
            <FontAwesomeIcon
              icon={faShareNodes}
              className={styles.shareIconStyle}
            />
          </span>
        </Link>
        {/* J'ai rajouter l'icone pour le partage et le like, il faut changer le className de Incone de partage. */}
        <span>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => handlelikesClick()}
            className={styles.heartIconStyle}
          />
        </span>
      </div>

      <div className={styles.cardDescription}>
        <h5 className={styles.name}>{props.firstname}</h5>
        <h6 className={styles.specialities}>{props.hardskillstechnologies}</h6>
        <p className={styles.description}>{props.presentation}</p>

        <div className={styles.locationcard}>
          <span>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.LocationIconStyle}
            />
          </span>
          <span className={styles.locationname}>{props.location}</span>
        </div>
      </div>

      <div className={styles.cardRating}>
        {/* j'ai rajouter les icone stars, mais il faudra faire un .map pour les rendre dynamique */}
        <span>
          <FontAwesomeIcon icon={faStar} className={styles.starsIconStyle} />
        </span>
        <span>
          <FontAwesomeIcon icon={faStar} className={styles.starsIconStyle} />
        </span>
        <span>
          <FontAwesomeIcon icon={faStar} className={styles.starsIconStyle} />
        </span>
        <span>
          <FontAwesomeIcon icon={faStar} className={styles.starsIconStyle} />
        </span>
        <span>
          <FontAwesomeIcon icon={faStar} className={styles.starsIconStyle} />
        </span>
        <span className={styles.stylecounter}>(count)</span>
        {/* quand on arrive pas a dissocier entre un titre ou un paragraphe , et pour l'icone */}
      </div>
    </section>
  );
}

export default CardDev;

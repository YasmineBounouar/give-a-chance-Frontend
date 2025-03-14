import Image from "next/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // j'ai rajouter
import {
  faHeart,
  faStar,
  faShareNodes,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Developer.module.css";
import Link from "next/Link";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";


function Cardprofile() {


  const user = useSelector((state) => state.token.value);

console.log(token);


useEffect(() => {
  
    
        // Envoi des données au backend via une requête get
        fetch('http://localhost:3000/profils/:'
          
      .then((response) => response.json())
      .then((data) => {
          console.log(data.updatedProfil); // Affiche la réponse du serveur dans la console
 
      }))
      
      
      .catch((error) => {
          console.error('Error:', error);  // Affiche une erreur dans la console si l'API échoue
      });
  




}, [])









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
        <span className={styles.iconlike}>
          <FontAwesomeIcon icon={faHeart} className={styles.heartIconStyle} />
        </span>
      </div>

      <div className={styles.cardDescription}>
        <h5 className={styles.name}>NAME</h5>
        <h6 className={styles.specialities}>SPECIALITY</h6>
        <p className={styles.description}>
          lorem ipsum lorem ipsum lorem ipsum lore ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum
        </p>

        <div className={styles.locationcard}>
          <span>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.LocationIconStyle}
            />
          </span>
          <span className={styles.locationname}>LOCATION</span>
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

export default Cardprofile;

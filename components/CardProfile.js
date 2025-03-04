import Image from 'next/Image';
import styles from '../styles/Developer.module.css'
import  Link from 'next/Link';

function Cardprofile() {
  return (
     <div className={styles.card}>

        <div className={styles.cardImage}>
           <Image src='/profildev.jpg' alt='profil' height={87.5} width={250}></Image>
           <Link href='/'><span className={styles.iconpartage}>partage</span></Link> 
            <span className={styles.iconlike}>LIKE</span> 
        </div>

        <div className={styles.cardDescription}>
            <h5 className={styles.name}>NAME</h5>
            <h6 className={styles.specialities}>SPECIALITY</h6>
            <p className={styles.description}>lorem ipsum lorem ipsum lorem ipsum lore ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>

            <div className={styles.locationcard}>
                    <span>icon</span>
                    <span>LOCATION</span>
            </div>
        </div>


        <div className={styles.cardRating}>
            <span>ETOILE</span>
            <span>Compteur</span>
            {/* quand on arive pas a dissocier entre un titre ou un paragraphe , et pour l'icone */}
        </div>

     </div>
  )
}

export default Cardprofile

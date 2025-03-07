import React from 'react'
import styles from '../styles/Ccm.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";

function CCM() {
  return (
    <div>
          <h2 className={styles.ccm}>Comment ça marche ?</h2>
          <div className={styles.commentCaMarcheContainer}>

            <section className={styles.commentCaMarcheCardONE}>
             <span className={styles.fa}><FontAwesomeIcon icon={fa1}  /></span> 
              <div className={styles.texte1}><p>lorem ipsum lorem ipsum lorem ipsum lorem ipusm lore ipsum lorem ipsum</p></div>
            </section>

            <section className={styles.commentCaMarcheCardTWO}>
              <span className={styles.fa} ><FontAwesomeIcon icon={fa2} /></span>
              <div className={styles.texte2}><p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p></div>
            </section>

            <section className={styles.commentCaMarcheCardThree}>
              <span className={styles.fa}><FontAwesomeIcon icon={fa3} /></span>
              <div className={styles.texte3}><p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore ipsum</p></div>
            </section>

          </div>
          <p className={styles.linkcommentCaMarche}>
            TROUVER DES DEVELOIPPEURS JUNIOR DEVOUÉ
          </p>
      
    </div>
  )
}

export default CCM

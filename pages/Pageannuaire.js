import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass ,faUser} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Pageannuaire.module.css'
import Image from 'next/Image';


function pageannuaire() {
  return (
    <div className={styles.mainAnnuaire}>
        <header className={styles.headerAnnuaire}>
        <Image className={styles.logoheader} src='/unnamed.jpg'height={80} width={80}></Image>
        <FontAwesomeIcon icon={ faUser} className={styles.customIcon}/>
      
        </header>

        <h4 className={styles.titleAnnuaire}>Hire developers </h4>

        <aside className={styles.colonne}></aside>



        
        


        <div className={styles.boxInitial}>


       <div className={styles.boxSearch}>
       <p className={styles.filterPhrase}>Filter by city, profession, or technology</p>
       </div>

        <div className={styles.box2}> 
            
        <input className={styles.inputSearch} type="text" name="Search" placeholder='Search' ></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.Fontawesome}/>
        </div>
        <button  className={styles.buttonAnnuaire}>More profiles</button>
        </div>
       </div>
       
     
  )
}

export default pageannuaire

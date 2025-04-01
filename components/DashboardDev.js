import React from 'react'
import styles from '../styles/DashboardRecruteur.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faStar,
  faCompass,
  faThumbsUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"


function DashboardDev() {
  return (
    <div className={styles.mainDashboard}>
     


      <div className={styles.contentContainer}>
        <aside className={styles.sidebar}>
          <nav className={styles.sidebarNav}>
            <ul className={styles.navList}>
              
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
               
              </li>
             
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faStar} className={styles.navIcon} />
                <span className={styles.navText}>Favorites</span>
              </li>
              
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faCompass} className={styles.navIcon} />
                
              </li>
             
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faThumbsUp} className={styles.navIcon} />
                
              </li>
           
            </ul>
          </nav>
          <button className={styles.addNewButton}>
            <FontAwesomeIcon icon={faPlus} className={styles.buttonIcon} />
            <span>Add new</span>
          </button>
        </aside>
        </div>
        </div>
    
  )
}

export default DashboardDev

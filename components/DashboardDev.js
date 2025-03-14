import React from 'react'
import styles from '../styles/DashboardRecruteur.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMagnifyingGlass,
  faUser,
  faHome,
  faStar,
  faCompass,
  faThumbsUp,
  faPlus,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image';
import Link from 'next/link';

function DashboardDev() {
  return (
    <div className={styles.mainDashboard}>
     


      <div className={styles.contentContainer}>
        <aside className={styles.sidebar}>
          <nav className={styles.sidebarNav}>
            <ul className={styles.navList}>
              
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
               {/* <Link href='/'><span className={styles.navText}>Home</span></Link>  */}
              </li>
             
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faStar} className={styles.navIcon} />
                <span className={styles.navText}>Favorites</span>
              </li>
              
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faCompass} className={styles.navIcon} />
                {/* <Link href='/Pageannuaire'><span className={styles.navText}>Explore</span></Link>  */}
              </li>
             
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faThumbsUp} className={styles.navIcon} />
                {/* <Link href='/Onboarding'> <span className={styles.navText}>Modification</span></Link>  */}
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

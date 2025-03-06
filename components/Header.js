import React from 'react'
import Link from 'next/Link';
import Image from 'next/Image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // j'ai rajouter
import {faQuestion} from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    
<header className={styles.header}>
  
  <Image src='/GIE.jpg' width={60} height={60} alt='logo'></Image>
  <Link href=''><span className={styles.profil}>Profil</span></Link>
  <Link href='#COMMENT CA MARCHE'><span className={styles.commentcamarche}>Comment ça marche</span></Link>
  <Link href='#CONTACT'><span className={styles.contact}>Contact</span></Link>
   
  <Link href='/connexion'><button>CONNEXION</button></Link>

  <Link a href="#FAQ">
  <span>
  <FontAwesomeIcon icon={faQuestion} className={styles.IconQuestion}/>
  </span>
  </Link>

  </header>
    
  )
}

export default Header
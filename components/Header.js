import React from 'react'
import Link from 'next/Link';
import Image from 'next/Image'
import styles from '../styles/Home.module.css'


function Header() {
  return (
    
<header className={styles.header}>
  
  <Image src='/GIE.jpg' width={60} height={60} alt='logo'></Image>
  <Link href=''><span className={styles.profil}>PROFIL</span></Link>
  <Link href='#COMMENT CA MARCHE'><span className={styles.commentcamarche}>COMMENT CA MARCHE</span></Link>
  <Link href='#CONTACT'><span className={styles.contact}>Contact</span></Link>
   
  <Link href='/connexion'><button>CONNEXION</button></Link>

  <Link href='#FAQ'><span>?</span></Link>
 
  </header>
    
  )
}

export default Header
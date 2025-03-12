import React from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/Pageannuaire.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"


function profil() {
const router=useRouter()
const { id } = router.query;

  console.log(id);

  
  return (
    <div className={styles.mainAnnuaire}>
      <header className={styles.headerAnnuaire}>
        <Image className={styles.logoheader} src="/unnamed.jpg" height={70} width={70} alt="Logo" />
        <FontAwesomeIcon icon={faUser} className={styles.customIcon} />
      </header>

<div className={styles.formContainer}>
   {id}
</div>
    </div>
  )
}

export default profil

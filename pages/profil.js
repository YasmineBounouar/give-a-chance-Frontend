import React from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/Pageannuaire.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import Profil from '../components/Profil';


function profil() {
const router=useRouter()
const { id } = router.query;

const [profildata, setProfildata] = useState([]);
// const [errorMessage, setErrorMessage] = useState("");


const user = useSelector((state) => state.user.value);

useEffect(() => {
  
fetch(`http://localhost:3000/profil/myprofilewithid/${id}`)
.then(response=>response.json())
.then(data=>{

setProfildata(data.myprofils)

})

}, [id]);

// console.log(profildata.info?.location);


  







 

  
  return (
    <div className={styles.mainAnnuaire}>
      <header className={styles.headerAnnuaire}>
        <Image className={styles.logoheader} src="/unnamed.jpg" height={70} width={70} alt="Logo" />
        <FontAwesomeIcon icon={faUser} className={styles.customIcon} />
      </header>

<div className={styles.formContainer}>
   {id}
</div>
<Profil/>
    </div>
  )
}

export default profil

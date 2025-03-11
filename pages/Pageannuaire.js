import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass ,faUser} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Pageannuaire.module.css'
import Image from 'next/Image';
import { useState,useEffect } from "react";
import CardDev from '../components/CardDev';


function Pageannuaire() {
  const [profilDev, setProfilDev] = useState([]);
  //pour initaliser le use state on doit se demander c'est quoi que je veut stocker
  const [moreprofil,setMoreprofil] =useState (false)

  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    fetch('http://localhost:3000/profil/dev/h39wG187X5PSzuumRS-pZOchvyLpPgXi')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // setProfilDev(data.profils)
        const shuffled = data.profils.sort(() => 0.5 - Math.random());
        setProfilDev(shuffled.slice(0, 10)); 
      
        
      })
        
      .catch((error) => {
        console.error("Error:", error); // Affiche une erreur dans la console si l'API échoue
      });
    }, []);

  const pageannuaireCard  = profilDev.map((data, i) => {
    return <CardDev key={i} username={data.username}
    firstname={data.firstname}
    hardskillstechnologies={data.hardskillstechnologies}
    presentation={data.presentation}
    location={data.location}  />;
  });
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
        <div classname={styles.pageannuaireCard}>{pageannuaireCard}</div>
        <button onClick={(e)=>{handleSubmit(e)}} type="submit" className={styles.buttonSubmmit}>More profiles</button>

        </div>
       </div>
       
     
  )
}

export default Pageannuaire

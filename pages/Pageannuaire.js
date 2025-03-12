


import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/Pageannuaire.module.css"
import Image from "next/image"
import CardDev from "../components/CardDev"
import { useDispatch, useSelector } from "react-redux"
import  {getprofils} from '../reducers/profils.js'

export default function Pageannuaire() {
  const [profilDev, setProfilDev] = useState([])
  const [searchprofil, setSearchprofil] = useState("")
  const user =useSelector(state=>state.user.value)

const dispatch=useDispatch()
  
  const limit=10
  const handleSubmit = (e) => {
    e.preventDefault()
     
   
  }

  const handleSearch = (e) => {
    setSearchprofil(e.target.value)
  }

  useEffect(() => {
    fetch(`http://localhost:3000/profil/dev/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // const shuffled = data.profils.sort(() => 0.5 - Math.random())
        // setProfilDev(data.profils?.slice(0, 10))
        setProfilDev(data.profils)
        dispatch(getprofils(data.profils))
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [])

  const pageannuaireCard = profilDev?.map((data, i) => {
    return (
      <CardDev
        key={i}
        username={data.username}
        firstname={data.firstname}
        lastname={data.lastname}
        info={data.info}
        id={data._id}
      />
    )
  })

  return (
    <div className={styles.mainAnnuaire}>
      <header className={styles.headerAnnuaire}>
        <Image className={styles.logoheader} src="/unnamed.jpg" height={70} width={70} alt="Logo" />
        <FontAwesomeIcon icon={faUser} className={styles.customIcon} />
      </header>

<div className={styles.formContainer}>
   

<aside className={styles.colonne}>
  <ul>
  <li>fullstack</li>
  <li>frontend</li>   
  <li>backend</li>    
  </ul>

  <ul>
  <li>marseille</li>
  <li>Paris</li>   
  <li>Lille</li>    
  </ul>


  <ul>
  <li>cdi</li>
  <li>cdd</li>   
  <li>internship</li>    
  <li>apprenticeship</li>    
  </ul>




</aside>

<div className={styles.contentArea}>
<h4 className={styles.titleAnnuaire}>Hire developers</h4>
  <div className={styles.boxInitial}>
    <div className={styles.boxSearch}>
      <p className={styles.filterPhrase}>Filter by city, profession, or technology</p>
    </div>

    <div className={styles.box2}>
      <input
        className={styles.inputSearch}
        type="text"
        name="Search"
        placeholder="Search"
        value={searchprofil}
        onChange={handleSearch}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.fontawesome} />
    </div>

    <div className={styles.cardContainer}>{pageannuaireCard}</div>

    <button onClick={handleSubmit} type="button" className={styles.buttonAnnuaire}>
      More profiles
    </button>
  </div>
</div>
</div>
    </div>
  )
}


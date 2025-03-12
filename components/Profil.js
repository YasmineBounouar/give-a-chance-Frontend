

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/user";
import { useRouter } from "next/router";
import styles from "../styles/Profil.module.css"



function Profil() {
 
  const router = useRouter();


   const [profildata, setProfildata] = useState([]);
  // const [errorMessage, setErrorMessage] = useState("");
 
 
  const user = useSelector((state) => state.user.value);
  





  useEffect(() => {
    
fetch(`http://localhost:3000/profil/myprofile/${user.token}`)
.then(response=>response.json())
.then(data=>{

setProfildata(data.myprofils)

})

}, [user.token]);

console.log(profildata.info?.location);

  
    


  

  
  return (
<div className={styles.profilContainer}>
        <div className={styles.profilCard}>
          <div className={styles.profilImage}>
          <img
              src={profildata.info?.profilpicture}
              alt="Profil"
              className={styles.profilAvatar}
            />
          </div>
          <p className={styles.description}>{profildata.info?.location}</p>

          <div className={styles.profilDetails}>
            <h2 className={styles.username}>{profildata.username}</h2>
            <p className={styles.email}>{profildata.email}</p>
            <p className={styles.role}>{profildata.info?.role}</p>
            <p className={styles.location}>{profildata.info?.location}</p>
            <p className={styles.description}>{profildata.info?.description}</p>
            <p className={styles.description}>{profildata.info?.firstname}</p>
            <p className={styles.description}>{profildata.info?.hardskillstechnologies}</p>
            {/* <p className={styles.description}>{profildata.info?.info.presentation}</p> */}
            <p className={styles.description}>{profildata.info?.description}</p>
            <p className={styles.description}>{profildata.info?.description}</p>

          </div>

         
          
            {/* {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} */}
          
          </div>
        </div>
 
    );
  }


export default Profil;
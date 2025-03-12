import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/user";
import { useRouter } from "next/router";




function Profil() {
 
  const router = useRouter();

  // const [profil, setProfil] = useState(null);
  // const [errorMessage, setErrorMessage] = useState("");
 
 
  const user = useSelector((state) => state.user.value);
  const profils = useSelector((state) => state.profils.value);

  useEffect(() => {
    
    user
  
    
   
    }, [user.token]);


  

  
  return (
<div className={styles.profilContainer}>
        <div className={styles.profilCard}>
          <div className={styles.profilImage}>
            <Image
              src={profil.image}
              alt="Profil"
              className={styles.profilAvatar}
            />
          </div>

          <div className={styles.profilDetails}>
            <h2 className={styles.username}>{user.username}</h2>
            <p className={styles.email}>{profil.email}</p>
            <p className={styles.role}>{profil.role}</p>
            <p className={styles.location}>{profil.location}</p>
            <p className={styles.description}>{profil.description}</p>
            <p className={styles.description}>{data.firstname}</p>
            <p className={styles.description}>{data.hardskillstechnologies}</p>
            <p className={styles.description}>{data.presentation}</p>
            <p className={styles.description}>{profil.description}</p>
            <p className={styles.description}>{profil.description}</p>
            <p className={styles.description}>{profil.description}</p>

          </div>

         
          
            {/* {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} */}
          
          </div>
        </div>
 
    );
  }


export default Profil;
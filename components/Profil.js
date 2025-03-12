import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/user";
import { useRouter } from "next/router";




function Profil() {
  const dispatch = useDispatch();
  const router = useRouter();
  
  
  
   const user = useSelector((state) => state.user.value);
  
  
  
  const [profil, setProfil] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    
    
    if (!user.token) return; // Vérification supplémentaire (normalement inutile si l’utilisateur est ici)

    fetch(`http://localhost:3000/profil/dev/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        
        if (data.result) {
          // Vérifie si `result` est `true`, ce qui signifie que la requête a réussi
          setProfil(data.profil);
         // `data.profils` contient la liste des développeurs renvoyée par le backend
       
       
        } else {
          
          setErrorMessage("Votre session a expiré. Veuillez vous reconnecter.");
          
          dispatch(logout()); // Déconnecter l'utilisateur
          
          router.push("/login"); // Rediriger vers la page de connexion
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
        setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      });
 
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
            <h2 className={styles.username}>{profil.username}</h2>
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

         
          
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          
          </div>
        </div>
 
    );
  }


export default Profil;
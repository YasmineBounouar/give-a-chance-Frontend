import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/user";
import { useRouter } from "next/router";
import styles from "../styles/Profil.module.css";
import DashboardHeader from "./DashboardHeader";

function Profil() {
  const router = useRouter();

  const [profildata, setProfildata] = useState([]);
  // const [errorMessage, setErrorMessage] = useState("");

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    fetch(`http://localhost:3000/profil/myprofile/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setProfildata(data.myprofils);
      });
  }, [user.token]);

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

        <div className={styles.profilDetails}>
          <h2 className={styles.description}>{profildata.username}</h2>
          <p className={styles.description}>EMAIL: {profildata.email}</p>
          <p className={styles.description}>
            FIRSTNAME: {profildata.firstname}
          </p>
          <p className={styles.description}>LASTNAME: {profildata.lastname}</p>

          <p className={styles.description}>
            PRÉSENTATION: {profildata.info?.presentation}
          </p>
          <p className={styles.description}>
            HARDSKILLSTECHNOLOGIES: {profildata.info?.hardskillstechnologies}
          </p>

          <p className={styles.description}>
            QUALIFICATION: {profildata.info?.qualification}
          </p>
          <p className={styles.description}>
            DISPONIBILITIES: {profildata.info?.disponibilities}
          </p>
          <p className={styles.description}>
            LOCATION: {profildata.info?.location}
          </p>
          <p className={styles.description}>
            SPÉCIALITY: {profildata.info?.speciality}
          </p>
          <p className={styles.description}>
            TYPECONTRAT: {profildata.info?.typecontrat}
          </p>

          <p className={styles.description}>SOCIAL MÉDIA: </p>
          <p className={styles.description}>
            {profildata.info?.reseaux.linkedin}
          </p>
          <p className={styles.description}>
            {profildata.info?.reseaux.github}
          </p>
          <p className={styles.description}>
            {profildata.info?.reseaux.twitter}
          </p>
        </div>

        {/* {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} */}
      </div>
    </div>
  );
}

export default Profil;

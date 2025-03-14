import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Pageannuaire.module.css";
import Image from "next/image";
import CardDev from "../components/CardDev";
import { useDispatch, useSelector } from "react-redux";
import { getprofils } from "../reducers/profils.js";
import { useRouter } from "next/router.js";
import Footer from "../components/Footer.js";

export default function Pageannuaire() {
  const [profilDev, setProfilDev] = useState([]);
  const [searchprofil, setSearchprofil] = useState("");
  const user = useSelector((state) => state.user.value);
  const [limit, setLimit] = useState(10);


  const dispatch = useDispatch();
  const Router = useRouter();




  const handleSubmit = () => {
   
    setLimit((prevLimit) => prevLimit + 10);



  };






  const handleSearch = (e) => {
    setSearchprofil(e.target.value);

  };



  useEffect(() => {
    fetch("http://localhost:3000/profil/All")
      .then((response) => response.json())
      .then((data) => {

        console.log(data, "fetch");

        // const shuffled = data.profils.sort(() => 0.5 - Math.random())
         setProfilDev(data.profils?.slice(0, limit));
        // setProfilDev(data.profils);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [user.token, limit]);



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
    );
  });

  return (
    <div className={styles.mainAnnuaire}>
      <header className={styles.headerAnnuaire}>
        <Image
          onClick={() => Router.push("/")}
          className={styles.logoheader}
          src="/GIVE A CHANCE.png"
          width={150}
          height={75}
          alt="Logo"
        />
        <FontAwesomeIcon
          icon={faUser}
          className={styles.customIcon}
          onClick={() => {
            Router.push("/DashboardRecruteur");
          }}
        />
      </header>

      <div className={styles.formContainer}>
        <aside className={styles.colonne}>
          <ul className={styles.asideElement}>
            <li>fullstack</li>
            <li>frontend</li>
            <li>backend</li>
          </ul>

          <ul className={styles.asideElement}>
            <li>marseille</li>
            <li>Paris</li>
            <li>Lille</li>
          </ul>

          <ul className={styles.asideElement}>
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
              <p className={styles.filterPhrase}>
                Filter by city, profession, or technology
              </p>
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
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles.fontawesome}
              />
            </div>

            <div className={styles.cardContainer}>{pageannuaireCard}</div>

            <button
              onClick={handleSubmit}
              type="button"
              className={styles.buttonAnnuaire}
            >
              More profiles
            </button>
          </div>
        </div>
       
      </div>
      <Footer />
    </div>
  );
}

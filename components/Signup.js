import React from "react";
import { useState } from "react";
import styles from "../styles/Connexion.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";

import { useRouter } from "next/router";

function SingUP() {
  // Déclaration des états locaux pour gérer les valeurs des champs du formulaire
  const [Username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("Developer");
  const [error, setError] = useState(false); // Erreur pour les champs vides
  const [errorEmail, setErrorEmail] = useState(false); // Erreur pour l'email invalide
  const [detectdoublon, setDetectdoublon] = useState(false); // Erreur si l'email existe déjà dans la base de données
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour valider l'email

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const router = useRouter();

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut, lié à l'envoi du formulaire

    // Vérification si tous les champs sont remplis
    if (
      Username === "" ||
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === ""
    ) {
      setError(true); // Si un champ est vide, afficher une erreur générale
      return; // Stoppe l'exécution si une erreur est trouvée
    }

    // Vérification si l'email est valide
    if (emailRegex.test(email) === false) {
      setErrorEmail(true); // Si l'email est invalide, afficher une erreur pour l'email
      return; // Stoppe l'exécution si l'email n'est pas valide
    }

    // Si tout est valide, on passe à la soumission des données
    if (selectedOption === "Developer") {
      fetch("http://localhost:3000/create/signup/dev", {
        // Envoi des données à l'API pour un développeur
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: Username,
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json()) // Attente de la réponse de l'API
        .then((data) => {
          console.log(data);

          if (data.result === true) {
            // Si l'inscription réussit, réinitialiser les champs du formulaire
            setUsername("");
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");

            dispatch(
              login({
                username: data.Infos.username,
                role: selectedOption,
                email: data.Infos.email,
                token: data.Infos.token,
                id: data.Infos._id,
              })
            ); // element vide à remplir du store.

            if (selectedOption === "Developer") {
              router.push("/Onboarding");
            } else if (selectedOption === "Developer") {
              router.push("/Pageannuaire");
            }

            // if userooter +
          } else if (data.result === false) {
            // Si l'utilisateur existe déjà, on active l'état detectdoublon à true
            setDetectdoublon(true); // Ce message sera affiché si l'email existe déjà dans la base de données
          }
        })
        .catch((error) => {
          console.error("Error:", error); // Affiche une erreur dans la console si l'API échoue
        });
    } else {
      // Même logique, mais pour un recruteur
      fetch("http://localhost:3000/create/signup/recruteur", {
        // Envoi des données à l'API pour un recruteur
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: Username,
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json()) // Attente de la réponse de l'API
        .then((data) => {
          if (data.result) {
            // Si l'inscription réussit pour un recruteur, réinitialiser les champs
            setUsername("");
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");
            if (selectedOption === "Recruteur") {
              router.push("/Pageannuaire");}
            dispatch(
              login({
                username: data.Infos.username,
                role: selectedOption,
                email: data.Infos.email,
                token: data.Infos.token,
                id: data.Infos._id,
              })
              // action.payload du reducers = data.Infos.username,
            ); // element vide à remplir du store.

            
           
          } else if (data.result === false) {
            // Si l'utilisateur existe déjà, on active l'état detectdoublon à true
            setDetectdoublon(true); // Comme pour le cas "Developer", cette erreur sera affichée si l'email est déjà pris
          }
        })
        .catch((error) => {
          console.error("Error:", error); // Affiche une erreur dans la console si l'API échoue
        });
    }
  };

  return (
    <div>
      <form className={styles.formsignup}>
        <h3 className={styles.titlesignin}>Sign up</h3>

        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={Username}
          type="text"
          name="username"
          placeholder="Username"
          required
          className={styles.username}
        />

        <input
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          value={firstname}
          type="text"
          name="first name"
          placeholder="First name"
          required
          className={styles.firstname}
        />

        <input
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          value={lastname}
          type="text"
          name="last name"
          placeholder="Last name"
          required
          className={styles.lastname}
        />

        {errorEmail && (
          <p style={{ color: "red" }}>Please enter a valid email.</p>
        )}
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          required
          className={styles.email}
        />

        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          name="password"
          placeholder="Password"
          required
          className={styles.password}
        />

        <div className={styles.deroulante}>
          <select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
            className={styles.listederoulante}
          >
            <option value="Developer" className={styles.type}>
              Developer
            </option>
            <option value="Recruter" className={styles.type}>
              Recruteur
            </option>
          </select>
        </div>

        {error && (
          <p style={{ color: "red" }}>Please fill in all the fields.</p>
        )}
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          type="submit"
          className={styles.button}
        >
          Submit
        </button>
        {detectdoublon && <p style={{ color: "red" }}>User already exist</p>}
      </form>
    </div>
  );
}

export default SingUP;

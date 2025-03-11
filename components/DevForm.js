import React, { useState } from 'react'
import styles from '../styles/Onboarding.module.css'

import { useRouter } from 'next/router';


function DevForm() {
    // Déclaration des états pour stocker les valeurs des champs du formulaire
    const [presentation, setPresentation] = useState('');
    const [softskills, setSoftskills] = useState('');
    const [hardskillstechnologies, setHardskillstechnologies] = useState('');
    const [qualification, setQualification] = useState('');
    const [disponibilities, setDisponibilities] = useState('');
    const [typecontrat, setTypecontrat] = useState('');
    const [Location, setLocation] = useState('');
    const [Speciality, setSpeciality] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [twitter, setTwitter] = useState('');
    const [error, setError] = useState(false);

 

    // Fonction exécutée lors de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        
        
        
        // Vérification que tous les champs obligatoires sont remplis
        if (presentation === '' || softskills === '' || hardskillstechnologies === '' || qualification === '' || disponibilities === '' || typecontrat === '' || Location === '' || Speciality === '') {
            setError(true);
            return;
        }

        
        // Envoi des données au backend via une requête PUT
        fetch('http://localhost:3000/update/Dev/:id', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                presentation,
                softskills,
                hardskillstechnologies,
                qualification,
                disponibilities,
                typecontrat,
                Location,
                Speciality,
                linkedin,
                github,
                twitter
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.updatedProfil); // Affiche la réponse du serveur dans la console

            // Redirige l'utilisateur vers la page de profil
            if({result:true}){
                
                router.push('/Onboarding')
            }
            
        })
        .catch((error) => {
            console.error('Error:', error); // Capture les erreurs en cas de problème
        });
    }

    return (
        <form className={styles.form}>  {/* Début du formulaire */}
            <h2 className={styles.Title}>Complétez votre profil</h2>  

            {/* Champ de saisie pour la présentation */}
            <div className={styles.presentation}>
                <label className={styles.textPresentation}>Présentation:</label>
                <textarea 
  className={styles.inputPresentation} 
  onChange={(e) => setPresentation(e.target.value)} 
  value={presentation} 
  name='presentation' 
  placeholder='Présentation' 
  required 
  cols="20" 
  rows="10"
/>

            </div>

            {/* Champ de saisie pour les soft skills */}
            <div className={styles.softskills}>
                <label className={styles.textSoftskills}>Soft Skills:</label>
                <input className={styles.inputSoftskills} onChange={(e) => setSoftskills(e.target.value)} value={softskills} type='text' name='softskills' placeholder='Soft Skills' required />
            </div>

            {/* Champ de saisie pour les hard skills et technologies */}
            <div className={styles.hardskillstechnologies}>
                <label className={styles.textHardskillstechnologies}>Hard Skills / Technologies:</label>
                <input className={styles.inputHardskillstechnologies} onChange={(e) => setHardskillstechnologies(e.target.value)} value={hardskillstechnologies} type='text' name='hardskillstechnologies' placeholder='Hard Skills / Technologies' required />
            </div>

            {/* Champ de saisie pour la qualification */}
            <div className={styles.qualification}>
                <label className={styles.textQualification}>Qualification:</label>
                <input className={styles.inputQualification} onChange={(e) => setQualification(e.target.value)} value={qualification} type='text' name='qualification' placeholder='Qualification' required />
            </div>

            {/* Champ de saisie pour les disponibilités */}
            <div className={styles.disponibilities}>
                <label className={styles.textDisponibilities}>Disponibilités:</label>
                <input className={styles.inputDisponibilities} onChange={(e) => setDisponibilities(e.target.value)} value={disponibilities} type='text' name='disponibilities' placeholder='Disponibilités' required />
            </div>

            {/* Champ de saisie pour la localisation */}
            <div className={styles.Location}>
                <label className={styles.textLocation} >Localisation:</label>
                <input className={styles.inputLocation} onChange={(e) => setLocation(e.target.value)} value={Location} type='text' name='location' placeholder='Localisation' required />
            </div>

            {/* Champ de saisie pour le type de contrat souhaité */}
            <div className={styles.typecontrat}>
                <label className={styles.textTypecontrat} >Type de Contrat:</label>
                <input  className={styles.inputTypecontrat} onChange={(e) => setTypecontrat(e.target.value)} value={typecontrat} type='text' name='typecontrat' placeholder='Type de Contrat' required />
            </div>

            {/* Champ de saisie pour la spécialité */}
            <div className={styles.Speciality}>
                <label className={styles.textSpeciality} >Spécialité:</label>
                <input className={styles.inputSpeciality} onChange={(e) => setSpeciality(e.target.value)} value={Speciality} type='text' name='speciality' placeholder='Spécialité' required />
            </div>

            {/* Champs pour les liens vers les réseaux sociaux */}
            <div className={styles.reseaux}>
                <label className={styles.textReseaux} >Réseaux Sociaux:</label>
                <input className={styles.inputLinkedin} onChange={(e) => setLinkedin(e.target.value)} value={linkedin} type='text' name='linkedin' placeholder='LinkedIn URL' />
                <input className={styles.inputGithub} onChange={(e) => setGithub(e.target.value)} value={github} type='text' name='github' placeholder='GitHub URL' />
                <input className={styles.inputTwitter} onChange={(e) => setTwitter(e.target.value)} value={twitter} type='text' name='twitter' placeholder='Twitter URL' />
            </div>

            {/* Message d'erreur si un champ est manquant */}
            {error && <p style={{ color: 'red' }}>Veuillez remplir tous les champs</p>}
            
            {/* Bouton de soumission du formulaire */}
            <button  className={styles.button} onClick={(e) => handleSubmit(e)} type='button'>Enregistrer</button>
        </form>
    )
}

export default DevForm;

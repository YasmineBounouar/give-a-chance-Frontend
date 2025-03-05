import React, { useState } from 'react'
import styles from '../styles/DevForm.module.css'


function DevForm() {
    const [presentation, setPresentation] = useState('')
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);

        if (presentation === '' || softskills === '' || hardskillstechnologies === '' || qualification === '' || disponibilities === '' || typecontrat === '' || Location === '' || Speciality === '') {
            setError(true);
            return
        }

        fetch('http://localhost:3000/update/Dev/:id', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                presentation: presentation,
                softskills: softskills,
                hardskillstechnologies: hardskillstechnologies,
                qualification: qualification,
                disponibilities: disponibilities,
                typecontrat: typecontrat,
                Location: Location,
                Speciality: Speciality,
                linkedin: linkedin,
                github: github,
                twitter: twitter
            })

        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.updatedProfil);

            })
            .catch((error) => {
                console.error('Error:', error);
            })

    }
    return (
        <form className={styles.form}>
            <h5>Onbording</h5>


            <div className={styles.presentation} >
                <label className={styles.text}>presentation</label>
                <input className={styles.input} onChange={(e) => { setPresentation(e.target.value) }} value={presentation} type='text' name='presentation' placeholder='presentation' required></input>
            </div>

            <div className={styles.softskills}>
                <label className={styles.text2}>softskills</label>
                <input className={styles.input2} onChange={(e) => { setSoftskills(e.target.value) }} value={softskills} type='text' name='softskills' placeholder='softskills' required></input>
            </div>

            <div className={styles.hardskillstechnologies}>
                <label>hardskillstechnologies</label>
                <input onChange={(e) => { setHardskillstechnologies(e.target.value) }} value={hardskillstechnologies} type='text' name='hardskillstechnologies' placeholder='hardskillstechnologies' required></input>
            </div>

            <div className={styles.qualification}>
                <label>qualification</label>
                <input onChange={(e) => { setQualification(e.target.value) }} value={qualification} type='text' name='qualification' placeholder='qualification' required></input>
            </div>

            <div className={styles.disponibilities}>
                <label>disponibilities</label>
                <input onChange={(e) => { setDisponibilities(e.target.value) }} value={disponibilities} type='text' name='disponibilities' placeholder='disponibilities' required></input>
            </div>

            <div className={styles.Location}>
                <label>Location</label>
                <input onChange={(e) => { setLocation(e.target.value) }} value={Location} type='text' name='location' placeholder='Location' required></input>
            </div>

            <div className={styles.typecontrat}>
                <label>typecontrat</label>
                <input onChange={(e) => { setTypecontrat(e.target.value) }} value={typecontrat} type='text' name='typecontrat' placeholder='typecontrat' required></input>
            </div>

            <div className={styles.Speciality}>
                <label>Speciality</label>
                <input onChange={(e) => { setSpeciality(e.target.value) }} value={Speciality} type='text' name='speciality' placeholder='Speciality' required></input>
            </div>

            <div className={styles.reseaux}>
                <label>reseaux</label>

                <input onChange={(e) => { setLinkedin(e.target.value) }} value={linkedin} type='text' name='linkedin' placeholder='linkedin url' required></input>
                <input onChange={(e) => { setGithub(e.target.value) }} value={github} type='text' name='github' placeholder='github url' required></input>
                <input onChange={(e) => { setTwitter(e.target.value) }} value={twitter} type='text' name='twitter' placeholder='twitter url' required></input>
            </div>

            {error && <p style={{ color: 'red' }}>Veuillez remplir tous les champs</p>}
            <button onClick={(e) => { handleSubmit(e) }} type='Save'>Save</button>

        </form>


    )
}

export default DevForm

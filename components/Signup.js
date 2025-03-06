import React from 'react'
import { useState } from 'react';
import styles from '../styles/Connexion.module.css';

function SingUP() {

const [Username, setUsername] = useState('');
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [selectedOption, setSelectedOption] = useState('Developer');
const [error, setError] = useState(false);

const [errorEmail, setErrorEmail] = useState(false);
const [detectdoublon,setDetectdoublon]=useState(false)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleSubmit = (e) => {
e.preventDefault();
console.log(e);

if(Username===''|| firstname==='' || lastname==='' || email==='' || password===''){
 setError(true);
 return
}

if(emailRegex.test(email)===false){
    setErrorEmail(true)
    return
  }
  
    
 


if(selectedOption==='Developer'){

console.log(selectedOption);

//fetch type post

fetch('http://localhost:3000/create/signup/dev',{   
method: 'POST', 
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({  
username: Username,
firstname: firstname,
lastname: lastname,
email: email,
password: password
})

})
.then((response) => response.json())
.then((data) =>{ //celui tourne si on a reussi a faire le fetch
    console.log(data.Infos);
    if(data.result===true){


setUsername('');
setFirstname('');//pour vider les champs
setLastname('');
setEmail('');
setPassword('');
}
else if(data.result===false){
      setDetectdoublon(true)}
      //l'etat a etait créer pour detecter les doublons d'email et declencher un msg d'erreur encas de doublon



})
.catch((error) => {
console.error('Error:', error);

})


}

    else{
        fetch('http://localhost:3000/create/signup/recruteur',{   
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({  
            username: Username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
            })
            
            })
            .then((response) => response.json())
            .then((data) => {
                //console.log(selectedOption);
                console.log(data.Infos);
                if(data.result){
            setUsername('');
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');}
               else if(data.result===false){
                setDetectdoublon(true)}
            
            })
            
            .catch((error) => {
            console.error('Error:', error);
            
            })
    }






}
  return (
    <div>

<form className={styles.formsignup}>

<h3 className={styles.titlesignin}>Sign up</h3>


<input  onChange={(e)=>{setUsername(e.target.value)}} value={Username} type="text" name="username" placeholder='Username' required className={styles.username}/>

    <input onChange={(e)=>{setFirstname(e.target.value)}} value={firstname} type="text" name="first name" placeholder='First name' required className={styles.firstname}/>
   
    <input onChange={(e)=>{setLastname(e.target.value)}} value={lastname} type="text" name="last name" placeholder='Last name' required className={styles.lastname}/>

    {errorEmail && <p style={{color:'red'}}>Please enter a valid email.</p>}
    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" name="email" placeholder='Email' required className={styles.email}/>

    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" name="password" placeholder='Password'required className={styles.password}/>

   <div className={styles.deroulante}><select value={selectedOption} onChange={(e)=>{setSelectedOption(e.target.value)}} className={styles.listederoulante}>
        <option value="Developer" className={styles.type}>Developer</option>
        <option value="Recruter"className={styles.type}>Recruteur</option>
</select></div> 

    {error && <p style={{color:'red'}}>Please fill in all the fields.</p>}
    <button onClick={(e)=>{handleSubmit(e)}} type="submit" className={styles.button}>Submit</button>
    {detectdoublon && <p style={{color:'red'}}>User already exist</p>}

</form>

    </div>
  )
}

export default SingUP
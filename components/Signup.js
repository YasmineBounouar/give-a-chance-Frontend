import React from 'react'
import styles from '../styles/signin.module.css'
import { useState } from 'react';

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

<h3>SignUP</h3>


<input  onChange={(e)=>{setUsername(e.target.value)}} value={Username} type="text" name="username" placeholder='userName' required/>

    <input onChange={(e)=>{setFirstname(e.target.value)}} value={firstname} type="text" name="firstname" placeholder='firstname' required/>
   
    <input onChange={(e)=>{setLastname(e.target.value)}} value={lastname} type="text" name="lastname" placeholder='lastname' required/>

    {errorEmail && <p style={{color:'red'}}>Veuillez mettre un email valide</p>}
    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" name="email" placeholder='Email' required/>

    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" name="password" placeholder='Password'required/>

    
<select value={selectedOption} onChange={(e)=>{setSelectedOption(e.target.value)}} >
        <option value="Developer">Developer</option>
        <option value="Recruter">Recruteur</option>
</select>
    {error && <p style={{color:'red'}}>Veuillez remplir tous les champs</p>}
    <button onClick={(e)=>{handleSubmit(e)}} type="submit">Valider</button>
    {detectdoublon && <p style={{color:'red'}}>User already exist</p>}

</form>

    </div>
  )
}

export default SingUP
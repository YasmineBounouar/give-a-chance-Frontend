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


const handleSubmit = (e) => {
e.preventDefault();
console.log(e);

if(Username===''|| firstname==='' || lastname==='' || email==='' || password===''){
 setError(true);
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
.then((data) => {
console.log(data.Infos);

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
                console.log(selectedOption);
                
            console.log(data.Infos);
            
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


    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" name="email" placeholder='Email' required/>

    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" name="password" placeholder='Password'required/>

    
<select value={selectedOption} onChange={(e)=>{setSelectedOption(e.target.value)}} >
        <option value="Developer">Developer</option>
        <option value="Recruter">Recruteur</option>
</select>
    {error && <p style={{color:'red'}}>Veuillez remplir tous les champs</p>}
    <button onClick={(e)=>{handleSubmit(e)}} type="submit">Valider</button>

</form>

    </div>
  )
}

export default SingUP
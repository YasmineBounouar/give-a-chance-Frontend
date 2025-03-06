import React from 'react'
import styles from '../styles/Connexion.module.css'
import { useState } from 'react';

function SingIN() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const[usernotfound,setUsernotfound]=useState(false)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const handleClick = (e) => {
    e.preventDefault();
    //console.log(e);
    
    if( email==='' || password===''){
     setError(true);
     return
    }

    if(emailRegex.test(email)===false){
      setErrorEmail(true)
      console.log(errorEmail)
      return
    }
    
    
    
    
   
    
    //fetch type post
    
    fetch('http://localhost:3000/create/signin',{   
    method: 'POST', 
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({  
    email: email,
    password: password
    })
    
    })
    .then((response) => response.json())
    .then((data) => {
    console.log(data.user,data.role);

    if(data.result===true){
    setPassword('')
    setEmail('')
  }else if(data.result===false){
      setUsernotfound(true)
  }
    
    })
    .catch((error) => {
    console.error('Error:', error);
    })
    
  

  }
  return (
    
    
    <div>

    <form className={styles.formsignin}>

    <h3 className={styles.titlesignin}>Sign in</h3>

   
    
    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" name="mdp" placeholder='email' className={styles.inputemail}/>
   {errorEmail && <p style={{color:'red'}}>Please enter a valid email.</p>}

    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" name="password" placeholder='password' className={styles.inputpassword}/>

    {usernotfound && <p style={{color:'red'}}>Utilisateur not found</p>}

    
    {error && <p style={{color:'red'}}>Please fill in all the fields.</p>}
  
   <button onClick={(e)=>{handleClick(e)}} type="submit" className={styles.buttonSubmmit}>Submit</button>
    
    

   
</form>

    </div>
  )
}

export default SingIN
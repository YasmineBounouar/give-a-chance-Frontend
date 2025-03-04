import React from 'react'
import Singin from '../components/Singin';
import Signup from '../components/Signup';
import { useState } from 'react';

function connexion() {
  
  const [connexiontype, setConnexiontype] = useState(true);
  

  let SigninText=<p>Vous n’avez pas de compte ? <span onClick={()=>{setConnexiontype(!connexiontype)}}>créer un compte</span> </p>
  let signuptext=<p>Vous avez déjà un compte ? <span onClick={()=>{setConnexiontype(!connexiontype)}}>connectez-vous</span> </p>

  return (
    <div> 

{/* affichage conditionnel */}
{connexiontype? SigninText : signuptext} 
{connexiontype ? <Singin/> : <Signup/>}

    </div>

  )
}
export default connexion;
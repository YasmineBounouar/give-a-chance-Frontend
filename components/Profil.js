import React from 'react'
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";

function Profil() {

    

    const user = useSelector((state) => state.token.value);

    console.log(token);
    
    
    useEffect(() => {
      
        
            // Envoi des données au backend via une requête get
            fetch('http://localhost:3000/profils/:'
              
          .then((response) => response.json())
          .then((data) => {
              console.log(data.updatedProfil); // Affiche la réponse du serveur dans la console
     
          }))
          
          
          .catch((error) => {
              console.error('Error:', error);  // Affiche une erreur dans la console si l'API échoue
          });
      
    
    
    
    
    }, [])
    
    
    
    
    
    
    



  return (
    <div>Profil</div>
  )
}

export default Profil
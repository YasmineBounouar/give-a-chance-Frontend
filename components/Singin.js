import React from 'react'
import styles from '../styles/signin.module.css'

function SingIN() {
  return (
    <div>

<form className={styles.formsignin}>

  <h3>SignIN</h3>

    <input type="text" name="Unsername" placeholder='Username'/>

    <input type="password" name="mdp" placeholder='Password'/>

    <button type="submit">Submit</button>
    
    
<select >
        <option value="Optionone">Developer</option>
        <option value="Option2">Recruteur</option>
</select>
   
</form>

    </div>
  )
}

export default SingIN
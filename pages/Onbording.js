import React from 'react'
import Header from '../components/Header';
import style from '../styles/Onbording.module.css';
import DevForm from '../components/DevForm';


function Onbording() {
    return (
        <div className={style.container}>

            <div className={style.main}>
                
                <div className={style.header}>
                <Header />
                </div>

               <div className={style.menuContainer}>
                
                <aside className={style.menu}>
                  <h2>Onbording</h2>
                <h5>Modification</h5>
                <h5>My Profil</h5>
                <h5>Explore</h5>
                </aside>

                <div className={style.content}>
                
                <DevForm />
                
                </div>
                </div>
           
            </div>

        </div>
    )
}

export default Onbording

import React, { useReducer } from 'react';
import style from '../styles/Onboarding.module.css';

import Footer from '../components/Footer';
import DashboardHeader from '../components/DashboardHeader';
import DashboardDev from '../components/DashboardDev';
import { useRouter } from 'next/router';
import Profil from '../components/Profil'

function dashboardDeveloper() {

const router=useRouter()


    





    return (
        <div className={style.container}>
            <div className={style.main}>
                
                <div className={style.header}>
                    <DashboardHeader/>

                </div>

                <div className={style.menuContainer}>
                    
                    <div className={style.content}>
                    <Profil/>
                 
                    </div>
                </div>
                <Footer/>
            </div>
          
        </div>
    );
}

export default dashboardDeveloper;
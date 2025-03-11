import React from 'react';
import Header from '../components/Header';
import style from '../styles/Onboarding.module.css';
import DevForm from '../components/DevForm';
import Link from 'next/Link';
import Footer from '../components/Footer';
import DashboardHeader from '../components/DashboardHeader';


function Onboarding() {
    return (
        <div className={style.container}>
            <div className={style.main}>
                
                <div className={style.header}>
                    <DashboardHeader/>
                </div>

                <div className={style.menuContainer}>
                    
                    <div className={style.content}>
                        <DevForm />
                    </div>
                </div>
                <Footer/>
            </div>
          
        </div>
    );
}

export default Onboarding;
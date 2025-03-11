import React from 'react';
import style from '../styles/Onboarding.module.css';
import Link from 'next/Link';
import Footer from '../components/Footer';
import DashboardHeader from '../components/DashboardHeader';
import DashboardDev from '../components/DashboardDev';


function dashboardDeveloper() {
    return (
        <div className={style.container}>
            <div className={style.main}>
                
                <div className={style.header}>
                    <DashboardHeader/>
                </div>

                <div className={style.menuContainer}>
                    
                    <div className={style.content}>
                        <DashboardDev/>
                    </div>
                </div>
                <Footer/>
            </div>
          
        </div>
    );
}

export default dashboardDeveloper;
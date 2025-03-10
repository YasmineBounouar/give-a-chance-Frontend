import React from 'react';
import Header from '../components/Header';
import style from '../styles/Onboarding.module.css';
import DevForm from '../components/DevForm';
import Link from 'next/Link';
import Footer from '../components/Footer';

function Onboarding() {
    return (
        <div className={style.container}>
            <div className={style.main}>
                
                <div className={style.header}>
                    <Header />
                </div>

                <div className={style.menuContainer}>
                    <aside className={style.menu}>
                        <h2>Onboarding</h2>

                        <Link href="/CardProfils" className={style.aside}>
                            My Profil
                        </Link>

                        <Link href="/" className={style.aside}>
                            Modification
                        </Link>

                        <Link href="/Pageannuaire" className={style.aside}>
                            Explore
                        </Link>
                    </aside>

                    <div className={style.content}>
                        <DevForm />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Onboarding;
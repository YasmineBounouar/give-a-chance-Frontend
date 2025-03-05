import React from 'react'
import Header from '../components/Header';
import style from '../styles/Onbording.module.css';
import DevForm from '../components/DevForm';

function Onbording() {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <Header />
                <h5>Onbording</h5>
                <DevForm />
            </div>

        </div>
    )
}

export default Onbording

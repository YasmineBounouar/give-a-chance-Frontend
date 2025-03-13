import React from "react";

import style from "../styles/Onboarding.module.css";
import DevForm from "../components/DevForm";
import Link from "next/link";
import Footer from "../components/Footer";
import DashboardHeader from "../components/DashboardHeader";
import DashboardDev from "../components/DashboardDev";

function Onboarding() {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.header}>
          <DashboardHeader />
        </div>

        <div className={style.menuContainer}>
          <div className={style.content}>
            <DevForm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Onboarding;

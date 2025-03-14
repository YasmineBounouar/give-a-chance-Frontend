import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faHome,
  faStar,
  faCompass,
  faThumbsUp,
  faPlus,
  faPaperPlane,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/DashboardRecruteur.module.css";
import Image from "next/image";
import Link from "next/link";
import Likes from "../components/Likes";
import Chat from "../components/Chat";
import { useState } from "react";
import Footer from "../components/Footer";

function DashboardRecruiter() {
  const [chat, setChat] = useState(false);

  return (
    <div className={styles.mainDashboard}>
      <header className={styles.headerDashboard}>
        <Link href="/">
          <Image
            className={styles.logoHeader}
            src="/GIVE A CHANCE.png"
            height={80}
            width={160}
            alt="Logo"
          />
        </Link>
        <div className={styles.headerIcons}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.customIcon}
          />
          <FontAwesomeIcon icon={faUser} className={styles.customIcon} />
        </div>
      </header>

      <div className={styles.contentContainer}>
        <aside className={styles.sidebar}>
          <nav className={styles.sidebarNav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
                <Link href="/">
                  <span className={styles.navText}>Home</span>
                </Link>
              </li>

              <li
                className={styles.navItem}
                onClick={() => {
                  setChat(!chat);
                }}
              >
                <FontAwesomeIcon icon={faStar} className={styles.navIcon} />
                <span className={styles.navText}>Favorites</span>
              </li>
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faCompass} className={styles.navIcon} />
                <Link href="/Pageannuaire">
                  <span className={styles.navText}>Explore</span>
                </Link>
              </li>
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faThumbsUp} className={styles.navIcon} />
                <span className={styles.navText}>Recommended</span>
              </li>

              <li
                className={styles.navItem}
                onClick={() => {
                  setChat(!chat);
                }}
              >
                <FontAwesomeIcon icon={faMessage} className={styles.navIcon} />
                <span className={styles.navText}>Chat</span>
              </li>
            </ul>
          </nav>
          <button className={styles.addNewButton}>
            <FontAwesomeIcon icon={faPlus} className={styles.buttonIcon} />
            <span>Add new</span>
          </button>
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.messagingContainer}>
            {chat ? <Chat /> : <Likes />}
          </div>
        </main>
   
      </div>
      <Footer />
    </div>
  );
}

export default DashboardRecruiter;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMagnifyingGlass,
  faUser,
  faHome,
  faStar,
  faCompass,
  faThumbsUp,
  faPlus,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/DashboardRecruteur.module.css"
import Image from 'next/Image';
import Link from 'next/Link';

function DashboardRecruiter() {
  return (
    <div className={styles.mainDashboard}>
      <header className={styles.headerDashboard}>
        <Image className={styles.logoHeader} src="/unnamed.jpg" height={80} width={80} alt="Logo" />
        <div className={styles.headerIcons}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.customIcon} />
          <FontAwesomeIcon icon={faUser} className={styles.customIcon} />
        </div>
      </header>


      <div className={styles.contentContainer}>
        <aside className={styles.sidebar}>
          <nav className={styles.sidebarNav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
               <Link href='/'><span className={styles.navText}>Home</span></Link> 
              </li>
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faStar} className={styles.navIcon} />
                <span className={styles.navText}>Favorites</span>
              </li>
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faCompass} className={styles.navIcon} />
                <span className={styles.navText}>Explore</span>
              </li>
              <li className={styles.navItem}>
                <FontAwesomeIcon icon={faThumbsUp} className={styles.navIcon} />
                <span className={styles.navText}>Recommended</span>
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
            <div className={styles.messagingHeader}>
              <h2 className={styles.messagingTitle}>Messages</h2>
            </div>

            <div className={styles.conversationList}>
          
              <div className={styles.conversationItem}>
                <div className={styles.avatarPlaceholder}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className={styles.conversationInfo}>
                  <h3 className={styles.conversationName}>John Doe</h3>
                  <p className={styles.conversationPreview}>Frontend Developer</p>
                </div>
              </div>

              <div className={styles.conversationItem}>
                <div className={styles.avatarPlaceholder}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className={styles.conversationInfo}>
                  <h3 className={styles.conversationName}>Jane Smith</h3>
                  <p className={styles.conversationPreview}>Backend Developer</p>
                </div>
              </div>

              <div className={styles.conversationItem}>
                <div className={styles.avatarPlaceholder}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className={styles.conversationInfo}>
                  <h3 className={styles.conversationName}>Alex Johnson</h3>
                  <p className={styles.conversationPreview}>Full Stack Developer</p>
                </div>
              </div>
            </div>

            <div className={styles.chatContainer}>
              <div className={styles.chatMessages}></div>

              <div className={styles.messageInputContainer}>
                <div className={styles.userIconContainer}>
                  <FontAwesomeIcon icon={faUser} className={styles.messageUserIcon} />
                </div>
                <input type="text" className={styles.messageInput} placeholder="Type your message here..." />
                <div className={styles.sendIconContainer}>
                  <FontAwesomeIcon icon={faPaperPlane} className={styles.messageSendIcon} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardRecruiter


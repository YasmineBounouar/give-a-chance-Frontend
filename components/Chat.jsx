import React from 'react'
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
import styles from '../styles/DashboardRecruteur.module.css'

function Chat() {
  return (
    <>

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
    <p className={styles.conversationPreview}>
      Frontend Developer
    </p>
  </div>
</div>

<div className={styles.conversationItem}>
  <div className={styles.avatarPlaceholder}>
    <FontAwesomeIcon icon={faUser} />
  </div>
  <div className={styles.conversationInfo}>
    <h3 className={styles.conversationName}>Jane Smith</h3>
    <p className={styles.conversationPreview}>
      Backend Developer
    </p>
  </div>
</div>

<div className={styles.conversationItem}>
  <div className={styles.avatarPlaceholder}>
    <FontAwesomeIcon icon={faUser} />
  </div>
  <div className={styles.conversationInfo}>
    <h3 className={styles.conversationName}>Alex Johnson</h3>
    <p className={styles.conversationPreview}>
      Full Stack Developer
    </p>
  </div>
</div>
</div>

<div className={styles.chatContainer}>
<div className={styles.chatMessages}></div>

<div className={styles.messageInputContainer}>
  <div className={styles.userIconContainer}>
    <FontAwesomeIcon
      icon={faUser}
      className={styles.messageUserIcon}
    />
  </div>
  <input
    type="text"
    className={styles.messageInput}
    placeholder="Type your message here..."
  />
  <div className={styles.sendIconContainer}>
    <FontAwesomeIcon
      icon={faPaperPlane}
      className={styles.messageSendIcon}
    />
  </div>
</div>
</div>


    </>
  )
}

export default Chat
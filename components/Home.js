import { Link } from 'next/Link';
import {Image} from 'next/Image'
import styles from '../styles/Home.module.css';
import CardProfile from './CardProfile.js'

function Home() {
  return (
<div className={styles.main}>
<header className={styles.header}>
 <Image src='/GIE.jpg' alt='logo'></Image>
 <Link href=''><span className={styles.profil}>PROFIL</span></Link>
 <Link href='#CONTACT'><span className={styles.contact}></span></Link>
 <Link href='#COMMENT CA MARCHE'><span className={styles.commentcamarche}></span></Link>
 <button>CONNEXION</button>
 <Link href='#FAQ'><span>?</span></Link>
 </header>

{/* <CardProfile/> */}


</div>
  );
}

export default Home;



// <div>
// <main className={styles.main}>


// <header className={styles.header}>
// <Image></Image>
// <Link href=''><span>PROFIL</span></Link>
// <Link href='#CONTACT'><span></span></Link>
// <Link href='#COMMENT CA MARCHE'><span></span></Link>
// <button>CONNEXION</button>
// <Link href='#FAQ'><span>?</span></Link>
// </header>

// <section>
// <h1>GIVE A CHANCE</h1>
// <p>lorem ipsum paragraphe de presentation</p>
// <button>EXPLORE PROFILS</button>
// <div className={styles.profilDevContainer}>
  
// <div>
//   <Link href='/'><span>partage</span></Link>
//   <span>LIKE</span> 
//   {/* quand on arive pas a dissocier entre un titre ou un paragraphe , et pour l'icone */}
//   <h5></h5>
//   <h6></h6>
//   <p></p>
//   <span>
//   <span>icon</span>
//   <p></p>
//   </span>
// </div>
// </div>

// </section>

// </main>



// <section>
// <h2></h2>

// </section>



// <section></section>
// <section></section>

// <footer></footer>


// </div>
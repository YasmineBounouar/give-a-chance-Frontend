import Link from 'next/Link';
import Image from 'next/Image'
import styles from '../styles/Home.module.css';
import CardProfile from './CardProfile.js'
import Header from './Header.js'

function Home() {
  return (
    <div className={styles.container}>
<div className={styles.main}>
<Header />
 <section className={styles.maincontent}>
 <h2>Trouver des dévoppeurs juniors qualifié et motivé</h2>
 <p className={styles.textpresentation}>lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
 </section>

</div>

</div>
  );
}

export default Home;



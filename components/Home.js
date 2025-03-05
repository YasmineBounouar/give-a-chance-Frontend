import Link from 'next/Link';
import Image from 'next/Image'
import styles from '../styles/Home.module.css';
import CardProfile from './CardProfile.js'
import Header from './Header.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // j'ai rajouter
import { fa1,fa2,fa3 } from '@fortawesome/free-solid-svg-icons';


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
<sectionv className={styles.commentCaMarche}>

<h2>Comment ça marche ?</h2>

<div className={styles.commentCaMarcheContainer}>
{/* j'ai rajouter les icon pour les commentCaMarche */}
<div className={styles.commentCaMarcheCardONE}><FontAwesomeIcon icon={fa1} />
<p>texte</p>
</div>
<div className={styles.commentCaMarcheCardTWO}><FontAwesomeIcon icon={fa2} />
<p>texte</p>
</div>
<div className={styles.commentCaMarcheCardThree}><FontAwesomeIcon icon={fa3} />
<p>texte</p>
</div>
</div>

<p>TROUVER DES DEVELOIPPEURS JUNIOR DEVOUÉ</p>

</sectionv>

<section className={styles.faqcontainer}>
<h2>FAQ</h2>
<p>Questions principales que se posent les recruteurs pour recruter un développeur junior en alternance, en CDI ou en CDD ?</p>

</section>

</div>

)};

export default Home;
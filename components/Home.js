import Link from 'next/Link';
import Image from 'next/Image'

import CardProfile from './CardProfile.js'
import Header from './Header.js'
import Faq from './Faq.js'
import ContactForm from './ContactForm.js'

import styles from '../styles/Home.module.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // j'ai rajouter
import { fa1,fa2,fa3 } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.main}>
        <Header />
        <section className={styles.maincontent}></section>
<section className={styles.maincontent}>
<h2>Trouver des dévoppeurs juniors qualifié et motivé</h2>
    <h4 className={styles.textpresentation}>lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</h4>
<div className={styles.cardprofil}>
<CardProfile />
<CardProfile />
<CardProfile />
<CardProfile />
</div>
</section>

<section className={styles.commentCaMarche}>
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
</section>

<section className={styles.faqcontainer}>
<h2>FAQ</h2>
<div>
        <h3>Questions principales que se posent les recruteurs pour recruter un développeur junior en alternance, en CDI ou en CDD ?</h3>
    </div>

    <Faq/>
</section>

</section>

<section className={styles.formcontainer}>

<ContactForm/>
</section>

<footer className={styles.footer}>
<Image src='/GIE.jpg' width={60} height={60} alt='logo'></Image>
<Link href=''><span className={styles.cgv}>Conditions générales</span></Link>
  <Link href=''><span className={styles.mentions}>mentions légales</span></Link>
  <Link href='#CONTACT'><span className={styles.contact}>Contact</span></Link>
</footer>
</div>

)};

export default Home;
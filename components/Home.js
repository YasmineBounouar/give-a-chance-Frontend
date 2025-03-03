import { Link } from 'next/Link';
import {Image} from 'next/Image'
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <main className={styles.main}>


          <header className={styles.header}>
          <Image></Image>
          <Link href='#FAQ'><span>Home</span></Link>


          <Link href='/home'><span></span></Link>
          <Link href=''><span></span></Link>
          <Link><span></span></Link>
   
          <button></button>
          <span>ICON</span>
          </header>

          <section id='FAQ'>
          <h1></h1>
          <p></p>
          <button>EXPLORE PROFILS</button>
          <div>
          <div>
            <Link><span></span></Link>
            <Link><span></span></Link>
            <h5></h5>
            <h6></h6>
            <p></p>
            <span>
            <span>icon</span>
            <p></p>
            </span>
          </div>
          </div>
          
        </section>

        </main>



        <section>
          <h2></h2>
          
        </section>






        <section></section>
        <section></section>

        <footer></footer>
        
  
    </div>
  );
}

export default Home;

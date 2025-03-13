import React from "react";
import styles from "../styles/Ccm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";

function CCM() {
  return (
    <div>
      <h2 className={styles.ccm}>How does it work?</h2>
      <div className={styles.commentCaMarcheContainer}>
        <section className={styles.commentCaMarcheCardTWO}>
          <span className={styles.fa}>
            <FontAwesomeIcon icon={fa1} />
          </span>
          <div className={styles.text}>
            <p>
              {" "}
              For developers: Create your profile by providing your technical
              skills, previous experiences, and work preferences (remote work,
              part-time, etc.). Add your portfolio to highlight your projects
              and expertise. For recruiters: Sign up to browse profiles of
              interest.
            </p>
          </div>
        </section>

        <section className={styles.commentCaMarcheCardTWO}>
          <span className={styles.fa}>
            <FontAwesomeIcon icon={fa2} />
          </span>
          <div className={styles.text}>
            <p>
              {" "}
              Use the directory to filter and search for candidates or positions
              based on specific criteria such as technology, required
              experience, and location. The directory allows a quick view of
              profiles or positions that match your criteria.
            </p>
          </div>
        </section>

        <section className={styles.commentCaMarcheCardTWO}>
          <span className={styles.fa}>
            <FontAwesomeIcon icon={fa3} />
          </span>
          <div className={styles.text}>
            <p>
              {" "}
              Use the directory to filter and search for candidates or positions
              based on specific criteria such as technology, required
              experience, and location. The directory allows a quick view of
              profiles or positions that match your criteria.
            </p>
          </div>
        </section>
      </div>
      <p className={styles.linkcommentCaMarche}>
        Find dedicated junior developers
      </p>
    </div>
  );
}

export default CCM;

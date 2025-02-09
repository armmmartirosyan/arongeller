import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

export function Banner() {
  return (
    <section className={styles.banner}>
      <h2 className={styles.title}>Building a Better Tomorrow.</h2>
      <p className={styles.text}>
        Where artistry meets engineering. We combine a passion for design with
        meticulous craftsmanship to create structures that stand the test of
        time.
      </p>
      {/* <div className={styles.bottom_dash}>
        <div className={styles.bottom_dash_wrapper}>
          <FontAwesomeIcon icon={faArrowDown} className={styles.arrow} />
          <p className={styles.bottom_dash_text}>Scroll to Explore</p>
        </div>
      </div> */}
    </section>
  );
}

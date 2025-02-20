import styles from "./index.module.scss";

export function Banner() {
  return (
    <section className={styles.banner}>
      <h2 className={styles.title}>
        Building <br />A <span className={styles.highlighted}>Better</span>{" "}
        <br />
        Tomorrow.
      </h2>
      <p className={styles.text}>
        Where artistry meets engineering. We combine a passion for design with
        meticulous craftsmanship to create structures that stand the test of
        time.
      </p>
    </section>
  );
}

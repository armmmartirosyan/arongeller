import styles from "./index.module.scss";
import { PROJECTS } from "@constants";
import { AlbumItem } from "@components";

export function Album() {
  return (
    <section className={styles.container}>
      <div className={styles.sticky}>
        <p className={styles.sticky_text}>Architecture</p>
      </div>
      <div className={styles.content}>
        {PROJECTS.map((item, index) => (
          <div key={index} className={styles.row}>
            <AlbumItem album={item} />
          </div>
        ))}
      </div>
      <div className={styles.empty} />
    </section>
  );
}

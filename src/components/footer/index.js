import { Contacts } from "./contacts";
import { CopyAuthor } from "./copy-author";
import styles from "./index.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.name}>ARON GELLER</h3>
      <Contacts />
      <CopyAuthor />
    </footer>
  );
}

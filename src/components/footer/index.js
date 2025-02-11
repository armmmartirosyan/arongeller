import Link from "next/link";
import { MENU } from "@constants";
import styles from "./index.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.menu}>
        {MENU.map((item) => (
          <Link href={item.link} key={item.text} className={styles.link}>
            {item.text}
          </Link>
        ))}
      </div> */}
      <h3 className={styles.name}>ARON GELLER</h3>
      <div className={styles.creator_container}>
        <p className={styles.footer_text}>
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
        <p className={styles.footer_text}>
          Powered by{" "}
          <Link
            href="https://portfolio-armen.vercel.app/en"
            target="_blank"
            className={styles.creator_link}
          >
            Armen Martirosyan
          </Link>
        </p>
      </div>
    </footer>
  );
}

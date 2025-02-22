import Link from "next/link";
import { CONTACT_LINKS } from "@constants";
import styles from "./index.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.name}>ARON GELLER</h3>

      <div className={styles.contacts_container}>
        {CONTACT_LINKS.map((item) => (
          <Link
            key={item.name}
            target={item.target}
            href={item.href}
            className={styles.contact_link}
          >
            {item.name}
          </Link>
        ))}
      </div>

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

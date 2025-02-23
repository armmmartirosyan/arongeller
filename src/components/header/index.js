import Image from "next/image";
import Link from "next/link";
import { logo } from "@icons";
import { Menu } from "./menu";
import styles from "./index.module.scss";

export function Header({ mode = "dark" }) {
  return (
    <header className={`${styles.header} ${styles[mode]}`}>
      <Link href="/" scroll={true}>
        <Image
          src={logo}
          className={styles.logo}
          alt="Aron Geller"
          height="auto"
        />
      </Link>
      <Menu mode={mode} />
    </header>
  );
}

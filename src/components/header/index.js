import { logo } from "@icons";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "./menu";
import styles from "./index.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="#">
        <Image
          src={logo}
          className={styles.logo}
          alt="Aron Geller"
          height="auto"
        />
      </Link>
      <Menu />
    </header>
  );
}

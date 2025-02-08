import { logo } from "@icons";
import Image from "next/image";
import Link from "next/link";
import { MenuBurger } from "./menu-burger";
import styles from "./index.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="#">
        <Image src={logo} className={styles.logo} alt="Aron Geller" />
      </Link>
      <MenuBurger open={false} />
    </header>
  );
}

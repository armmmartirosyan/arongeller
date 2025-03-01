import { Logo } from "./logo";
import { Menu } from "./menu";
import styles from "./index.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  );
}

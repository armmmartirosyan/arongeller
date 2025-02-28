import { Logo } from "./logo";
import { Menu } from "./menu";
import styles from "./index.module.scss";

export function Header({ mode = "dark" }) {
  return (
    <header className={`${styles.header} ${styles[mode]}`}>
      <Logo />
      <Menu mode={mode} />
    </header>
  );
}

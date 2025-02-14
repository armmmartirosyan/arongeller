import { MenuBurger } from "./menu-burger";
import { MENU } from "@constants";
import styles from "./index.module.scss";
import Link from "next/link";

export function Menu() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu_container}>
        {MENU.map((item) => (
          <Link href={item.link} key={item.text} className={styles.link}>
            {item.text}
          </Link>
        ))}
      </div>
      <MenuBurger open={false} />
    </div>
  );
}

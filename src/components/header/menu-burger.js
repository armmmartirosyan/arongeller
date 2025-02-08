import styles from "./index.module.scss";

export function MenuBurger({ open }) {
  return (
    <div className={`${styles.menu_burger} ${open ? styles.open : ""}`}>
      <div className={styles.menu_dash}></div>
      <div className={styles.menu_dash}></div>
    </div>
  );
}

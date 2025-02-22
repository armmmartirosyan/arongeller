import styles from "./index.module.scss";

export function MenuBurger({ open, mode }) {
  return (
    <div
      className={`${styles.menu_burger} ${open ? styles.open : ""} ${
        styles[mode]
      }`}
    >
      <div className={styles.menu_dash}></div>
      <div className={styles.menu_dash}></div>
    </div>
  );
}

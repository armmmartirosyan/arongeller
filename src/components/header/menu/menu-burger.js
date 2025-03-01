import styles from "./index.module.scss";

export function MenuBurger({ open, onClick }) {
  return (
    <div
      className={`${styles.menu_burger} ${open ? styles.open : ""}`}
      onClick={onClick}
    >
      <div className={styles.menu_dash}></div>
      <div className={styles.menu_dash}></div>
    </div>
  );
}

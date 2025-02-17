import styles from "./index.module.scss";

export function ReviewCard({ item }) {
  return (
    <div className={styles.container}>
      <p className={styles.primary_text}>{item.primaryText}</p>
      <p className={styles.text}>{item.text}</p>
      <h2 className={styles.name_location}>
        {item.reviewer},{" "}
        <span className={styles.location}>{item.location}</span>
      </h2>
    </div>
  );
}

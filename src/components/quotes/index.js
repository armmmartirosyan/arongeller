import { QUOTES } from "@constants";
import { Item } from "./item";
import styles from "./index.module.scss";

export function Quotes() {
  return (
    <div className={styles.container}>
      {QUOTES.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

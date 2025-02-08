import { CountUpCard } from "../count-up-card";
import { COUNTER_INFORMATION } from "@constants";
import styles from "./index.module.scss";

const firstFour = COUNTER_INFORMATION.slice(0, 4);

export function InfoCounter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        {firstFour.map((item) => (
          <CountUpCard key={item.name} item={item} style={styles.item} />
        ))}
      </div>
    </div>
  );
}

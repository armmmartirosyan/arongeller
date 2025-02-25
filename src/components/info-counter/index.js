import { CountUpCard } from "../count-up-card";
import { COUNTER_INFORMATION } from "@constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";
import Link from "next/link";

const firstFour = COUNTER_INFORMATION.slice(0, 4);

export function InfoCounter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        {firstFour.map((item) => (
          <CountUpCard key={item.name} item={item} style={styles.item} />
        ))}
      </div>

      <Link href="/portfolio" className={styles.details_link}>
        Explore
        <FontAwesomeIcon icon={faAngleRight} className={styles.right_icon} />
      </Link>
    </div>
  );
}

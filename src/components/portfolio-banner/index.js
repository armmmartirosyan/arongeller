import Image from "next/image";
import { COUNTER_INFORMATION } from "@constants";
import { crane } from "@images";
import styles from "./index.module.scss";

const firstSix = COUNTER_INFORMATION.slice(0, 6);

export function PortfolioBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.info_container}>
        {firstSix.map((item, index) => (
          <InfoItem key={index} item={item} />
        ))}
      </div>
      <Image src={crane} alt="Crane" className={styles.bg_i} />
      <p className={styles.text}>
        We create architecture that is not only elegant and luxurious but also
        thoughtfully designed for families. Our villas are crafted to be safe
        for children, comfortable for adults, and welcoming for generations to
        come. A well-designed home is more than a structure—it’s a place where
        life’s best moments happen.
      </p>
      <div className={styles.overlay} />
    </div>
  );
}

function InfoItem({ item }) {
  return (
    <div className={styles.info_item}>
      <p className={styles.info_item_count}>{item.count}</p>
      <p className={styles.info_item_name}>{item.name}</p>
    </div>
  );
}

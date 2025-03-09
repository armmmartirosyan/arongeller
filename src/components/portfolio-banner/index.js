"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { opacityScale } from "@utils";
import { useCountUp, useInViewport } from "@hooks";
import { COUNTER_INFORMATION } from "@constants";
import styles from "./index.module.scss";

const firstSix = COUNTER_INFORMATION.slice(-6);

export function PortfolioBanner() {
  return (
    <div className={styles.banner}>
      <motion.div
        className={styles.banner_bg}
        {...opacityScale({ duration: 0.8, once: true })}
      />
      <div className={styles.info_container}>
        {firstSix.map((item, index) => (
          <InfoItem key={index} item={item} />
        ))}
      </div>
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
  const targetRef = useRef(null);
  const enabled = useInViewport(targetRef);
  const count = useCountUp(item.count, enabled);

  return (
    <div className={styles.info_item} ref={targetRef}>
      <p className={styles.info_item_count}>{count}</p>
      <p className={styles.info_item_name}>{item.name}</p>
    </div>
  );
}

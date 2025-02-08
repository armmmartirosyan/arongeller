"use client";

import { memo, useRef } from "react";
import { useCountUp, useInViewport } from "@hooks";
import styles from "./index.module.scss";

export const CountUpCard = memo(function CountUpCard({ item, style = "" }) {
  const targetRef = useRef(null);
  const enabled = useInViewport(targetRef);
  const count = useCountUp(item.count, enabled);

  return (
    <article className={`${styles.container} ${style}`} ref={targetRef}>
      <h6 className={styles.name}>{item.name}</h6>
      <p className={styles.count}>
        {count} <span className={styles.plus}>+</span>
      </p>
    </article>
  );
});

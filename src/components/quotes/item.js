"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { memo, useRef } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const Item = memo(function Item({ item }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 420);

  return (
    <motion.div className={styles.item}>
      <div ref={ref} className={styles.img_wrapper}>
        <Image src={item.image} alt={item.text} className={styles.image} />
      </div>
      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className={styles.text}
      >
        {item.text}
      </motion.h2>
    </motion.div>
  );
});

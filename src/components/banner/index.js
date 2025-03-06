"use client";

import { motion } from "framer-motion";
import { zoomIn, fadeIn } from "@utils";

import styles from "./index.module.scss";

export function Banner() {
  return (
    <div className={styles.banner_wrapper}>
      <motion.section
        className={styles.banner}
        {...zoomIn({
          type: "spring",
          delay: 0,
          duration: 0.8,
          once: true,
        })}
      />

      <motion.h2
        className={styles.title}
        {...fadeIn({ direction: "down", duration: 0.4, once: true })}
      >
        Building <br />A <span className={styles.highlighted}>Better</span>{" "}
        <br />
        Tomorrow.
      </motion.h2>
      <p className={styles.text}>
        Where artistry meets engineering. We combine a passion for design with
        meticulous craftsmanship to create structures that stand the test of
        time.
      </p>
    </div>
  );
}

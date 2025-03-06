"use client";

import { motion } from "framer-motion";
import { LettersPullUp } from "@components";
import { fadeIn } from "@utils";
import styles from "./index.module.scss";

export function ReviewCard({ item, index }) {
  return (
    <motion.div
      className={styles.container}
      {...fadeIn({
        direction: index % 2 !== 1 ? "right" : "left",
        once: true,
        type: "spring",
        delay: 0.2,
      })}
    >
      <p className={styles.primary_text}>{item.primaryText}</p>
      <p className={styles.text}>{item.text}</p>
      <h2 className={styles.name_location}>
        {item.reviewer},{" "}
        <LettersPullUp className={styles.location}>
          {item.location}
        </LettersPullUp>
      </h2>
    </motion.div>
  );
}

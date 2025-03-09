"use client";

import { motion } from "framer-motion";
import { opacityScale, blurIn } from "@utils";
import { LettersPullUp } from "@components";

import styles from "./index.module.scss";

export function Banner() {
  return (
    <div className={styles.banner_wrapper}>
      <motion.section
        className={styles.banner}
        {...opacityScale({ duration: 1, once: true })}
      />
      <motion.h2
        className={styles.title_container}
        {...blurIn({ duration: 0.8, once: true })}
      >
        <LettersPullUp duration={0.9} className={styles.title}>
          Building
        </LettersPullUp>
        <br /> <span className={styles.title}>{`A  `}</span>
        <LettersPullUp duration={0.9} className={styles.highlighted}>
          Better
        </LettersPullUp>{" "}
        <br />
        <LettersPullUp duration={0.9} className={styles.title}>
          Tomorrow.
        </LettersPullUp>
      </motion.h2>
      <p className={styles.text}>
        Where artistry meets engineering. We combine a passion for design with
        meticulous craftsmanship to create structures that stand the test of
        time.
      </p>
    </div>
  );
}

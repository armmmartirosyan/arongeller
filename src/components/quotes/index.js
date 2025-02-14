"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { QUOTES } from "@constants";
import Image from "next/image";
import styles from "./index.module.scss";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Item({ item }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);

  return (
    <section className={styles.item}>
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
    </section>
  );
}

export function Quotes() {
  return (
    <div id="example" className={styles.container}>
      {QUOTES.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

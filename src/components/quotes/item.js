"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./index.module.scss";

export function Item({ item }) {
  return (
    <div className={styles.item}>
      <motion.div
        className={styles.img_wrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <Image src={item.image} alt={item.text} className={styles.image} />
      </motion.div>
      <motion.h2
        className={styles.text}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1, transform: "translateY(0)" },
          hidden: { opacity: 0, transform: "translateY(-20rem)" },
        }}
      >
        {item.text}
      </motion.h2>
    </div>
  );
}

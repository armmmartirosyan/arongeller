"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { memo, useRef } from "react";
import { PROJECTS } from "@constants";
import { AlbumItem } from "@components";
import styles from "./index.module.scss";

export const Album = memo(function Album({ containerRef }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["0 1", "0 0", "1 0"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.sticky}>
          <div className={styles.sticky_wrapper}>
            <p className={styles.sticky_text}>Architecture</p>
            <motion.div className={styles.text_cover} style={{ opacity }} />
          </div>
        </div>
        <div ref={ref} className={styles.content}>
          {PROJECTS.map((item, index) => (
            <div key={index} className={styles.row}>
              <AlbumItem
                album={item}
                className={styles.item}
                textContainerClass={styles.text_container_class}
              />
            </div>
          ))}
        </div>
        <div className={styles.empty} />
      </section>
    </div>
  );
});

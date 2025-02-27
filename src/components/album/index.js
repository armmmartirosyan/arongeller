"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { memo, useCallback, useRef } from "react";
import { PROJECTS } from "@constants";
import { AlbumItem } from "@components";
import styles from "./index.module.scss";

export const Album = memo(function Album() {
  const ref = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["0 0.85", "0 0"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const handleScroll = useCallback((e) => {
    const clientRect = e.target.getBoundingClientRect();

    if (clientRect.y !== 0) {
      const scrollElement = document.getElementById("album-container");

      scrollElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.wrapper}
      onScroll={handleScroll}
      id="album-container"
    >
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

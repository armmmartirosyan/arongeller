"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function TextFade({
  direction,
  children,
  className = "",
  containerClassName = "",
  staggerChildren = 0.1,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const FADE_DOWN = {
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
    hidden: { opacity: 0, y: direction === "down" ? -70 : 70 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : ""}
      viewport={{ once: false }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={containerClassName}
    >
      <motion.p variants={FADE_DOWN} className={className}>
        {children}
      </motion.p>
    </motion.div>
  );
}

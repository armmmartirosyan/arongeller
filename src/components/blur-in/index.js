"use client";

import { motion } from "framer-motion";

export const BlurIn = ({ children, className = "", duration = 0.8 }) => {
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {
          filter: "blur(20px)",
          opacity: 0,
        },
        show: {
          filter: "blur(0px)",
          opacity: 1,
          transition: {
            duration,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.span>
  );
};

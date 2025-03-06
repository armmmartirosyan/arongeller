"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const BlurIn = ({ children, className = "", duration = 0.8 }) => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      // ref={ref}
      className={className}
      // transition={{ duration }}
      // initial={{ filter: "blur(20px)", opacity: 0 }}
      // animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
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

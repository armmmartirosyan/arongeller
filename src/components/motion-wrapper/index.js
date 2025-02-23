"use client";

import { motion } from "framer-motion";

export function MotionWrapper({ children, ...rest }) {
  return <motion.div {...rest}>{children}</motion.div>;
}

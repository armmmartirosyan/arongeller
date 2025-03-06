"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CONTACT_LINKS } from "@constants";
import { slideIn } from "@utils";
import styles from "./index.module.scss";

export function Contacts() {
  return (
    <motion.div
      className={styles.contacts_container}
      {...slideIn({
        direction: "up",
        type: "spring",
        delay: 0.1,
        duration: 1,
      })}
    >
      {CONTACT_LINKS.map((item) => (
        <Link
          key={item.name}
          target={item.target}
          href={item.href}
          className={styles.contact_link}
        >
          {item.name}
        </Link>
      ))}
    </motion.div>
  );
}
